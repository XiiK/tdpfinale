import { personaggi } from './listaGayFamosi.json'

export async function GET (request) {
  return new Response(JSON.stringify(personaggi))
}

export async function POST (request) {
  const body = await request.json()
  console.log('body', body)
  body.id = personaggi.length + 1
  personaggi.push(body)
  console.log('personaggi', personaggi)
  return new Response(JSON.stringify(personaggi))
}
