import Usuario from 'types/models/Usuario';

export enum UsuariosActionTypes {
    UPDATE_ALL = '@usuarios/UPDATE_ALL',
    LOAD_USUARIOS = '@usuarios/LOAD_USUARIOS',
    SELECIONA_USUARIO = '@usuarios/SELECIONA_USUARIO',
    LOGOFF_USUARIO = '@usuarios/LOGOFF_USUARIO'
}

export interface UsuarioAction<T = any> {
    type: UsuariosActionTypes
    payload?: T
}


export default interface UsuariosState {
    all: Array<Usuario>
    selecionado?: Usuario
}