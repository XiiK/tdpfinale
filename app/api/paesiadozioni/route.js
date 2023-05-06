import { paesi } from './listaPaesi.json'

export async function GET (request) {
  return new Response(JSON.stringify(paesi))
}
