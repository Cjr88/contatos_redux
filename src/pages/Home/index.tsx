import BotaoAdicionar from '../../components/BotaoAdicionar'
import ListaContato from '../../containers/ListaContatos'
import Header from '../../containers/Menu'

const Home = () => (
  <>
    <Header />
    <ListaContato />
    <BotaoAdicionar />
  </>
)
export default Home
