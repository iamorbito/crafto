export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "The Archival Ledger",
    description: "Recycled Cotton & Linen",
    price: 349,
    originalPrice: 499,
    category: "Books",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0q5eEBauQlZI3Sl3dmhSUCGDhsZiTrUFiJrwKAGz4HbQHwZCby88Bsy5sBOHZCfKBOfIsWEa-lejgGqd5kRiWTHAppHk-OHpxNdp1fOj5nFgdGVixLbKnls0gcmewUKA9wtdRa_WfSSdYdqgE7ijyeZSQ7HU1q0rKpmw77lLAQCA41HvH7BHsxvibw7CU7WS1D_OtcG-3nBcezgduCMF6H8WgNxe8UyUTKPKrC7DKE1nA5GnuD_4Tq29YwAXz1VCnCh8GAONtTwQ"
  },
  {
    id: "2",
    name: "Correspondence Set",
    description: "Set of 24 Cards",
    price: 299,
    originalPrice: 499,
    category: "Stationery",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3QH6y32NweHzPcD2vIJNPf6UT4_M6rbxjFVd7fKDPzvceZR3rXsBJaS_QyMmpSZfqbW70a-LVHcYG6ow6lTKodjPmnp4mLJrXzo7fRhjzHPGt7ZEuYJ1wSW49ha_OpMnBTMufq2RXY05JrHEmjEYb7m1i8JZBuo-zkQ9iNR10NidJ_splxSWdCbmEbTSqtfL26ik1XO2AGgyoJ7Ei4Ik0cqvfABdNxGxPaTQlOwdEE7_-lRgNHRcLedMrWEChWlgl-djXEGoNVoQ"
  },
  {
    id: "3",
    name: "Rustic Clay Bowl",
    description: "Hand-molded texture",
    price: 299,
    originalPrice: 499,
    category: "Bowls",
    imageUrl: "/product_photos/Bowl1.jpeg"
  },
  {
    id: "4",
    name: "Earthy Serving Bowl",
    description: "Deep clay tones",
    price: 399,
    originalPrice: 549,
    category: "Bowls",
    imageUrl: "/product_photos/Bowl2.jpeg"
  },
  {
    id: "5",
    name: "Minimalist Stone Bowl",
    description: "Speckled finish",
    price: 499,
    originalPrice: 699,
    category: "Bowls",
    imageUrl: "/product_photos/Bowl3.jpeg"
  },
  {
    id: "6",
    name: "Artisan Wood-fired Bowl",
    description: "Unique glaze variations",
    price: 549,
    originalPrice: 799,
    category: "Bowls",
    imageUrl: "/product_photos/Bowl4.jpeg"
  },
  {
    id: "7",
    name: "Premium Ceramic Bowl",
    description: "Sleek modern lines",
    price: 599,
    originalPrice: 899,
    category: "Bowls",
    imageUrl: "/product_photos/Bowl5.jpeg"
  },
  {
    id: "8",
    name: "Handblown Water Glass",
    description: "Slight organic imperfections",
    price: 299,
    originalPrice: 449,
    category: "Glasses",
    imageUrl: "/product_photos/Glass1.jpeg"
  },
  {
    id: "9",
    name: "Terracotta Piggy Bank",
    description: "Classic earthy finish",
    price: 499,
    originalPrice: 799,
    category: "Piggy Banks",
    imageUrl: "/product_photos/Piggy1.jpeg"
  },
  {
    id: "10",
    name: "Glazed Coin Bank",
    description: "Modern heirloom",
    price: 699,
    originalPrice: 999,
    category: "Piggy Banks",
    imageUrl: "/product_photos/Piggy2.jpeg"
  }
];
