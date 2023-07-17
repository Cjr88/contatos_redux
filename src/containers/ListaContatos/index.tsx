import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { Paragrafo, Ul } from './styles'

const ListaContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    if (termo) {
      return itens.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    } else {
      return itens
    }
  }

  return (
    <main>
      <Paragrafo> Contato: {termo} </Paragrafo>
      <Ul>
        {filtraContatos().map((c) => (
          <li key={c.titulo}>
            <Contato
              titulo={c.titulo}
              email={c.email}
              descricao={c.descricao}
              id={c.id}
            />
          </li>
        ))}
      </Ul>
    </main>
  )
}
export default ListaContato
