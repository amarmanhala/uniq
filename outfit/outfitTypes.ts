import { ObjectId } from "mongodb";

export interface Outfit {
    _id?: ObjectId;
    name: string;
    tags: string[];
    imageUrl?: string;       // preview/cover image
    isPublic?: boolean;      // share with others?
    userId: ObjectId;
    productIds: ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}