import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import UuidBase from './Base/UuidBase'
import Account from './Account'

export default class User extends UuidBase {
  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public accountId: string

  @belongsTo(() => Account)
  public account: BelongsTo<typeof Account>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
