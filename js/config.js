/* ===== CHURCH CONFIG ===== */
/* Edit all editable church info here. Use [EDIT ME] for any missing value. */

window.churchConfig = {
  siteName: "St. John's Cathedral, Nazareth",
  shortName: "St. John's",
  location: "Nazareth, Tamil Nadu, India",
  coordinates: {
    lat: 8.5607,
    lng: 77.9719
  },
  denomination: "Church of South India (formerly Church of England / S.P.G. mission)",
  diocese: "Thoothukudi–Nazareth Diocese",
  architecture: "Gothic style",
  churchYear: "completed 1928",
  towerDetails: "Tower exactly 200 ft with 7 stratums, clocks on four sides and a neon cross at the top",
  cathedralStatus: "Elevated to Cathedral of the Tuticorin–Nazareth Diocese on 23 Oct 2003; inaugurated on 25 Oct 2003 by the CSI Moderator Rt. Rev. Dr K.J. Samuel",
  currentBishop: "Rt. Rev. Timothy Ravinder",
  previousBishops: [
    { name: "Rt. Rev. Dr J.A.D. Jebachandran", years: "2006–2013" },
    { name: "Rt. Rev. Dr S.E.C. Devasahayam", years: "2017–2020" }
  ],
  address: "3 Sannathi Street, Nazareth, Tamil Nadu 628617, India",
  phone: "+91 4639 278 271",
  email: "stjohnscathedralnazareth@gmail.com",
  googleMapsEmbed: "https://www.google.com/maps?q=Nazareth%20Tamil%20Nadu%20India&output=embed",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Nazareth%20Tamil%20Nadu%20India",
  socialLinks: {
    facebook: "[EDIT ME]",
    instagram: "[EDIT ME]",
    youtube: "[EDIT ME]",
    whatsapp: "[EDIT ME]"
  },
  serviceTimes: {
    sunday: [
      { label: "First Sunday", time: "5:00 AM, 9:00 AM, 6:30 PM" },
      { label: "Other Sundays", time: "7:00 AM, 9:00 AM, 6:30 PM" }
    ],
    weekdays: [
      { day: "Monday", time: "7:00 AM, 7:00 PM" },
      { day: "Tuesday", time: "7:00 AM, 7:00 PM" },
      { day: "Wednesday", time: "7:00 AM, 7:00 PM" },
      { day: "Thursday", time: "7:00 AM, 7:00 PM" },
      { day: "Friday", time: "7:00 AM, 7:00 PM" },
      { day: "Saturday", time: "7:00 AM, 7:00 PM" }
    ],
    nextService: "[EDIT ME]"
  },
  liveStreamEnabled: false,
  forms: {
    prayerAction: "[EDIT ME: Formspree / Google Forms / PHP endpoint]",
    contactAction: "[EDIT ME: Formspree / Google Forms / PHP endpoint]",
    newsletterAction: "[EDIT ME: Formspree / Google Forms / PHP endpoint]"
  },
  giving: {
    upiId: "[EDIT ME]",
    bankName: "[EDIT ME]",
    accountName: "[EDIT ME]",
    accountNumber: "[EDIT ME]",
    IFSC: "[EDIT ME]",
    qrCode: "[EDIT ME: path/to/upi-qr.png]"
  },
  placeholders: {
    pastorNames: "[EDIT ME]",
    eventDates: "[EDIT ME]",
    bulletinPdf: "[EDIT ME: assets/docs/bulletin.pdf]",
    sermonAudio: "[EDIT ME: audio URL]",
    sermonVideo: "[EDIT ME: YouTube embed URL]"
  },
  nav: {
    home: { label: "Home", href: "../index.html" },
    about: { label: "About", href: "about.html" },
    history: { label: "History", href: "history.html" },
    architecture: { label: "Architecture & Relics", href: "architecture.html" },
    worship: { label: "Worship & Services", href: "worship.html" },
    clergy: { label: "Clergy & Leadership", href: "clergy.html" },
    ministries: { label: "Ministries", href: "ministries.html" },
    events: { label: "Events", href: "events.html" },
    sermons: { label: "Sermons & Media", href: "sermons.html" },
    gallery: { label: "Gallery", href: "gallery.html" },
    giving: { label: "Giving", href: "giving.html" },
    prayer: { label: "Prayer Requests", href: "prayer.html" },
    contact: { label: "Contact", href: "contact.html" },
    news: { label: "News", href: "news.html" },
    privacy: { label: "Privacy", href: "privacy.html" }
  }
};
