import {Context} from "hono"

export default async function (c: Context) {
  const key = c.req.param('key')

  const multipartUpload = await c.env.R2_BUCKET.createMultipartUpload(c.req.header('x-api-key')?.split("#")[1] + "/" + key)

  return c.json({
    key: multipartUpload.key,
    uploadId: multipartUpload.uploadId
  })
}
