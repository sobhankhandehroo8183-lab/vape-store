export const products = [
  {
    id: 1,
    title: "Vaporesso XROS 3",
    price: 120,
    image: "https://via.placeholder.com/300x300",
    description: "Premium pod system with smooth airflow",
    category: "Pod System"
  },
  {
    id: 2,
    title: "SMOK Nord 5",
    price: 150,
    image: "https://via.placeholder.com/300x300",
    description: "Powerful device with adjustable wattage",
    category: "Pod Mod"
  },
  {
    id: 3,
    title: "Caliburn G2",
    price: 110,
    image: "https://via.placeholder.com/300x300",
    description: "Compact design with great flavor",
    category: "Starter Kit"
  },
  {
    id: 4,
    title: "Voopoo Drag Nano",
    price: 95,
    image: "https://via.placeholder.com/300x300",
    description: "Stylish nano vape device",
    category: "Portable"
  }
];

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 600);
  });
};

export const getProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id));
    }, 400);
  });
};