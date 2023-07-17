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
      descricao: '',
      id: 1,
      telefone: 99984523
    },
    {
      titulo: 'Jose',
      email: 'josepereirea@live.com',
      descricao: '',
      id: 2,
      telefone: 499978977
    },
    {
      titulo: 'Ferdinando',
      email: 'ferdinando_fr@gmail.com',
      descricao: '',
      id: 3,
      telefone: 597977785
    },
    {
      titulo: 'Tiao',
      email: 'tiao_carreiro@hotmail.com',
      descricao: '',
      id: 4,
      telefone: 46887744
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
