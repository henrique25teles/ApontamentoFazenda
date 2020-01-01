import React, { PropsWithChildren, Dispatch } from 'react';
import { StyleSheet, Alert } from 'react-native';
import {Button} from 'react-native-elements'

import {StackProps} from 'types/common/navigation'
import { ApontamentosSelecionadoActionTypes } from 'types/store/ApontamentoSelecionadoState';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStore } from 'store';
import Apontamento from 'types/models/Apontamento';
import Colors from 'shared/styles/Colors';

interface Props extends StackProps<any> {
    isIniciado: boolean
    isPausado: boolean
}

export default function BotoesApontamento(props: PropsWithChildren<Props>) {
    const apontamentoSelecionado = useSelector<GlobalStore, Apontamento>(state => state.apontamentoSelecionado)
    
    function btnFinalizaApontamento_onClick() {
        Alert.alert('', 'Apontamento Finalizado')
    }

    const dispatch = useDispatch()

    function btnIniciaApontamento_onClick() {
        if (apontamentoSelecionado.evento != 0 && apontamentoSelecionado.centroCusto != 0){
            dispatch({type: ApontamentosSelecionadoActionTypes.INICIA_APONTAMENTO})
            props.navigation.navigate('ApontamentoItens')
        } else {
            Alert.alert('', 'É necessário selecionar um Centro de Custo e um Evento')
        }
    }

    function btnPausaApontamento_onClick() {
        dispatch({type: ApontamentosSelecionadoActionTypes.PAUSA_APONTAMENTO})
    }

    function btnRetomaApontamento_onClick() {
        dispatch({type: ApontamentosSelecionadoActionTypes.RETOMA_APONTAMENTO})

    }
    
    if (props.isIniciado){
        return (
            <>
            {
                props.isPausado ?
                <Button
                    title="Retomar"
                    icon={{name:'play', type:'feather', color: Colors.Branco}}
                    type="solid"
                    containerStyle={styles.botaoContainer}
                    buttonStyle={styles.botaoIniciar}
                    onPressOut={btnRetomaApontamento_onClick}
                    raised 
                />
                :
                <Button
                    title="Pausar"
                    icon={{name:'pause', type:'feather', color: Colors.Branco}}
                    type="solid"
                    containerStyle={styles.botaoContainer}
                    buttonStyle={styles.botaoPausar}
                    onPressOut={btnPausaApontamento_onClick}
                    raised 
                />
            }
                <Button
                    title="Finalizar Apontamento"
                    icon={{name:'flag-checkered', type:'font-awesome', color: Colors.Branco}}
                    type="solid"
                    containerStyle={styles.botaoContainer}
                    buttonStyle={styles.botaoFinalizar}
                    onPressOut={btnFinalizaApontamento_onClick}
                    raised 
                />
            </>
        )
    }
    
    return (
        <Button
            title="Iniciar Apontamento"
            icon={{name:'play', type:'feather', color: Colors.Branco}}
            type="solid"
            containerStyle={styles.botaoContainer}
            buttonStyle={styles.botaoIniciar}
            onPressOut={btnIniciaApontamento_onClick}
            raised 
        />
    )
}

const styles = StyleSheet.create({
    botaoContainer: {
        margin: 5,
        borderRadius: 25
    },
    botaoIniciar: {
        backgroundColor: '#29c920',
        borderRadius: 25
    },
    botaoFinalizar: {
        backgroundColor: '#e63d17',
        borderRadius: 25
    },
    botaoPausar: {
        backgroundColor:'#6097f0',
        borderRadius: 25
    },
})