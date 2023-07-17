import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, SetStateAction, useState } from 'react'
import { Descripton, Input } from '../../styles'
import { Titulo } from '../../styles'
import { Container, Form } from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import { BotaoVoltar } from '../../components/BotaoAdicionar/styles'
import { Email, Title } from '../../components/Contato/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const adicionaContato = new Contato(titulo, 'email', 1, descricao)

    dispatch(cadastrar(adicionaContato))
    navigate('/')
  }
  return (
    <>
      <Container>
        <Title>Carlos teste</Title>
        <Form onSubmit={cadastrarContato}>
          <Input
            value={titulo}
            onChange={(evento: { target: { value: SetStateAction<string> } }) =>
              setTitulo(evento.target.value)
            }
            type="text"
            placeholder="Título"
          />
          <Descripton
            value={email}
            onChange={(evento: { target: { value: SetStateAction<string> } }) =>
              setEmail(evento.target.value)
            }
            placeholder="Descrição do contato"
          />
          <button type="submit">Cadastrar</button>
          <Email>Teste 1</Email>
        </Form>
      </Container>
      <BotaoVoltar to="/">-</BotaoVoltar>
    </>
  )
}

export default Formulario
