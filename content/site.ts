const phone = "+995 XXX XX XX XX";
const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}`;

export const site = {
  brand: "VERTIGO",
  title: {
    ka: "VERTIGO - სასიმაღლო სამუშაოები / ინდუსიტრიული ალპინიზმი",
    en: "VERTIGO - Rope Access / Industrial Alpinism"
  },
  email: "contact@vertigo.com",
  phone,
  whatsappUrl,
  location: {
    ka: "თბილისი, საქართველო",
    en: "Tbilisi, Georgia"
  },
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "WhatsApp", href: whatsappUrl }
  ]
};

export const navigation = {
  home: { ka: "მთავარი", en: "Home" },
  about: { ka: "ჩვენ შესახებ", en: "About" },
  services: { ka: "სერვისები", en: "Services" },
  projects: { ka: "პროექტები", en: "Projects" },
  contact: { ka: "კონტაქტი", en: "Contact" },
  requestQuote: { ka: "დაგვიკავშირდით", en: "Contact Us" },
  languageLabel: { ka: "ენის არჩევა", en: "Choose Language" },
  georgianLabel: { ka: "ქართული", en: "Georgian" },
  englishLabel: { ka: "ინგლისური", en: "English" },
  georgianShort: { ka: "ქარ", en: "KA" },
  englishShort: { ka: "ინგ", en: "EN" }
};
