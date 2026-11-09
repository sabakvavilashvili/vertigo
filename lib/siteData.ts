export type Lang = "ka" | "en";

export type Localized = {
  ka: string;
  en: string;
};

export function t(lang: Lang, value: Localized): string {
  return value[lang];
}

export type Service = {
  number: string;
  title: Localized;
  description: Localized;
};

export type Project = {
  slug: string;
  name: Localized;
  location: Localized;
  category: Localized;
  year: string;
  image: string;
  summary: Localized;
  scope: Localized;
  outcome: Localized;
  gallery: string[];
};

export const site = {
  brand: "VERTIGO",
  title: {
    ka: "სასიმაღლო სამუშაოები - ალპინისტები",
    en: "High Altitude Rope Access"
  },
  tagline: {
    ka: "სამრეწველო სიმაღლეზე მუშაობა და თოკზე წვდომა",
    en: "Rope Access & Industrial Services"
  },
  email: "hello@example.com",
  phone: "+995 XXX XX XX XX",
  location: {
    ka: "თბილისი, საქართველო",
    en: "Tbilisi, Georgia"
  },
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" }
  ]
};

export const services: Service[] = [
  {
    number: "01",
    title: { ka: "თოკზე წვდომა", en: "Rope Access" },
    description: {
      ka: "უსაფრთხო და ეფექტური წვდომა რთულად მისადგომ ადგილებზე.",
      en: "Safe and efficient access to difficult-to-reach areas."
    }
  },
  {
    number: "02",
    title: { ka: "ინსპექცია", en: "Inspection" },
    description: {
      ka: "კონსტრუქციებისა და რთულად მისადგომი ზონების ინსპექტირება და შეფასება.",
      en: "Inspection and assessment of structures and hard-to-access locations."
    }
  },
  {
    number: "03",
    title: { ka: "მოვლა და შეკეთება", en: "Maintenance & Repair" },
    description: {
      ka: "ტექნიკური მომსახურება, შეკეთება და სიმაღლეზე სამუშაოები.",
      en: "Maintenance, repair, and technical work at height."
    }
  },
  {
    number: "04",
    title: { ka: "მონტაჟი", en: "Installation" },
    description: {
      ka: "სიმაღლეზე აღჭურვილობის, კონსტრუქციების და უსაფრთხოების სისტემების მონტაჟი.",
      en: "Installation of equipment, structures, safety systems, and components at height."
    }
  },
  {
    number: "05",
    title: { ka: "სამრეწველო ცოცვა", en: "Industrial Climbing" },
    description: {
      ka: "სპეციალიზებული წვდომის გადაწყვეტები რთული ინდუსტრიული გარემოებისთვის.",
      en: "Specialized access solutions for challenging industrial environments."
    }
  }
];

export const ropeAccessAdvantages = [
  {
    title: { ka: "მინიმალური მომზადება", en: "Minimal Setup" },
    description: {
      ka: "ტრადიციულ მეთოდებთან შედარებით ნაკლები ინფრასტრუქტურული მოთხოვნა.",
      en: "Less infrastructure compared with conventional access methods."
    }
  },
  {
    title: { ka: "რთული წვდომა", en: "Difficult Access" },
    description: {
      ka: "წვდომა ისეთ ადგილებზე, სადაც ამწეები ან ხარაჩოები ვერ აღწევს.",
      en: "Reach locations that are difficult or impossible to access using lifts or scaffolding."
    }
  },
  {
    title: { ka: "ეფექტურობა", en: "Efficient" },
    description: {
      ka: "სწრაფი მობილიზაცია და გარემოსთვის ნაკლები შეფერხება.",
      en: "Fast deployment and reduced disruption to the surrounding environment."
    }
  },
  {
    title: { ka: "მრავალფუნქციურობა", en: "Versatile" },
    description: {
      ka: "გამოსადეგია ინსპექციისთვის, მონტაჟისთვის, შეკეთებისა და სხვა სპეციალიზებული სამუშაოებისთვის.",
      en: "Suitable for inspection, maintenance, installation, repair, and specialized work."
    }
  }
];

export const projects: Project[] = [
  {
    slug: "facade-inspection-tbilisi",
    name: { ka: "ფასადის ინსპექცია", en: "Facade Inspection" },
    location: { ka: "თბილისი, საქართველო", en: "Tbilisi, Georgia" },
    category: { ka: "ინსპექცია", en: "Inspection" },
    year: "2026",
    image: "/images/projects/facade-inspection.svg",
    summary: {
      ka: "საპროექტო აღწერის დროებითი ჩანაცვლება. ჩაანაცვლეთ რეალური პროექტის დეტალებით.",
      en: "Placeholder project profile for future client case details."
    },
    scope: {
      ka: "სამუშაოების მოცულობის დროებითი ჩანაცვლება. ჩაანაცვლეთ დადასტურებული მონაცემებით.",
      en: "Placeholder scope of work. Replace with exact tasks, access constraints, and methods once project documentation is approved."
    },
    outcome: {
      ka: "შედეგის დროებითი ჩანაცვლება. ჩაანაცვლეთ რეალური შედეგებით.",
      en: "Placeholder outcome. Replace with measurable project results and final delivery information."
    },
    gallery: [
      "/images/projects/facade-inspection.svg",
      "/images/projects/bridge-cable-access.svg",
      "/images/projects/highrise-maintenance.svg"
    ]
  },
  {
    slug: "bridge-cable-access",
    name: { ka: "ხიდის კაბელზე წვდომა", en: "Bridge Cable Access" },
    location: { ka: "ქუთაისი, საქართველო", en: "Kutaisi, Georgia" },
    category: { ka: "მოვლა", en: "Maintenance" },
    year: "2026",
    image: "/images/projects/bridge-cable-access.svg",
    summary: {
      ka: "საპროექტო აღწერის დროებითი ჩანაცვლება. ჩაანაცვლეთ რეალური პროექტის დეტალებით.",
      en: "Placeholder project profile for future client case details."
    },
    scope: {
      ka: "სამუშაოების მოცულობის დროებითი ჩანაცვლება. ჩაანაცვლეთ დადასტურებული მონაცემებით.",
      en: "Placeholder scope of work. Replace with exact tasks, access constraints, and methods once project documentation is approved."
    },
    outcome: {
      ka: "შედეგის დროებითი ჩანაცვლება. ჩაანაცვლეთ რეალური შედეგებით.",
      en: "Placeholder outcome. Replace with measurable project results and final delivery information."
    },
    gallery: [
      "/images/projects/bridge-cable-access.svg",
      "/images/projects/facade-inspection.svg",
      "/images/projects/tower-installation.svg"
    ]
  },
  {
    slug: "highrise-maintenance",
    name: { ka: "მაღლივი შენობის მოვლა", en: "High-Rise Maintenance" },
    location: { ka: "ბათუმი, საქართველო", en: "Batumi, Georgia" },
    category: { ka: "მოვლა", en: "Maintenance" },
    year: "2026",
    image: "/images/projects/highrise-maintenance.svg",
    summary: {
      ka: "საპროექტო აღწერის დროებითი ჩანაცვლება. ჩაანაცვლეთ რეალური პროექტის დეტალებით.",
      en: "Placeholder project profile for future client case details."
    },
    scope: {
      ka: "სამუშაოების მოცულობის დროებითი ჩანაცვლება. ჩაანაცვლეთ დადასტურებული მონაცემებით.",
      en: "Placeholder scope of work. Replace with exact tasks, access constraints, and methods once project documentation is approved."
    },
    outcome: {
      ka: "შედეგის დროებითი ჩანაცვლება. ჩაანაცვლეთ რეალური შედეგებით.",
      en: "Placeholder outcome. Replace with measurable project results and final delivery information."
    },
    gallery: [
      "/images/projects/highrise-maintenance.svg",
      "/images/projects/facade-inspection.svg",
      "/images/projects/bridge-cable-access.svg"
    ]
  },
  {
    slug: "tower-installation",
    name: { ka: "ანძის მონტაჟი", en: "Tower Installation" },
    location: { ka: "რუსთავი, საქართველო", en: "Rustavi, Georgia" },
    category: { ka: "მონტაჟი", en: "Installation" },
    year: "2026",
    image: "/images/projects/tower-installation.svg",
    summary: {
      ka: "საპროექტო აღწერის დროებითი ჩანაცვლება. ჩაანაცვლეთ რეალური პროექტის დეტალებით.",
      en: "Placeholder project profile for future client case details."
    },
    scope: {
      ka: "სამუშაოების მოცულობის დროებითი ჩანაცვლება. ჩაანაცვლეთ დადასტურებული მონაცემებით.",
      en: "Placeholder scope of work. Replace with exact tasks, access constraints, and methods once project documentation is approved."
    },
    outcome: {
      ka: "შედეგის დროებითი ჩანაცვლება. ჩაანაცვლეთ რეალური შედეგებით.",
      en: "Placeholder outcome. Replace with measurable project results and final delivery information."
    },
    gallery: [
      "/images/projects/tower-installation.svg",
      "/images/projects/highrise-maintenance.svg",
      "/images/projects/facade-inspection.svg"
    ]
  }
];

export const approach = [
  {
    number: "01",
    title: { ka: "შეფასება", en: "Assess" },
    description: {
      ka: "გარემოს და მოთხოვნების სრულად გააზრება.",
      en: "Understand the environment and project requirements."
    }
  },
  {
    number: "02",
    title: { ka: "დაგეგმვა", en: "Plan" },
    description: {
      ka: "უსაფრთხო და ეფექტური წვდომის გეგმის შემუშავება.",
      en: "Develop the safest and most efficient access solution."
    }
  },
  {
    number: "03",
    title: { ka: "წვდომა", en: "Access" },
    description: {
      ka: "სამუშაო ზონამდე პროფესიული თოკზე წვდომის ტექნიკებით მისვლა.",
      en: "Reach the work location using professional rope access techniques."
    }
  },
  {
    number: "04",
    title: { ka: "შესრულება", en: "Execute" },
    description: {
      ka: "დავალების ზუსტი, ეფექტური და პროფესიული შესრულება.",
      en: "Complete the required work efficiently and professionally."
    }
  }
];

export const uiText = {
  navHome: { ka: "მთავარი", en: "Home" },
  navProjects: { ka: "პროექტები", en: "Projects" },
  navAbout: { ka: "ჩვენ შესახებ", en: "About" },
  navServices: { ka: "სერვისები", en: "Services" },
  navJoin: { ka: "გახდი ჩვენი გუნდის წევრი", en: "Join our team" },
  navContact: { ka: "კონტაქტი", en: "Contact" },
  requestQuote: { ka: "შეთავაზების მოთხოვნა", en: "Request a Quote" },
  footerNavigation: { ka: "ნავიგაცია", en: "Navigation" },
  footerContact: { ka: "კონტაქტი", en: "Contact" },
  footerSocial: { ka: "სოციალური", en: "Social" },
  copyright: { ka: "© 2026 VERTIGO. ყველა უფლება დაცულია.", en: "© 2026 VERTIGO. All rights reserved." }
};
