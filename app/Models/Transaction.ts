import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import UuidBase from './Base/UuidBase'
import Account from './Account'

export default class Transaction extends UuidBase {
  @column()
  public debitedAccountId: string

  @column()
  public creditedAccountId: string

  @column()
  public value: number

  @belongsTo(() => Account, {
    foreignKey: 'debitedAccountId'
  })
  public debitedAccount: BelongsTo<typeof Account>

  @belongsTo(() => Account, {
    foreignKey: 'creditedAccountId'
  })
  public creditedAccount: BelongsTo<typeof Account>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
