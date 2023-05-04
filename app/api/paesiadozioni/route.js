const lista = [
  {
    paese: 'Italia',
    anno: '2019',
  },
  {
    paese: 'Germania',
    anno: '2012',
  },
  {
    paese: 'Francia',
    anno: '2013',
  },
]

export async function GET(request) {
  return new Response(JSON.stringify(lista))
}
