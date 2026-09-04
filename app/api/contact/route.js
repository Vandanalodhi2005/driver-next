import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Build a reusable transporter from env vars
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Required for shared hosting/GoDaddy mail server certificates
    },
  });
}

export async function POST(request) {
  // --- Guard: check SMTP env vars are loaded ---
  const missingVars = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"].filter(
    (key) => !process.env[key]
  );
  if (missingVars.length > 0) {
    console.error(
      `[Contact API] Missing env vars: ${missingVars.join(", ")}. ` +
      "Did you restart the dev server after editing .env?"
    );
    return NextResponse.json(
      { success: false, error: "Server email configuration is incomplete. Please contact the administrator." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;


    // --- Basic server-side validation ---
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // if (message.trim().length < 20) {
    //   return NextResponse.json(
    //     { success: false, error: "Message must be at least 20 characters." },
    //     { status: 400 }
    //   );
    // }

    const transporter = createTransporter();

    const subjectLabels = {
      topic: "Topic Suggestion",
      feedback: "Content Feedback",
      question: "General Question",
      other: "Other",
    };
    const subjectLabel = subjectLabels[subject] ?? subject;

    // --- Email to site owner ---
    await transporter.sendMail({
      from: `"Driver Info Hub Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || "smarteps@innovationdynamicsgroup.com",
      replyTo: email,
      subject: `[Contact Form] ${subjectLabel} — from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:32px;border-radius:12px;border:1px solid #e2e8f0;">
          <h2 style="color:#024ad8;margin-top:0;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;">
            <tr style="background:#f1f5f9;">
              <td style="padding:10px 16px;font-weight:bold;color:#475569;width:120px;font-size:13px;">Name</td>
              <td style="padding:10px 16px;color:#0f172a;font-size:14px;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:10px 16px;font-weight:bold;color:#475569;width:120px;font-size:13px;">Email</td>
              <td style="padding:10px 16px;font-size:14px;"><a href="mailto:${escapeHtml(email)}" style="color:#024ad8;">${escapeHtml(email)}</a></td>
            </tr>
            <tr style="background:#f1f5f9;">
              <td style="padding:10px 16px;font-weight:bold;color:#475569;font-size:13px;">Topic</td>
              <td style="padding:10px 16px;color:#0f172a;font-size:14px;">${escapeHtml(subjectLabel)}</td>
            </tr>
            <tr>
              <td style="padding:10px 16px;font-weight:bold;color:#475569;font-size:13px;vertical-align:top;">Message</td>
              <td style="padding:10px 16px;color:#0f172a;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
          <p style="color:#94a3b8;font-size:12px;margin-top:24px;text-align:center;">
            Sent via Driver Info Hub contact form · driverinfohub.com
          </p>
        </div>
      `,
    });

    // --- Auto-reply to the sender (optional, fail-safe) ---
    try {
      await transporter.sendMail({
        from: `"Driver Info Hub" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "We received your message — Driver Info Hub",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:32px;border-radius:12px;border:1px solid #e2e8f0;">
            <h2 style="color:#024ad8;margin-top:0;">Thanks for reaching out, ${escapeHtml(name)}!</h2>
            <p style="color:#334155;font-size:14px;line-height:1.7;">
              We've received your message and will get back to you within <strong>2–3 working days</strong>.
            </p>
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;margin:24px 0;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:bold;color:#64748b;text-transform:uppercase;letter-spacing:.05em;">Your message</p>
              <p style="margin:0;color:#334155;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
            </div>
            <p style="color:#334155;font-size:14px;">Best regards,<br/><strong>Driver Info Hub Team</strong></p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;"/>
            <p style="color:#94a3b8;font-size:12px;text-align:center;margin:0;">
              <a href="https://driverinfohub.com" style="color:#024ad8;text-decoration:none;">driverinfohub.com</a>
              · support@driverinfohub.com
            </p>
          </div>
        `,
      });
    } catch (autoReplyErr) {
      console.warn("[Contact API] Auto-reply email could not be sent:", autoReplyErr?.message || autoReplyErr);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API] Error sending email:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

// Prevent XSS in email HTML
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
