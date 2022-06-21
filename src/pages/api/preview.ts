// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../libs/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query?.dir || !req.query?.contentId) {
    return res.status(404).end('not found')
  }

  const content = await client
    .get({
      endpoint: req.query.dir as string,
      contentId: req.query.contentId as string,
      queries: {
        draftKey: req.query.draftKey as string,
        fields: 'slug',
      },
    })
    .catch((err) => null)

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData({
    maxAge: 60 * 60,
    slug: content.slug,
    draftKey: req.query.draftKey,
  })
  res.writeHead(307, { Location: `/${req.query.dir}/${content.slug}` })
  res.end('Preview mode enabled')
}
