import { DateTime } from 'luxon'
import { column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import UuidBase from './Base/UuidBase'
import User from './User'

export default class Account extends UuidBase {
  @column()
  public balance: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
