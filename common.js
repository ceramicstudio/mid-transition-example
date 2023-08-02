import { CeramicClient } from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import { getResolver } from 'key-did-resolver'

export async function createDID(seed) {
  const did = new DID({
    provider: new Ed25519Provider(seed),
    resolver: getResolver(),
  })
  await did.authenticate()
  return did
}

export async function createClient(url = 'http://localhost:7007', seed = new Uint8Array(32)) {
  const client = new CeramicClient(url)
  client.did = await createDID(seed)
  return client
}

export const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
  },
  required: ['foo'],
  additionalProperties: false,
}
