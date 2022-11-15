import { DateTime } from 'luxon'
import { column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import UuidBase from './Base/UuidBase'
import User from './User'
import Transaction from './Transaction'

export default class Account extends UuidBase {
  @column()
  public balance: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasMany(() => Transaction, {
    foreignKey: 'debitedAccountId'
  })
  public sendTransaction: HasMany<typeof Transaction>

  @hasMany(() => Transaction, {
    foreignKey: 'creditedAccountId'
  })
  public receivedTransaction: HasMany<typeof Transaction>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
