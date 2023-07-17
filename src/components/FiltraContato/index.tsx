import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alteraFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  contador: number
  legenda: string
  criterio: 'status' | 'todas'
}

const FiltraContato = ({ contador, legenda, criterio }: Props) => {
  const dispatch = useDispatch()
  const { filtro } = useSelector((state: RootReducer) => state)

  const verificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    return mesmoCriterio
  }

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio
      })
    )
  }
  const ativo = verificaAtivo()
  return (
    <S.CardMenu ativo={ativo} onClick={filtrar}>
      <S.ContadorMenu>{contador}</S.ContadorMenu>
      <S.LabelMenu>{legenda}</S.LabelMenu>
    </S.CardMenu>
  )
}

export default FiltraContato
