const lista = [
  {
    nome: 'Elton John'
  },
  {
    nome: 'George Michael'
  },
  {
    nome: 'Freddie Mercury'
  }
]

export async function GET(request) {
  return new Response(JSON.stringify(lista))
}
