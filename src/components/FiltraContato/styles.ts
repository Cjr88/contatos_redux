import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const CardMenu = styled.div<Props>`
  padding: 20px;
  border: 2px solid ${(props) => (props.ativo ? '#ccc' : '#eee')};
  background-color: ${(props) => (props.ativo ? '#f1f1' : '#fff')};
  color: red;
  border-radius: 15px;
  cursor: pointer;
`
export const ContadorMenu = styled.span`
  font-weight: bold;
  font-size: 26px;
`
export const LabelMenu = styled.span`
  font-size: 16px;
`
