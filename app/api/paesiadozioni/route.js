const lista = [
  {
    nome: 'Italia',
    anno: '2019',
    flag: 'IT'
  },
  {
    nome: 'Germania',
    anno: '2012',
    flag: 'DE'
  },
  {
    nome: 'Francia',
    anno: '2013',
    flag: 'FR'
  }
]

export async function GET (request) {
  return new Response(JSON.stringify(lista))
}
