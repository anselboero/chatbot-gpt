export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

export const products = [
    {
        id: 1,
        name: 'Iphone 10',
        price: 250,
        description: 'iPhone X 64 GB - Space Grau - Ohne Vertrag',
        imageUrl: '../../assets/products/product_1.avif'
    },
    {
        id: 2,
        name: 'sweatshirt',
        price: 30,
        description: 'Hoodies for Men. Best prices for India',
        imageUrl: '../../assets/products/product_2.jpg',
    },
    {
        id: 3,
        name: 'Air Jordan',
        price: 25,
        description: 'Scarpe Originali utilizzate da Michael Jordan in Space Jams',
        imageUrl: '../../assets/products/product_3.jpg'
    },
    {
        id: 4,
        name: 'bic pen',
        price: 15,
        description: 'no description bro',
        imageUrl: '../../assets/products/product_4.jpg'
    },
    {
        id: 5,
        name: 'gang red t-shirt',
        price: 20,
        description: 't-shirt for swagging around the city',
        imageUrl: '../../assets/products/product_5.webp'
    }
]