/* eslint-disable jest/consistent-test-it */
const { HttpService } = require('./http')

const http = new HttpService()
const timeout = 10000

describe('User requests', () => {
  test(
    'Should get list of users',
    async () => {
      const { data, status } = await http.get('/users')

      // Espera que o status da requisição seja 200
      expect(status).toBe(200)

      //- -------------------------------------------------------------------//

      // Espera que o Array 'users' tenha um objeto com o nome George
      const expected = [{ name: 'George' }]

      expect(data).toEqual(expect.arrayContaining(expected))

      // Ex. de Erro | Espera ter mais um nome que não está na list
      // const expected = [{ name: 'George' }, { name: 'Frank' }]
      // expect(data).toEqual(expect.arrayContaining(expected))

      //- -------------------------------------------------------------------//

      // Espera que o Array retornado tenha um determinado número de itens
      expect(data).toHaveLength(4)
    },
    timeout
  )

  test(
    'Should create a new user',
    async () => {
      const user = {
        name: 'Harry',
      }

      const { data: userResponse, status } = await http.post('/users', user)

      // Espera que o status da requisição seja 201
      expect(status).toBe(201)
      // OU
      expect(userResponse).toHaveProperty('status', 201)

      //- -------------------------------------------------------------------//

      // Espera que o status seja maior ou igual a 200 e menor que 204
      expect(status).toBeGreaterThanOrEqual(200)
      expect(status).toBeLessThan(204)

      //- -------------------------------------------------------------------//

      // Espera que tenham todas as propriedades abaixo, 'status', 'data' e 'msg'
      expect(userResponse).toHaveProperty('msg', 'User created!')
      // OU
      expect(userResponse.msg).toBe('User created!')

      expect(userResponse).toHaveProperty('status')
      expect(userResponse).toHaveProperty('data')

      //- -------------------------------------------------------------------//

      // 'Truthy' são todos os valores que não sejam 'false', '0', '', 'null', 'undefined' e 'NaN' (valoes 'Falsy')
      expect(userResponse.data).toBeTruthy()
      expect(userResponse.sucess).toBeTruthy()

      //- -------------------------------------------------------------------//

      // Espera que a propriedade 'error' seja null
      expect(userResponse.error).toBeNull()

      //- -------------------------------------------------------------------//

      // Espera que a propriedade 'error' tenha um valor 'Falsy'
      expect(userResponse.error).toBeFalsy()

      // Existem outros métodos mais específicos: toBeUndefined, toBeNaN, toBeNull
    },
    timeout
  )
})
