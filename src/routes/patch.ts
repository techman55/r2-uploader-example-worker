import {Context} from "hono"

export default async function (c: Context) {
  const cursor = c.req.query('cursor')
  const list = await c.env.R2_BUCKET.list({
    cursor: cursor || undefined,
    prefix: c.req.header('x-api-key')?.split("#")[1] + "/"
  })

  return c.json(list)
}
