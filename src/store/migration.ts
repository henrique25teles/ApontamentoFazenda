const migrations = {
    0: (state) => {
      // migration clear out device state
      return {
        ...state,
      }
    },
    1: (state) => {
      // migration to keep only device state
      return {
        ...state,
        usuarios: {
            all: [],
            selecionado: null
        }
      }
    },
    2: (state) => {
        return {
            ...state,
            usuarios: {
                selecionado: {
                    id: null,
                    nome: '',
                    senha: ''
                }
            }
        }
    },
    3: (state) => {
        return {
            ...state,
            usuarios: {
                all: [],
                selecionado: {
                    id: null,
                    nome: '',
                    senha: ''
                }
            }
        }
    }
  }
  
export default migrations
