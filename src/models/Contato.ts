class Contato {
  titulo: string
  email: string
  id: number
  descricao: string
  telefone: number

  constructor(
    titulo: string,
    email: string,
    id: number,
    descricao: string,
    telefone: number
  ) {
    this.titulo = titulo
    this.email = email
    this.id = id
    this.descricao = descricao
    this.telefone = telefone
  }
}
export default Contato
