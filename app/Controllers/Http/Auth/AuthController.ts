import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AccountRepository from 'App/Repositories/Account/AccountRepository'
import UserRepository from 'App/Repositories/User/UserRepository'
import UserService from 'App/Services/User/UserService'
import CreateUserValidator from "App/Validators/CreateUserValidator"
import LoginUserValidator from 'App/Validators/LoginUserValidator'

export default class AuthController {
    private userService: UserService
    constructor() {
        const userRepository = new UserRepository()
        const accountRepository = new AccountRepository()
        this.userService = new UserService(userRepository, accountRepository)
    }

    public async signup({ request, auth, response }: HttpContextContract) {
        const userDto = await request.validate(CreateUserValidator)
        const user = await this.userService.create(userDto)
        const token = await auth.attempt(userDto.username, userDto.password, {
            expiresIn: '2 mins'
        })
        return response.created({ user, token })
    }

    public async signin({ request, auth, response }: HttpContextContract) {
        const { username, password } = await request.validate(LoginUserValidator)
        const token = await auth.attempt(username, password, {
            expiresIn: '2 mins'
        })
        return response.ok({ token })
    }
}
