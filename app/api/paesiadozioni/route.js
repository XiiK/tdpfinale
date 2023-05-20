import { paesi } from './listaPaesi.json'

export async function GET (request) {
  return new Response(JSON.stringify(paesi))
}

// add post request to add new paese
export async function POST (request) {
  const body = await request.json()
  console.log('body', body)
  paesi.push(body)
  console.log('paesi', paesi)
  return new Response(JSON.stringify(paesi))
}
