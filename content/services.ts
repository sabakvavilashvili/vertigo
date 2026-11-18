import type { Service } from "./types";

export const servicesSection = {
  title: { ka: "ჩვენი სერვისები", en: "Our Services" },
  contactButton: { ka: "დაგვიკავშირდით", en: "Contact Us" },
  items: [
    {
      title: { ka: "წმენდა", en: "Cleaning" },
      image: "/images/services/cleaning.svg",
      details: [
        { ka: "ფანჯრების წმენდა", en: "Window cleaning" },
        { ka: "ჩარჩოების წმენდა", en: "Frame cleaning" },
        { ka: "ფასადების წმენდა", en: "Facade cleaning" },
        { ka: "ლიფტის შახტების წმენდა", en: "Elevator shaft cleaning" },
        { ka: "სხვადასხვა სახის კონსტრუქციების წმენდა", en: "Cleaning of Various Types of Structures" }
      ]
    },
    {
      title: { ka: "მონტაჟი / დემონტაჟი", en: "Installation / Dismantling" },
      image: "/images/services/installation.svg",
      details: [
        { ka: "სხვადასხვა აგრეგატების", en: "Various units" },
        { ka: "ელექტრონული მოწყობილობების", en: "Electronic devices" },
        { ka: "მილების", en: "Pipes" },
        { ka: "შენობა-ნაგებობების წყალსაწრეტი ღარების", en: "Building drainage gutters" },
        { ka: "კაბელების", en: "Cables" },
        { ka: "განათებების", en: "Lighting" },
        { ka: "ლაითბოქსების", en: "Lightboxes" }
      ]
    },
    {
      title: { ka: "ღებვა", en: "Painting" },
      image: "/images/services/painting.svg",
      details: [
        { ka: "შენობა-ნაგებობების ფასადების ღებვა", en: "Painting of building facades" },
        { ka: "სხვადასხვა სახის კონსტრუქციების ღებვა", en: "Painting of various types of structures" },
        { ka: "ზედაპირების ანტიკოროზიული დამუშავება", en: "Anti-corrosion treatment of surfaces" }
      ]
    },
    {
      title: { ka: "დაცვა / აღდგენა", en: "Protection / Restoration" },
      image: "/images/services/protection.svg",
      details: [
        { ka: "ფასადის თბოიზოლაცია", en: "Facade thermal insulation" },
        { ka: "ფასადის ჰიდროიზოლაცია", en: "Facade waterproofing" },
        { ka: "ფასადების ლესვა", en: "Facade plastering" },
        { ka: "ბზარების დამუშავება", en: "Crack treatment" },
        { ka: "ფასადის კომპონენტის აღდგენა/შეკეთება", en: "Restoration / repair of facade components" }
      ]
    },
    {
      title: { ka: "კლდეები და ბუნებრივი რელიეფები", en: "Rock Faces and Natural Terrain" },
      image: "/images/services/rocks.svg",
      details: [
        { ka: "ინსპექტირება", en: "Inspection" },
        { ka: "კლდეების წმენდა", en: "Rock face cleaning" },
        { ka: "ქვათაცვენის საწინააღმდეგო ბადეების მონტაჟი", en: "Installation of rockfall protection nets" },
        { ka: "კლდეების გამაგრება", en: "Rock face stabilization" }
      ]
    },
    {
      title: { ka: "ფროდაქშენი", en: "Production" },
      image: "/images/services/production.svg",
      details: [
        { ka: "ფროდაქშენის სასიმაღლო მხარდაჭერა", en: "High-altitude support for productions" },
        { ka: "კონსტრუქციების აწყობა/დაშლა", en: "Assembly / disassembly of structures" },
        { ka: "პიროვნებისა და ობიექტების სიმაღლეზე მანიპულირება", en: "Handling of people and objects at height" }
      ]
    },
    {
      title: { ka: "ინდივიდუალური სერვისები", en: "Custom Services" },
      image: "/images/services/custom.svg",
      custom: true,
      details: [
        { ka: "თუ ვერ იპოვეთ თქვენთვის შესაბამისი სერვისი, დაგვიკავშირდით.", en: "If you can't find the service you need, contact us." }
      ]
    }
  ] satisfies Service[]
};
