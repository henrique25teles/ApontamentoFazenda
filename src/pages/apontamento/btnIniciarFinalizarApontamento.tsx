import React, { PropsWithChildren } from 'react';
import { StyleSheet, Alert } from 'react-native';
import {Button} from 'react-native-elements'

import {StackProps} from 'types/common/navigation'

interface Props extends StackProps<any> {
    isIniciado: boolean
    isPausado: boolean
    setIsIniciado: (boolean) => void
    setIsPausado: (boolean) => void
}

export default function BotoesApontamento(props: PropsWithChildren<Props>) {
    function btnFinalizaApontamento_onClick() {
        Alert.alert('', 'Apontamento Finalizado')
    }

    function btnIniciaApontamento_onClick() {
        //Alert.alert('', 'Apontamento Iniciado')
        props.setIsIniciado(true)
        props.navigation.navigate('Apontamento')
    }

    function btnPausaApontamento_onClick() {
        Alert.alert('', 'Apontamento Pausado')
        props.setIsPausado(true)
    }

    function btnRetomaApontamento_onClick() {
        Alert.alert('', 'Apontamento Retomado')
        props.setIsPausado(false)
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