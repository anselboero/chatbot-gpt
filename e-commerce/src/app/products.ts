export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
}

export const products = [
    {
        id: 1,
        name: 'Iphone 10',
        price: 250,
        description: 'iPhone X 64 GB - Space Grau - Ohne Vertrag',
        imageUrl: '../../assets/products/product_1.avif',
        type: 'Phones'
    },
    {
        id: 2,
        name: 'Sweatshirt',
        price: 30,
        description: 'Hoodies for Men. Best prices for India',
        imageUrl: '../../assets/products/product_2.jpg',
        type: 'Clothes'
    },
    {
        id: 3,
        name: 'Air Jordan',
        price: 25,
        description: 'Scarpe Originali utilizzate da Michael Jordan in Space Jams',
        imageUrl: '../../assets/products/product_3.jpg',
        type: 'Clothes'
    },
    {
        id: 4,
        name: 'Bic pen',
        price: 15,
        description: 'no description bro',
        imageUrl: '../../assets/products/product_4.jpg',
        type: 'Advanced Technology'
    },
    {
        id: 5,
        name: 'Gang red t-shirt',
        price: 20,
        description: 't-shirt for swagging around the city',
        imageUrl: '../../assets/products/product_5.webp',
        type: 'Clothes'
    }
]