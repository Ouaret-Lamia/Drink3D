const navLinks = [
  {
    id: "coffee",
    title: "Coffee",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const coffeeLists = [
  {
    name: "Espresso Romano",
    country: "Italy",
    detail: "Bright, Citrusy",
    price: "$3.50",
  },
  {
    name: "Turkish Coffee",
    country: "Turkey",
    detail: "Bold, Spiced",
    price: "$4.00",
  },
  {
    name: "Flat White",
    country: "Australia",
    detail: "Smooth, velvety",
    price: "$4.20",
  },
  {
    name: "Café de Olla",
    country: "Mexico",
    detail: "Sweet, Cinnamon",
    price: "$3.80",
  },
];

const refreshingLists = [
  {
    name: "Cold Brew",
    country: "US",
    detail: "Smooth & chilled",
    price: "$4.80",
  },
  {
    name: "Affogato",
    country: "Italy",
    detail: "Espresso over gelato",
    price: "$5.90",
  },
  {
    name: "Vietnamese Iced Coffee",
    country: "Vietnam",
    detail: "Sweet & strong",
    price: "$5.50",
  },
  {
    name: "Frappé",
    country: "Greece",
    detail: "Frothy & cool",
    price: "$5.20",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Perfectly balanced blends",
  "Topped with latte art perfection",
  "Served piping hot every time",
  "Expertly brewed & poured",
];

const goodLists = [
  "Freshly roasted beans",
  "Expert brewing methods",
  "Barista-crafted perfection",
  "Aromas that awaken the senses",
];

const storeInfo = {
  address: "45 Rue Didouche Mourad, Alger-Centre, Alger 16000",
  contact: {
    phone: "+213 550 23 45 67",
    email: "contact@soft-muse.com",
  },
};

const openingHours = [
  { day: "Sun–Thu", time: "6:00am – 7pm" },
  { day: "Fri", time: "7:00am – 9pm" },
  { day: "Sat", time: "7:00am – 9pm" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCoffees = [
  {
    id: 1,
    name: "Espresso",
    image: "/images/coffee1.png",
    title: "Small Cup, Big Kick",
    description:
      "A rich, concentrated shot of coffee brewed under pressure. Perfect for a quick energy boost or as the base for your favorite coffee drinks.",
  },
  {
    id: 2,
    name: "Cappuccino",
    image: "/images/coffee2.png",
    title: "Foamy, Smooth, and Balanced",
    description:
      "Equal parts espresso, steamed milk, and milk foam. A creamy classic that blends bold coffee with silky texture.",
  },
  {
    id: 3,
    name: "Latte",
    image: "/images/coffee3.png",
    title: "Mellow Flavor, Velvety Feel",
    description:
      "Espresso combined with plenty of steamed milk and a thin layer of foam. Light, smooth, and customizable with flavors like vanilla or caramel.",
  },
  {
    id: 4,
    name: "Cold Brew",
    image: "/images/coffee4.png",
    title: "Cool, Smooth, Refreshing",
    description:
      "Coffee steeped in cold water for hours, creating a naturally sweet, low-acidity brew. Best served over ice on warm days.",
  },
];

export {
  navLinks,
  coffeeLists,
  refreshingLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCoffees,
};
