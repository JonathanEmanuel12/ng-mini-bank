import { UserDto } from "App/Dtos/UserDto";
import User from "App/Models/User";

export default interface IUserRepository {
    create: (userDto: UserDto) => Promise<User>
}