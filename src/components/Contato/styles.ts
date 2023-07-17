import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  padding: 60px;
  width: 548px;
  margin-top: 10px;
  border-radius: 25px;
  background: linear-gradient(145deg, #ac9191, #ccacac);
  box-shadow: 5px 5px 0px #4c4040, -5px -5px 0px #ffffff;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`
export const ActionBar = styled.div`
  border-top: 2px dotted rgba(0, 0, 0.1);
  padding-top: 16px;
`

export const Button = styled.button`
  background-color: #f1f23456;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const BotaoEditaCancela = styled(Button)`
  background-color: ${variaveis.vermelho};
`
export const Email = styled.p`
  font-size: 20px;
  color: #000123;
  background-color: ${variaveis.verde};
`
