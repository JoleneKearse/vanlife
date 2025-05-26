const vans = [
  {
    id: 1,
    name: "Modest Explorer",
    price: 60,
    category: "Simple",
    description:
      "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
    visibility: "Public",
    image: "/modest-explorer.webp",
    alt: "A tan and white VW van with a pop-up tent on the roof. Parked on the side of the road overlooking a sea with mountains in the distance.",
    hostId: 123,
  },
  {
    id: 2,
    name: "Beach Bum",
    price: 80,
    category: "Rugged",
    description:
      "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
    visibility: "Public",
    image: "/beach-bum.webp",
    alt: "A blue and white VW van packed in a field with a camping chair and umbrella set outside.",
    hostId: 123,
  },
  {
    id: 3,
    name: "Reliable Red",
    price: 100,
    category: "Luxury",
    description:
      "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
    visibility: "Public",
    image: "/reliable-red.webp",
    alt: "A red and white VW van overlooking a canyon with colourful hot air balloons in the sky.",
    hostId: 789,
  },
  {
    id: 4,
    name: "Dreamfinder",
    price: 65,
    category: "Simple",
    description:
      "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
    visibility: "Public",
    image: "/dream-finder.webp",
    alt: "A tan and white boxy VW van with a pop-up tent raised with a surf board attached. Parked overlooking the sea.",
    hostId: 789,
  },
  {
    id: 5,
    name: "The Cruiser",
    price: 120,
    category: "Luxury",
    description:
      "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
    visibility: "Public",
    image: "/the-cruiser.webp",
    alt: "A white van with a full tent featuring windows in all directions on the roof. Parked in the mountains.",
    hostId: 789,
  },
  {
    id: 6,
    name: "Green Wonder",
    price: 70,
    category: "Rugged",
    description:
      "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
    visibility: "Public",
    image: "/green-wonder.webp",
    alt: "A green and white VW van with abstract white trees on the back sides. Parked overlooking a lake in the forest with mountains in the background.",
    hostId: 123,
  },
];

const hostVans = [
  {
    id: 1,
    name: "Modest Explorer",
    price: 60,
    category: "Simple",
    description:
      "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
    visibility: "Public",
    image: "/modest-explorer.webp",
    alt: "A tan and white VW van with a pop-up tent on the roof. Parked on the side of the road overlooking a sea with mountains in the distance.",
  },
  {
    id: 2,
    name: "Beach Bum",
    price: 80,
    category: "Rugged",
    description:
      "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
    visibility: "Public",
    image: "/beach-bum.webp",
    alt: "A blue and white VW van packed in a field with a camping chair and umbrella set outside.",
  },
  {
    id: 6,
    name: "Green Wonder",
    price: 70,
    category: "Rugged",
    description:
      "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
    visibility: "Public",
    image: "/green-wonder.webp",
    alt: "A green and white VW van with abstract white trees on the back sides. Parked overlooking a lake in the forest with mountains in the background.",
  },
];

const users = [
  {
    id: 123,
    name: "Emily Kearse",
    email: "trouble@bird.ca",
    password: "birdietube",
  },
];

const reviews = [
  {
    rating: 5,
    name: "Elliot",
    date: "January 3, 2023",
    text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    id: "1",
  },
  {
    rating: 5,
    name: "Sandy",
    date: "December 12, 2022",
    text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    id: "2",
  },
];

const transactionsData = [
  { amount: 720, date: "Jan 3, '23", id: "1" },
  { amount: 560, date: "Dec 12, '22", id: "2" },
  { amount: 980, date: "Dec 3, '22", id: "3" },
];

export { vans, hostVans, users, reviews, transactionsData };
