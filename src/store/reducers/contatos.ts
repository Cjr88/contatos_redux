import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      titulo: 'Carlos Jr',
      email: 'carlosjr@gmail.com',
      descricao: '888394051',
      id: 1
    },
    {
      titulo: 'Jose',
      email: 'josepereirea@live.com',
      descricao: '999938491',
      id: 2
    },
    {
      titulo: 'Ferndindando',
      email: 'ferdinando_fr@gmail.com',
      descricao: '122344567',
      id: 3
    },
    {
      titulo: 'Tiao',
      email: 'tiao_carreiro@hotmail.com',
      descricao: '49586000',
      id: 4
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )
      if (contatoExistente) {
        alert('Ja existe um contato com esse nome!')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})
export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
