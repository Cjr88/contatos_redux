import styled from 'styled-components'
import variaveis from './variaveis'
import { Button } from '../components/Contato/styles'

export const MainContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // font-family: 'Montserrat', sans-serif;
    // font-family: 'Roboto', sans-serif;
    // font-family: 'Roboto Condensed', sans-serif;
    // font-family: 'Roboto Mono', monospace;
    // font-family: 'Ysabeau Infant', sans-serif;
    // font-family: 'Ysabeau Office', sans-serif;
    list-style: none;
  }
`

export const Titulo = styled.h2`
  font-size: 33px;
  font-weight: bold;
  letter-spacing: 10px;
  text-align: center;
  color: #000;
`
export const Input = styled.input`
  padding: 14px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border: none;
  height: 20px;
  font-size: 16px;
`
export const Descripton = styled.textarea`
  padding: 16px;
  background-color: ${variaveis.azulEscuro};
  color: #fff;
  resize: none;
  font-size: 16px;
`
export const BotaoSalvar = styled(Button)`
  background-color: ${variaveis.verde};
`
