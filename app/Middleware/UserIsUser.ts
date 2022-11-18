import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ForbiddenActionException from 'App/Exceptions/ForbiddenActionException'
import { ErrorCode, ErrorMessages, ErrorStatus } from 'App/Services/Constants'

export default class UserIsUser {
  public async handle({ params, auth }: HttpContextContract, next: () => Promise<void>) {
    const { userId } = params
    const loggedUser = await auth.authenticate()

    if(loggedUser.id !== userId) {
      throw new ForbiddenActionException(ErrorMessages.ONLY_ACCOUNT_OWNER, ErrorStatus.FORBIDDEN, ErrorCode.FORBIDDEN)
    }
    await next()
  }
}
