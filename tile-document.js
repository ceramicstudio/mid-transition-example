import { TileDocument } from '@ceramicnetwork/stream-tile'

import { createClient, schema } from './common.js'

async function createSchema(client) {
  const stream = await TileDocument.create(client, schema)
  return stream.commitId.toString()
}

async function run() {
  const client = await createClient()

  // Create the schema (should be done only once)
  const schema = await createSchema(client)

  // Create documents using the schema
  async function createDocument(content) {
    return await TileDocument.create(client, content, { schema })
  }
  const doc1 = await createDocument({ foo: 1, bar: 'hello' })
  const doc2 = await createDocument({ foo: 2 })

  return [doc1.id, doc2.id]
}

run().then(console.log, console.error)
