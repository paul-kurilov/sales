import { createSlice } from '@reduxjs/toolkit'

const initState = {
  type: "sales",
  category: ["Lead", "Lead"],
  modals: [],
  modal: [null, null],
}

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState: initState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload
    },
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setModals: (state, action) => {
      state.modals = action.payload
    },
    setModal: (state, action) => {
      state.modal = action.payload
    },
  },
})

export const { setType, setCategory, setModals, setModal } = workspaceSlice.actions

export default workspaceSlice.reducer