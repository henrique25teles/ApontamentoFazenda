import React, { PropsWithChildren, useRef, useState, useEffect} from 'react'
import { StyleSheet, KeyboardAvoidingView, Animated, Easing, View  } from 'react-native'
import { Input, Text } from 'react-native-elements'

import defaultStyles from 'shared/styles/EstilosPadrao'
import {StackProps} from 'types/common/navigation'
import Colors from 'shared/styles/Colors'
import Usuario from './txtUsuario'
import Senha from './txtSenha'
import BotaoLogin from './btnLogin'

export default function Login(props: PropsWithChildren<StackProps<any>>) {
    const [cabecalhoVY] = useState(new Animated.Value(-300))
    const [usuarioVX] = useState(new Animated.Value(-500))
    const [senhaVX] = useState(new Animated.Value(-500))
    const [btnLoginVX] = useState(new Animated.Value(-500))
    
    const txtSenha = useRef<Input>();

    useEffect(() => {
        Animated.timing(cabecalhoVY, {
            toValue: 30,
            duration: 500,
            useNativeDriver: true
        }).start()

        Animated.timing(usuarioVX, {
            toValue: 0,
            duration: 500,
            easing: Easing.elastic(1),
            useNativeDriver: true
        }).start()

        Animated.timing(senhaVX, {
            toValue: 0,
            duration: 500,
            easing: Easing.elastic(1),
            delay: 100,
            useNativeDriver: true
        }).start()

        Animated.timing(btnLoginVX, {
            toValue: 0,
            duration: 500,
            easing: Easing.elastic(1),
            delay: 200,
            useNativeDriver: true
        }).start()

    }, [])

    return (
        <KeyboardAvoidingView behavior="height" style={defaultStyles.container}>
            <Animated.View style={[ styles.cabecalho, { transform: [{ translateY: cabecalhoVY }] }]}>
                <Text h1 h1Style={styles.cabecalhoTexto}>Login</Text>
            </Animated.View>
            <Animated.View style={[ styles.lineView, { transform: [ { translateX: usuarioVX } ]} ]}>
                <Usuario txtSenha={txtSenha} />
            </Animated.View>
            <Animated.View style={[ styles.lineView, {transform: [ { translateX: senhaVX } ]} ]}>
                <Senha reference={txtSenha} />
            </Animated.View>
            <Animated.View style={[ styles.lineView, {transform: [ { translateX: btnLoginVX } ]} ]}>
                <BotaoLogin {...props} />
            </Animated.View>
            <View style={styles.copyright}>
                <Text style={styles.copyrightText}>Openline Informática Ltda</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        width: '78%', 
        paddingBottom: 80
    },
    cabecalhoTexto: {
        color: Colors.PretoClaro, 
        opacity: 0.95,
    },
    lineView: {
        padding: 6
    },
    copyright: {
        position: 'absolute', 
        bottom: 1
    },
    copyrightText: {
        color: Colors.PretoClaro, 
        fontSize: 11
    }
})
