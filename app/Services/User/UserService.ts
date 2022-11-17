import { UserDto } from "App/Dtos/UserDto";
import User from "App/Models/User";
import IAccountRepository from "App/Repositories/Account/IAccountRepository";
import IUserRepository from "App/Repositories/User/IUserRepository";
import { ErrorMessages } from "../Constants";

export default class UserService {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly accountRepository: IAccountRepository
    ) { }

    public async create(userDto: Omit<UserDto, 'accountId'>): Promise<User> {
        const account = await this.accountRepository.create()
        try {
            return await this.userRepository.create({ accountId: account.id,  ...userDto})
        } catch (error) {
            console.log(error.message)
            await this.accountRepository.delete(account.id)
            throw new Error(ErrorMessages.USER_NOT_CREATED)
        }
    }
}