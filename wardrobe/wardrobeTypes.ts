import { ObjectId } from "mongodb";

export interface WardrobeProduct {
    productId: ObjectId;
    name: string;
    brand: string;
    image: string;   // just the primary image
}

export interface Wardrobe {
    _id?: ObjectId;
    userId: ObjectId;
    product: WardrobeProduct;
    createdAt: Date;
}