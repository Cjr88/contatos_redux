import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { editar, remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { BotaoSalvar, Descripton } from '../../styles'

type Props = ContatoClass

const Contato = ({
  titulo,
  id,
  email,
  descricao: descricaoOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])
  function cancelaEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }
  return (
    <S.Card>
      <S.Title>{titulo}</S.Title>
      <Descripton
        disabled={!estaEditando}
        value={descricao}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setDescricao(e.target.value)
        }
      />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    email,
                    id,
                    descricao: ''
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoEditaCancela onClick={cancelaEdicao}>
              Cancelar
            </S.BotaoEditaCancela>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
            <S.BotaoEditaCancela onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoEditaCancela>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Contato
