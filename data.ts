// data/categories.js

export type TSubCategory = {
  id: number;
  name: string;
  categories: string[];
};


export type TCategory = {
    id: number;
    name: string;
    subCategories: TSubCategory[];
  };
  

export const categories: TCategory[] = [
  {
    id: 1,
    name: "Electronics",
    subCategories: [
      {
        id: 101,
        name: "Cameras",
        categories: ["Nikon", "Sony", "Canon", "DSLR"],
      },
      {
        id: 102,
        name: "Laptops",
        categories: ["Dell", "HP", "MacBook"],
      },
    ],
  },
  {
    id: 3,
    name: "Electronics 33",
    subCategories: [
      {
        id: 101,
        name: "Cameras 1",
        categories: ["Nikon 1", "Sony 1", "Canon 1", "DSLR 1 ", "Nikon 1", "Sony 1", "Canon 1", "DSLR 1 " ],
      },
      {
        id: 105,
        name: "Cameras 1",
        categories: ["Nikon 1", "Sony 1", "Canon 1", "DSLR 1 ", "Nikon 1", "Sony 1", "Canon 1", "DSLR 1 " ],
      },
      {
        id: 106,
        name: "Cameras 1",
        categories: ["Nikon 1", "Sony 1", "Canon 1", "DSLR 1 ", "Nikon 1", "Sony 1", "Canon 1", "DSLR 1 " ],
      },
      {
        id: 107,
        name: "Cameras 1",
        categories: ["Nikon 1", "Sony 1", "Canon 1", "DSLR 1 ", "Nikon 1", "Sony 1", "Canon 1", "DSLR 1 " ],
      },
      {
        id: 108,
        name: "Laptops",
        categories: ["Dell", "HP", "MacBook"],
      },
    ],
  },
  {
    id: 4,
    name: "Electronics 23",
    subCategories: [
      {
        id: 101,
        name: "Cameras",
        categories: ["Nikon", "Sony", "Canon", "DSLR"],
      },
      {
        id: 102,
        name: "Laptops",
        categories: ["Dell", "HP", "MacBook"],
      },
    ],
  },
  {
    id: 2,
    name: "Fashion",
    subCategories: [
      {
        id: 201,
        name: "Men's Wear",
        categories: ["Shirts", "Trousers", "Shoes"],
      },
      {
        id: 202,
        name: "Women's Wear",
        categories: ["Dresses", "Jewelry", "Handbags"],
      },
    ],
  },
];
