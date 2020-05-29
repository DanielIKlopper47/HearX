export interface Item {
    id: number;
    images: string;
    name: string;
    price: number
}
export interface cartItem {
    product_id: number;
    quantity: string;
    price: number
}

export const ITEMS =
    [{
        "id": 1,
        "images": "https://picsum.photos/200",
        "name": "Coffee beans - 1kg Dark Roast",
        "price": 100
    },
    {
        "id": 2,
        "images": "https://picsum.photos/200",
        "name": "Yorkshire tea - 100 tea bags",
        "price": 120
    },
    {
        "id": 3,
        "images": "https://picsum.photos/200",
        "name": "Altered Carbon Season 2",
        "price": 400
    },
    {
        "id": 4,
        "images": "https://picsum.photos/200",
        "name": "Sony WF-1000XM3 True Wireless Noise Canceling",
        "price": 1400
    },
    {
        "id": 5,
        "images": "https://picsum.photos/200",
        "name": "Macbook Pro 2019 Model 16gb RAM",
        "price": 25000
    },
    {
        "id": 6,
        "images": "https://picsum.photos/200",
        "name": "Asus GL752 gaming laptop",
        "price": 22000
    },
    {
        "id": 7,
        "images": "https://picsum.photos/200",
        "name": "Guinness Draught Cans 440ml 2x Six Packs",
        "price": 340
    },
    {
        "id": 8,
        "images": "https://picsum.photos/200",
        "name": "6 Man Tent - Dark blue",
        "price": 1950
    }];