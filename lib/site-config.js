export const siteConfig = {
  name: "Driver Info Hub",
  description: "Your trusted resource for understanding printer drivers, troubleshooting issues, and finding clear answers without technical complexity.",
  url: "https://driverinfohub.com",
  company: {
    name: "16904599 CANADA INC.",
    email: "support@driverinfohub.com",
    address: "95 Broadacre Dr, Kitchener, ON N2R 0S5, Canada",
    contactNote: "Have a question or topic suggestion? We would love to hear from you."
  },
  disclaimer: "Driver Info Hub is an independent educational resource designed to help users understand printer drivers, setup procedures, compatibility, and troubleshooting methods. Content is provided for informational purposes only and does not represent any printer manufacturer, hardware vendor, or software publisher.",
  copyright: `© 2026 Driver Info Hub. All rights reserved.`,
  
  // Header Main Navigation Links
  mainNav: [
    { title: "Home", href: "/" },
    { 
      title: "All Drivers", 
      href: "/drivers",
      hasDropdown: true,
      children: [
        { title: "All Device Drivers", href: "/drivers", desc: "Overview of all hardware driver categories" },
        { title: "Printer Drivers", href: "/drivers/printers", desc: "Setup, wireless config, spooler fixes" },
        { title: "Scanner Drivers", href: "/drivers/scanners", desc: "TWAIN/WIA protocols & scanning utilities" },
        { title: "Graphics Drivers", href: "/drivers/graphics", desc: "GPU updates, display resolution & crash fixes" },
        { title: "Audio Drivers", href: "/drivers/audio", desc: "Sound card, Realtek, DAC & microphone fixes" },
        { title: "Wi-Fi & Network", href: "/drivers/network", desc: "LAN, WLAN, adapter latency & connectivity" },
        { title: "Bluetooth Drivers", href: "/drivers/bluetooth", desc: "Pairing, audio stutter & dongle drivers" },
        { title: "USB Drivers", href: "/drivers/usb", desc: "USB 3.0/Type-C controllers & device recognition" },
      ]
    },
    { title: "Knowledge Base", href: "/knowledge-base" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],

  // Footer Specific Navigation Groups
  footerLinks: {
    siteLinks: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Blog", href: "/blog" },
      { title: "Knowledge", href: "/knowledge-base" },
      { title: "Contact", href: "/contact" },
      { title: "Sitemap", href: "/sitemap-page" },
    ],
    driverOverviews: [
      { title: "All Device Drivers", href: "/drivers" },
      { title: "Printer Drivers", href: "/drivers/printers" },
      { title: "Scanner Drivers", href: "/drivers/scanners" },
      { title: "Graphics Drivers", href: "/drivers/graphics" },
      { title: "Audio Drivers", href: "/drivers/audio" },
      { title: "Wi-Fi & Network", href: "/drivers/network" },
      { title: "Bluetooth Drivers", href: "/drivers/bluetooth" },
      { title: "USB Drivers", href: "/drivers/usb" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms of Use", href: "/terms" },
      { title: "Disclaimer", href: "/disclaimer" },
      { title: "Cookie Policy", href: "/cookie-policy" },
      { title: "Advertising Disclosure", href: "/advertising-disclosure" },
      { title: "Accessibility", href: "/accessibility" },
    ],
    bottomBarLegal: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms", href: "/terms" },
      { title: "Disclaimer", href: "/disclaimer" },
      { title: "Cookies", href: "/cookie-policy" },
      { title: "Advertising Disclosure", href: "/advertising-disclosure" },
      { title: "Accessibility", href: "/accessibility" },
      { title: "Sitemap", href: "/sitemap-page" },
    ]
  },

  // Driver Categories Detailed Info
  driverCategories: [
    {
      id: "printers",
      title: "Printer Drivers",
      slug: "printers",
      icon: "Printer",
      badge: "Primary Focus",
      count: "120+ Guides",
      summary: "Understand print spoolers, wireless network setup, driver installation, and offline error resolutions.",
      popularTopics: [
        "How to Fix 'Printer Driver is Unavailable' in Windows 10/11",
        "Universal Print Drivers vs. Specific Model Drivers",
        "Step-by-Step Wireless Printer Driver Installation",
        "Fixing Print Spooler Service Crash Loops"
      ]
    },
    {
      id: "scanners",
      title: "Scanner Drivers",
      slug: "scanners",
      icon: "Scan",
      badge: "Imaging",
      count: "45+ Guides",
      summary: "Troubleshoot TWAIN, WIA, and ISIS scanning driver communication errors on modern OS.",
      popularTopics: [
        "TWAIN vs WIA Drivers: Which One Should You Select?",
        "Scanner Not Detected Over Network Setup",
        "Fixing Flatbed Feeder Driver Errors"
      ]
    },
    {
      id: "graphics",
      title: "Graphics Drivers",
      slug: "graphics",
      icon: "Monitor",
      badge: "Performance",
      count: "85+ Guides",
      summary: "Clean GPU installation, DDU cleanup procedures, multi-display configuration, and rendering crash fixes.",
      popularTopics: [
        "How to Clean Install GPU Drivers using DDU",
        "Resolving Black Screen after Driver Update",
        "Game Crash / Direct3D Device Lost Fixes"
      ]
    },
    {
      id: "audio",
      title: "Audio Drivers",
      slug: "audio",
      icon: "Volume2",
      badge: "Multimedia",
      count: "50+ Guides",
      summary: "Realtek High Definition Audio, USB DACs, spatial audio setup, and missing output device fixes.",
      popularTopics: [
        "No Sound Output After Windows Update",
        "Microphone Not Working / Audio Endpoint Issues",
        "Realtek Audio Console Not Opening"
      ]
    },
    {
      id: "network",
      title: "Wi-Fi & Network",
      slug: "network",
      icon: "Wifi",
      badge: "Connectivity",
      count: "65+ Guides",
      summary: "WLAN adapters, Gigabit Ethernet controllers, roaming sensitivity, and dropping connection fixes.",
      popularTopics: [
        "Wi-Fi Adapter Disconnecting Randomly",
        "Updating Intel / Realtek PCIe Network Drivers",
        "Fixing 'No Internet, Secured' Driver Glitches"
      ]
    },
    {
      id: "bluetooth",
      title: "Bluetooth Drivers",
      slug: "bluetooth",
      icon: "Bluetooth",
      badge: "Wireless",
      count: "40+ Guides",
      summary: "Bluetooth 5.0+ LE protocols, headset audio stuttering, pairing failures, and missing toggle fixes.",
      popularTopics: [
        "Bluetooth Toggle Disappeared in Windows Settings",
        "Fixing Audio Stutter on Bluetooth Headphones",
        "Generic Bluetooth Adapter Driver Override"
      ]
    },
    {
      id: "usb",
      title: "USB Drivers",
      slug: "usb",
      icon: "Usb",
      badge: "Hardware",
      count: "55+ Guides",
      summary: "USB 3.0/3.2 eXtensible Host Controller, Type-C hub detection, and unrecognized device fixes.",
      popularTopics: [
        "Fixing 'USB Device Not Recognized (Code 43)'",
        "Updating Motherboard Chipset & USB Controllers",
        "USB Ports Stop Working After Sleep Mode"
      ]
    }
  ],

  // Sample Featured Blog Posts
  featuredPosts: [
    {
      title: "Comprehensive Printer Driver Guide: Troubleshooting Unavailable Errors in 2026",
      slug: "comprehensive-printer-driver-guide-troubleshooting",
      category: "Printer Drivers",
      date: "Feb 24, 2026",
      readTime: "7 min read",
      author: "Alex Morgan",
      excerpt: "Step-by-step educational guide on deciphering print spooler errors, corrupt driver files, and resetting Windows printing subsystems."
    },
    {
      title: "How to Safely Update Drivers Without Third-Party Bloatware",
      slug: "how-to-safely-update-drivers-cleanly",
      category: "Knowledge Base",
      date: "Feb 18, 2026",
      readTime: "5 min read",
      author: "Tech Editorial Team",
      excerpt: "Why automatic driver updater tools can be risky and how to leverage official OEM packages and Device Manager cleanly."
    },
    {
      title: "Fixing Scanner Driver TWAIN Communication Errors on Windows 11",
      slug: "fixing-scanner-driver-twain-communication-errors",
      category: "Scanner Drivers",
      date: "Feb 12, 2026",
      readTime: "6 min read",
      author: "Elena Rostova",
      excerpt: "Learn how modern OS sandboxing impacts legacy scanner TWAIN drivers and how to configure WIA compatibility mode."
    }
  ]
};
