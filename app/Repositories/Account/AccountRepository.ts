import Account from "App/Models/Account";

export default class AccountRepository implements AccountRepository {
    public async create(): Promise<Account> {
        return await Account.create({ balance: 100 })
    }

    public async showByUser(userId: string): Promise<Account> {
        return Account.query()
            .whereHas('user', (builder) => {
                builder.where('id', userId)
            })
            .firstOrFail()
    }

    public async delete(accountId: string): Promise<void> {
        await Account.query().where('id', accountId).delete()
    }
}