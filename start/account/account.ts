import Route from '@ioc:Adonis/Core/Route'
import Env from '@ioc:Adonis/Core/Env'

Route.group(() => {
    Route.get('/user/:userId/account', 'AccountsController.signup')
})
    .middleware('userIsUser')
    .prefix(Env.get('PREFIX'))
    .namespace('App/Controllers/Http/Account')