import { paesi } from '../listaPaesi.json'

export async function GET (request, params) {
  console.log('paesi', paesi)
  const flag = params.params.flag.toUpperCase()
  // filter by paesi
  const paese = paesi.filter(paese => paese.flag === flag)
  if (paese.length === 0) {
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404
    })
  }
  return new Response(JSON.stringify(paese))
}
