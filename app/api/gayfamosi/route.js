import { personaggi } from './listaGayFamosi.json'

export async function GET (request) {
  return new Response(JSON.stringify(personaggi))
}
