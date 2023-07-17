import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Input } from '../../styles'

const Header = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <>
      <S.HeaderCont>
        <Input
          value={termo}
          onChange={(e: { target: { value: string } }) =>
            dispatch(alteraTermo(e.target.value))
          }
        />
      </S.HeaderCont>
    </>
  )
}
export default Header
