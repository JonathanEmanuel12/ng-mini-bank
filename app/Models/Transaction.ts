import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import UuidBase from './Base/UuidBase'

export default class Transaction extends UuidBase {

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
