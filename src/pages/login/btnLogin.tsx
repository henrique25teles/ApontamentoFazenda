import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, Alert, AsyncStorage } from 'react-native';

import defaultStyles from 'shared/styles/EstilosPadrao'
import Colors from 'shared/styles/Colors'
import {StackProps} from 'types/common/navigation'
import { IconNode, Icon, Button } from 'react-native-elements';
import Usuario from 'types/models/Usuario';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStore } from 'store';
import { UsuariosActionTypes } from 'types/store/UsuariosState';

interface Props extends StackProps<any> { 
    usuario: string,
    senha: string
}

export default function BotaoLogin(props: PropsWithChildren<Props>){
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    const dispatch = useDispatch()

    const usuarios = useSelector<GlobalStore, Usuario[]>(state => state.usuarios.all)

    function btnEntrar_icon(): IconNode {
        return <Icon name="login" type="material-community" color={Colors.PretoClaro} />
    }

    async function btnEntrar_onClick(): Promise<void> {
        setIsLoading(true)

        const usuarioSelecionado = usuarios.find(x => x.nome == props.usuario && x.senha == props.senha)

        if (usuarioSelecionado){
            await AsyncStorage.setItem('usuarioSalvo', props.usuario)
            await AsyncStorage.setItem('senhaSalva', props.senha)

            dispatch({type: UsuariosActionTypes.SELECIONA_USUARIO, payload: usuarioSelecionado})
            
            setTimeout(() => {
                props.navigation.navigate('Main')
            }, 1500);
        } else {
            Alert.alert('', 'Usuário não encontrado')
            setIsLoading(false)
        }
    }

    return (
        <Button 
            title="Entrar"
            icon={btnEntrar_icon}
            type="outline" 
            containerStyle={defaultStyles.botaoContainer}
            buttonStyle={[defaultStyles.botao, styles.botaoEstilo]}
            titleStyle={styles.botaoTextoEstilo}
            loading={isLoading}
            onPressOut={btnEntrar_onClick}
            raised 
        />
    )
}

const styles = StyleSheet.create({
    botaoEstilo: {
        backgroundColor: Colors.RosaClaro,
    },
    botaoTextoEstilo: {
        color: Colors.Branco
    }
})
