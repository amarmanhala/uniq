import { ObjectId } from "mongodb";

export interface User {
    _id?: ObjectId;
    name: string;
    email: string;
    phone: string;
    password: string; //hashed
    avatar: string;
    gender: "men" | "women" | "unisex";
    isActive: boolean;
    createdAt: Date;
    updatetAt: Date;
}