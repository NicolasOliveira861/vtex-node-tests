import { json } from 'co-body'

export async function createUser(ctx: Context, next: () => Promise<any>) {
  const { body } = await json(ctx.req)

  ctx.status = 201
  ctx.body = {
    msg: 'User created!',
    status: 201,
    data: body,
    sucess: true,
    error: null,
  }

  await next()
}
