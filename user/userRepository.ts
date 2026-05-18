import { ObjectId } from "mongodb";
import { getDB } from "../config/db";
import { User } from "./userTypes";

export class UserRepository {

    private collection = () => getDB().collection<User>("users");

    async findall(): Promise<User[]> {
        const userData = await this.collection().find().toArray();
        return userData;
    }
    async findById(id: ObjectId): Promise<User | null> {
        const userData = await this.collection().findOne({_id: id});
        return userData;
    }
}