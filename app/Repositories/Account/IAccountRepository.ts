import Account from "App/Models/Account";

export default interface IAccountRepository {
    create: () => Promise<Account>
    showByUser: (userId: string) => Promise<Account>
    delete: (accountId: string) => Promise<void>
}