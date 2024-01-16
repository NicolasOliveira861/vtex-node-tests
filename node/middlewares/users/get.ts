export async function getUser(ctx: Context, next: () => Promise<any>) {
  const promise = new Promise((resolve) =>
    setTimeout(() => {
      ctx.body = [
        {
          name: 'Nicolas',
        },
        {
          name: 'George',
        },
        {
          name: 'Francis',
        },
        {
          name: 'Nathalia',
        },
      ]

      ctx.status = 200

      resolve(() => {})
    }, 3000)
  )

  await promise

  await next()
}
