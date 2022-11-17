import { UserDto } from "App/Dtos/UserDto";
import User from "App/Models/User";
import IUserRepository from "./IUserRepository";

export default class UserRepository implements IUserRepository {
    public async create(userDto: UserDto): Promise<User> {
        return await User.create(userDto)
    }
}