import { personaggi } from '../listaGayFamosi.json'

export async function GET (request, params) {
  const id = parseInt(params.params.id)
  // filter id
  const personaggio = personaggi.filter(personaggio => personaggio.id === id)
  if (personaggio.length === 0) {
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404
    })
  }
  return new Response(JSON.stringify(personaggio))
}
