export type UserToken = {
    token: string
}
export type loginInfo = {
    username: string,
    password: string
}
export type UserInfo = {
    id: number;
    name: string;
    email: string;
    password: string;
    username: string;
    carts: {
        id: number;
        title: string;
        discription: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[]
    }[]
}
export type OneUser = {
    id: number;
    name: string;
    email: string;
    password: string;
    username: string;
    carts: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[]
    }[]
}



export type ProductsArray = {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[]
}[]

export type Product = {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[]
}
