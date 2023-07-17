import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
  criterio?: 'prioridade' | 'status' | 'todas'
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alteraFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
    }
  }
})
export const { alteraTermo, alteraFiltro } = filtroSlice.actions
export default filtroSlice.reducer
