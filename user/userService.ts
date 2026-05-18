import { ObjectId } from "mongodb";
import { UserRepository } from "./userRepository";
import { User } from "./userTypes";

export class UserService {
    constructor(private userRepository: UserRepository) { }

    async getUsers(): Promise<User[]> {
        return this.userRepository.findall();
    }

    async getUserById(id: ObjectId): Promise<User | null> {
        return this.userRepository.findById(id);
    } 


}