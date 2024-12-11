import {Context} from "hono"

export default async function (c: Context) {
  const key = c.req.param('key')

  await c.env.R2_BUCKET.delete(c.req.header('x-api-key')?.split("#")[1] + "/" + key)

  return new Response(null, {
    status: 204
  })
}
