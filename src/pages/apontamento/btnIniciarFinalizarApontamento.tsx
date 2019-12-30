import React, { PropsWithChildren, Dispatch } from 'react';
import { StyleSheet, Alert } from 'react-native';
import {Button} from 'react-native-elements'

import {StackProps} from 'types/common/navigation'
import { ApontamentosSelecionadoActionTypes } from 'types/store/ApontamentoSelecionadoState';
import { useDispatch } from 'react-redux';

interface Props extends StackProps<any> {
    isIniciado: boolean
    isPausado: boolean
}

export default function BotoesApontamento(props: PropsWithChildren<Props>) {
    function btnFinalizaApontamento_onClick() {
        Alert.alert('', 'Apontamento Finalizado')
    }

    const dispatch = useDispatch()

    function btnIniciaApontamento_onClick() {
        dispatch({type: ApontamentosSelecionadoActionTypes.INICIA_APONTAMENTO})
        props.navigation.navigate('ApontamentoItens')
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
                    icon={{name:'play', type:'feather'}}
                    type="solid"
                    containerStyle={styles.botaoContainer}
                    buttonStyle={styles.botaoIniciar}
                    onPressOut={btnRetomaApontamento_onClick}
                    raised 
                />
                :
                <Button
                    title="Pausar"
                    icon={{name:'pause', type:'feather'}}
                    type="solid"
                    containerStyle={styles.botaoContainer}
                    buttonStyle={styles.botaoPausar}
                    onPressOut={btnPausaApontamento_onClick}
                    raised 
                />
            }
                <Button
                    title="Finalizar Apontamento"
                    icon={{name:'flag-checkered', type:'font-awesome'}}
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
            icon={{name:'play', type:'feather'}}
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
    },
    botaoIniciar: {
        backgroundColor: '#29c920'
    },
    botaoFinalizar: {
        backgroundColor: '#cc2616'
    },
    botaoPausar: {
        backgroundColor:'#6097f0'
    },
})