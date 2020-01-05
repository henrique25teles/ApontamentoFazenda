import {action} from 'typesafe-actions'

import Usuario from 'types/models/Usuario'
import { UsuariosActionTypes, UsuarioAction } from 'types/store/UsuariosState'

const updateAllUsuarios = (payload: Usuario[]) => action(UsuariosActionTypes.UPDATE_ALL, payload)

const loadUsuarios = () => action(UsuariosActionTypes.LOAD_USUARIOS)

const selecionaUsuario = (payload: Usuario) => action(UsuariosActionTypes.SELECIONA_USUARIO, payload)

const logOffUsuario = () => action(UsuariosActionTypes.LOGOFF_USUARIO)

export { updateAllUsuarios, selecionaUsuario, loadUsuarios, logOffUsuario }
