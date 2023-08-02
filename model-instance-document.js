import { Model } from '@ceramicnetwork/stream-model'
import { ModelInstanceDocument } from '@ceramicnetwork/stream-model-instance'

import { createClient, schema } from './common.js'

async function createModel(client) {
  const model = await Model.create(client, {
    // We need to provide extra model metadata
    version: '1.0',
    name: 'Example model',
    description: 'Example model for my app',
    accountRelation: { type: 'list' },
    // Schema can be the same as used for TileDocument
    schema,
  })
  return model.id
}

async function run() {
  const client = await createClient()

  // Create the model (should be done only once)
  const model = await createModel(client)

  // Create documents using the model
  async function createDocument(content) {
    return await ModelInstanceDocument.create(client, content, { model })
  }
  const doc1 = await createDocument({ foo: 1, bar: 'hello' })
  const doc2 = await createDocument({ foo: 2 })

  return [doc1.id, doc2.id]
}

run().then(console.log, console.error)
