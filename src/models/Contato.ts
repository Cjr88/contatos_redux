class Contato {
  titulo: string
  email: string
  id: number
  descricao: string

  constructor(titulo: string, email: string, id: number, descricao: string) {
    this.titulo = titulo
    this.email = email
    this.id = id
    this.descricao = descricao
  }
}
export default Contato
