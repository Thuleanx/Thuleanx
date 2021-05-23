import Head from 'next/head'
import { HOME_OG_IMAGE_URL, OWNER } from '../../lib/constants'

export default function Meta() {
  return (
    <Head>
      <meta
        name="description"
        content={`Personal website of ${OWNER}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
