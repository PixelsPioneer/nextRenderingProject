export interface Computer {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  inStock: boolean;
}

export const mockComputers: Computer[] = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    description: 'Apple M2 Pro chip, 16GB RAM, 1TB SSD',
    price: 2999,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80',
    inStock: true,
  },
  {
    id: 2,
    name: 'Dell XPS 15',
    description: 'Intel i7 13th Gen, 32GB RAM, 1TB SSD, RTX 4050',
    price: 2499,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80',
    inStock: true,
  },
  {
    id: 3,
    name: 'Lenovo Legion 5 Pro',
    description: 'AMD Ryzen 9, 32GB RAM, 2TB SSD, RTX 4070',
    price: 2199,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80',
    inStock: false,
  },
  {
    id: 4,
    name: 'HP Spectre x360',
    description: 'Intel i7 12th Gen, 16GB RAM, 512GB SSD, Touchscreen',
    price: 1799,
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80',
    inStock: true,
  },
  {
    id: 5,
    name: 'Asus ROG Zephyrus G14',
    description: 'AMD Ryzen 7, 16GB RAM, 1TB SSD, RTX 3060',
    price: 1699,
    image:
      'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=500&q=80',
    inStock: false,
  },
  {
    id: 6,
    name: 'Acer Predator Helios 300',
    description: 'Intel i7, 16GB RAM, 1TB SSD, RTX 3070',
    price: 1599,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80',
    inStock: true,
  },
  {
    id: 7,
    name: 'Microsoft Surface Laptop 5',
    description: 'Intel i5, 16GB RAM, 512GB SSD, Touchscreen',
    price: 1399,
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80',
    inStock: true,
  },
  {
    id: 8,
    name: 'Razer Blade 15',
    description: 'Intel i9, 32GB RAM, 1TB SSD, RTX 4080',
    price: 3299,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80',
    inStock: false,
  },
  {
    id: 9,
    name: 'Gigabyte AORUS 17',
    description: 'Intel i9, 64GB RAM, 2TB SSD, RTX 4090',
    price: 3799,
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80',
    inStock: true,
  },
  {
    id: 10,
    name: 'MSI Stealth 14 Studio',
    description: 'Intel i7, 16GB RAM, 1TB SSD, RTX 4060',
    price: 1899,
    image:
      'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=500&q=80',
    inStock: true,
  },
];
