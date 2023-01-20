import { api } from '../../../api'
import * as types from '../types'

export async function createUser(user: types.CreateUserData) {
  return api.post('/user/register', {
    ...user
  })
  .then((result) => {
    return result.status
  })
  .catch((error) => {
    console.log(error)
    return undefined;
  })
}

