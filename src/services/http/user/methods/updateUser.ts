import { api } from '../../../api'
import * as types from '../types'

export async function updateUser(user: types.CreateUserData) {
  api.post('/user/register', {
    user
  })
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
}

