import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, SetStateAction, useState } from 'react'
import { Descripton, Input, Titulo } from '../../styles'
import { Container, Form } from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import { BotaoVoltar } from '../../components/BotaoAdicionar/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const adicionaContato = new Contato(titulo, 'email', 1, descricao, 9999524)

    dispatch(cadastrar(adicionaContato))
    navigate('/')
  }
  return (
    <>
      <Titulo>Novo contato</Titulo>
      <Container>
        <Form onSubmit={cadastrarContato}>
          <Input
            value={titulo}
            onChange={(evento: { target: { value: SetStateAction<string> } }) =>
              setTitulo(evento.target.value)
            }
            type="text"
            placeholder="Nome"
          />
          <Input
            value={email}
            onChange={(evento: { target: { value: SetStateAction<string> } }) =>
              setEmail(evento.target.value)
            }
            type="text"
            placeholder="E-mail"
          />
          <Input
            value={telefone}
            onChange={(evento: { target: { value: SetStateAction<string> } }) =>
              setTelefone(evento.target.value)
            }
            type="text"
            placeholder="Telefone"
          />
          <Descripton
            value={descricao}
            onChange={(evento: { target: { value: SetStateAction<string> } }) =>
              setDescricao(evento.target.value)
            }
            placeholder="Descrição do contato"
          />
          <button type="submit">Cadastrar</button>
        </Form>
      </Container>
      <BotaoVoltar to="/">-</BotaoVoltar>
    </>
  )
}

export default Formulario
