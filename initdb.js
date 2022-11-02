console.log("db script starting");
const db = new Mongo().getDB("plantshop");

const products = db.createCollection("products", { capped: false });
console.log("Created products collection.");

db.products.insertMany([
  {
    title: "Precious Monstera",
    price: 499,
    description:
      "Monsteras prefer soil that is lightly moist, and generally like to dry out a little bit between waterings. As epiphytes with aerial roots, they are sensitive to overwatering, so they don't want to sit in soggy soil. Once the top 2 to 4 inches of the soil are dry, your plant might use a drink.",
    category: ["plant", "greenery", "monstera"],
    weight: "879 gram",
    manufacturer: "Green&Pots AB",
    mainImage: {
      url: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      alt: "Two hands holding pot with a monstera",
    },
    moreImages: [
      {
        url: "https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        alt: "monstera from above",
        _id: {
          $oid: "63401c9aef03a28718e7ee3f",
        },
      },
    ],
    __v: 0,
    slug: "precious-monstera",
  },
  {
    title: "Blissed ashtray and vase set",
    price: 729,
    description:
      "Sculpted by the many talented Seth Rogen made just for you, simply enjoy!",
    category: ["ashtray", "pot", "clay", "Seth Rogen"],
    weight: "450 gram",
    manufacturer: "Seth Rogen Inc.",
    mainImage: {
      url: "https://cdn.shopify.com/s/files/1/0588/0070/1647/products/ashtraysetbysethinmoss_1080x.png?v=1661987040",
      alt: "Ashtray with cigarette",
    },
    moreImages: [
      {
        url: "",
        alt: "",
        _id: {
          $oid: "63401d42ef03a28718e7ee46",
        },
      },
    ],
    __v: 0,
    slug: "blissed-ashtray-and-vase-set",
  },
  {
    title: "Seeds of surprise ",
    price: 429,
    description:
      "Natural derived seeds from nature to help you heel and soothe your troubled soul",
    category: ["seeds", "healing"],
    weight: "150 gram",
    manufacturer: "HerbHealing Co.Inc,",
    mainImage: {
      url: "https://images.unsplash.com/photo-1604768802835-899055f0e245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Mysterious seeds",
    },
    moreImages: [
      {
        url: "",
        alt: "",
        _id: {
          $oid: "63402020ef03a28718e7ee4d",
        },
      },
    ],
    __v: 0,
    slug: "seeds-of-surprise",
  },
  {
    title: "Dotted ashtray",
    price: 729,
    description:
      "Playful ashtray by the many talented Seth Rogen, simply enjoy!",
    category: ["ashtray", "pot", "clay", "Seth Rogen"],
    weight: "450 gram",
    manufacturer: "Seth Rogen Inc.",
    mainImage: {
      url: "https://bearworldmag.com/wp-content/uploads/2022/06/Untitled-design-73-1024x576.png",
      alt: "Orange ashtray",
    },
    moreImages: [
      {
        url: "",
        alt: "",
        _id: {
          $oid: "6340210fef03a28718e7ee58",
        },
      },
    ],
    __v: 0,
  },
  {
    title: "Mandrake",
    price: 899,
    description:
      "A Mandrake, also known as Mandragora, is a magical and sentient plant which has a root that lookes like a human. When unearthed, its cry when young could knock a person unconscious or when older be fatal to any person who heard it. When matured, Mandrakes cam be cut up to serve as a prime ingredient for the Mandrake Restorative Draught that cures those who have been petrified",
    category: ["magical plant", "plant", "petrified", "cure"],
    weight: "1150 gram",
    manufacturer: "Sprouting Sprout AB",
    mainImage: {
      url: "https://images.unsplash.com/photo-1594382562124-13a849639af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Close up on a mandrake",
    },
    moreImages: [
      {
        url: "https://static.wikia.nocookie.net/harrypotter/images/9/95/Mandrakes_-_Jim_Kay_COS_Illustrated_Edition.jpg/revision/latest?cb=20210614143023",
        alt: "Description of mandrake",
        _id: {
          $oid: "63402502ef03a28718e7ee60",
        },
      },
    ],
    __v: 0,
  },
  {
    title: "Snake plant: Sansevieria Zeylanica",
    price: 399,
    description:
      "Sansevieria zeylanica, more commonly identified as bowstring hemp, is an evergreen perennial plant. It’s native to the South East Asian Region, especially found in India and Sri Lanka. A very close relative of the “mother in law’s tongue“, it’s vividly green with gorgeous leaf stripes.",
    category: ["plant", "greenery"],
    weight: "1350 gram",
    manufacturer: "Green&Pots AB",
    mainImage: {
      url: "https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      alt: "Sansevieria trifasciata 'Zeylanica' in a pink pot held by a woman's hand.",
    },
    moreImages: [
      {
        url: "https://images.unsplash.com/photo-1599719840274-8161d802fd7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        alt: "Close up on snake plant",
        _id: {
          $oid: "63402672ef03a28718e7ee69",
        },
      },
      {
        url: "https://images.unsplash.com/photo-1599719840274-8161d802fd7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        alt: "Small potted snake plant",
        _id: {
          $oid: "63402672ef03a28718e7ee6a",
        },
      },
    ],
    __v: 0,
  },
  {
    title: "Groot Man Planter Pot",
    price: 299,
    description:
      "A little flower pot that is good for being inside on your desk, or outside in the garden. Groot.",
    category: ["pot", "Marvel"],
    weight: "570 gram",
    manufacturer: "Sprouting Sprout AB",
    mainImage: {
      url: "https://cdn.shopify.com/s/files/1/0520/6104/4917/products/groot-man-planter-pot-homareus-2_720x.jpg?v=1661732079",
      alt: "Groot pot",
    },
    moreImages: [
      {
        url: "https://cdn.shopify.com/s/files/1/0520/6104/4917/products/groot-man-planter-pot-homareus-5_720x.jpg?v=1661732082",
        alt: "Front and back of pot",
        _id: {
          $oid: "63402842ef03a28718e7ee75",
        },
      },
    ],
    __v: 0,
  },
  {
    title: "Eucalyptus",
    price: 349,
    description:
      "This evergreen tree can grow to nearly 60 feet high in its natural Australian environment. But when planting eucalyptus in home gardens, it usually remains small at around 6 to 10 feet high. The leaves are a silvery to blue-green color, and they give off the plant’s distinct menthol-like fragrance when bruised",
    category: ["plant", "greenery"],
    weight: "400 gram",
    manufacturer: "Green&Pots AB",
    mainImage: {
      url: "https://images.unsplash.com/photo-1510520745063-ceaa7314a820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Eucalyptus in pink vase",
    },
    moreImages: [
      {
        url: "",
        alt: "",
        _id: {
          $oid: "634029a7ef03a28718e7ee81",
        },
      },
    ],
    __v: 0,
  },
  {
    title: "Mind reading cactus",
    price: 179,
    description:
      "A small prickly little tower of a plant with magical abilities to read your mind, be careful for it is a deceitful thing",
    category: ["plant", "greenery", "magic"],
    weight: "400 gram",
    manufacturer: "Sprouting Sprout AB",
    mainImage: {
      url: "https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      alt: "Cactus with tentacles",
    },
    moreImages: [
      {
        url: "",
        alt: "",
        _id: {
          $oid: "63402b36ef03a28718e7ee8e",
        },
      },
    ],
    __v: 0,
  },
  {
    title: "Oink Oink pot",
    price: 179,
    description:
      "This pot goes 'oink oink', this happy piglet longs for your greens",
    category: ["pot", "playful"],
    weight: "600 gram",
    manufacturer: "Green&Pots AB",
    mainImage: {
      url: "https://images.unsplash.com/photo-1609228264609-bd119a8c5e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      alt: " 2 pig pots",
    },
    moreImages: [
      {
        url: "",
        alt: "",
        _id: {
          $oid: "63402c4def03a28718e7eea7",
        },
      },
    ],
    __v: 0,
  },
  {
    title: "Vases with faces",
    price: 229,
    description:
      "Set of four minimalistic yet humorous pots, surprised and horrified of how holy they are...",
    category: ["pot", "playful"],
    weight: "1800 gram",
    manufacturer: "Green&Pots AB",
    mainImage: {
      url: "https://i.pinimg.com/originals/4a/ff/b7/4affb7e322c8778ec02339da662a48ca.jpg",
      alt: "4 vases with faces",
    },
    moreImages: [
      {
        url: "",
        alt: "",
        _id: {
          $oid: "63402d4aef03a28718e7eeb6",
        },
      },
    ],
    __v: 0,
  },
  {
    title: "Plantshops bouquet",
    price: 549,
    description:
      "A beautiful bouquet in standard size, made out of the most vivid flowers and greens depending on the season, made by our talented florists",
    category: ["flowers", "plants", "bouquet"],
    weight: "700 gram",
    manufacturer: "Plantshop and other stuff AB",
    mainImage: {
      url: "https://images.unsplash.com/photo-1602136303098-f5aa2b9c9df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80",
      alt: "bouquet in pink wrapping",
    },
    moreImages: [
      {
        url: "https://images.unsplash.com/photo-1575311806535-2e4a77631f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt: "Autumn inspired bouquet",
        _id: {
          $oid: "63403017ef03a28718e7eec6",
        },
      },
      {
        url: "https://images.unsplash.com/photo-1579198314865-955573957799?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        alt: "Hand holding bouquet",
        _id: {
          $oid: "63403017ef03a28718e7eec7",
        },
      },
    ],
    __v: 0,
  },
  {
    title: "Secret seeds",
    price: 666,
    description: "Plant, dry, and inhale....",
    category: ["seeds"],
    weight: "150 gram",
    manufacturer: "HerbHealing Co.Inc",
    mainImage: {
      url: "https://images.unsplash.com/photo-1594135018622-c7a09912229e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
      alt: "Green plant",
    },
    moreImages: [
      {
        url: "",
        alt: "",
        _id: {
          $oid: "634030b9ef03a28718e7eed9",
        },
      },
    ],
    __v: 0,
  },
  {
    title: "Dead Leafes",
    price: 199,
    description:
      "Just a lof of leafes that fell from a tree in my yard, literally just A LOT of leafes. BUY PLEASE",
    category: ["plants", "leafes"],
    weight: "300 gram",
    manufacturer: "Plantshop and other stuff AB",
    mainImage: {
      url: "https://images.unsplash.com/photo-1478733672327-ce27bc999503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Autumn leafes",
    },
    moreImages: [
      {
        url: "",
        alt: "",
        _id: {
          $oid: "6340337def03a28718e7eeec",
        },
      },
    ],
    __v: 0,
  },
  {
    title: "Orange textured vase",
    price: 899,
    description:
      "Orange textured vase, as it is handmade by the many talented Seth Rogen it is also one of a kind.",
    category: ["[pot, clay, Seth Rogen]"],
    weight: "750 gram",
    manufacturer: "Seth Rogen Inc.",
    mainImage: {
      url: "https://www.vancouverislandfreedaily.com/wp-content/uploads/2021/06/25552100_web1_2108618-BPD-RoganPot-WEB_1.jpeg",
      alt: "Orange vase",
    },
    moreImages: [
      {
        url: "",
        alt: "",
        _id: {
          $oid: "634034b0ef03a28718e7ef00",
        },
      },
    ],
    __v: 0,
  },
]);

console.log("init db completed");
