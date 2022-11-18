import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AccountRepository from 'App/Repositories/Account/AccountRepository'
import IAccountRepository from 'App/Repositories/Account/IAccountRepository'

export default class AccountsController {
    private accountRepository: IAccountRepository
    constructor() {
        this.accountRepository= new AccountRepository()
    }

    public async show({ params, response }: HttpContextContract) {
        const { userId } = params
        const account = await this.accountRepository.showByUser(userId)
        return response.created(account)
    }
}
