import React, { PropsWithChildren, useRef, useState, useEffect} from 'react'
import { StyleSheet, KeyboardAvoidingView, Animated, Easing, View, AsyncStorage  } from 'react-native'
import { Input, Text, Icon } from 'react-native-elements'

import defaultStyles from 'shared/styles/EstilosPadrao'
import {StackProps} from 'types/common/navigation'
import Colors from 'shared/styles/Colors'
import UsuarioText from './txtUsuario'
import Senha from './txtSenha'
import BotaoLogin from './btnLogin'
import { useSelector } from 'react-redux'
import { GlobalStore } from 'store'
import Usuario from 'types/models/Usuario'

export default function Login(props: PropsWithChildren<StackProps<any>>) {
    const [cabecalhoVY] = useState(new Animated.Value(-300))
    const [usuarioVX] = useState(new Animated.Value(-500))
    const [senhaVX] = useState(new Animated.Value(-500))
    const [btnLoginVX] = useState(new Animated.Value(-500))
    const [btnConfigVX] = useState(new Animated.Value(100))
    
    const txtSenha = useRef<Input>();

    const usuarioSelecionado = useSelector<GlobalStore, Usuario>(state => state.usuarios.selecionado)
    
    const [usuario, setUsuario] = useState('' || usuarioSelecionado.nome)
    const [senha, setSenha] = useState('' || usuarioSelecionado.senha)

    useEffect(() => {
        if (usuarioSelecionado.id) {
            props.navigation.navigate('Main')
        } else {
            animarTelaIn()
        }
    }, [])

    async function animarTelaIn() {
        Animated.timing(cabecalhoVY, {
            toValue: 0,
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
        
        Animated.timing(btnConfigVX, {
            toValue: 0,
            duration: 500,
            easing: Easing.elastic(1),
            useNativeDriver: true
        }).start()

        Animated.timing(btnLoginVX, {
            toValue: 0,
            duration: 500,
            easing: Easing.elastic(1),
            delay: 200,
            useNativeDriver: true
        }).start()
    }

    function animarTelaOut(callback: Function) {
        Animated.timing(cabecalhoVY, {
            toValue: -300,
            duration: 500,
            useNativeDriver: true
        }).start()

        Animated.timing(usuarioVX, {
            toValue: -500,
            duration: 500,
            easing: Easing.elastic(1),
            useNativeDriver: true
        }).start()

        Animated.timing(senhaVX, {
            toValue: -500,
            duration: 500,
            easing: Easing.elastic(1),
            delay: 100,
            useNativeDriver: true
        }).start()

        Animated.timing(btnConfigVX, {
            toValue: 100,
            duration: 500,
            easing: Easing.elastic(1),
            useNativeDriver: true
        }).start()

        Animated.timing(btnLoginVX, {
            toValue: -500,
            duration: 500,
            easing: Easing.elastic(1),
            delay: 200,
            useNativeDriver: true
        }).start()

        setTimeout(callback, 500);
    }

    function btnConfig_onPress() {
        animarTelaOut(() => props.navigation.navigate('Config'))
    }

    return (
        <KeyboardAvoidingView behavior="height" style={defaultStyles.container}>
            <Animated.View style={[styles.botaoConfiguracoes, { transform: [{translateX: btnConfigVX}] }]}>
                <Icon name="settings" type="feather" color={Colors.PretoClaro} onPress={btnConfig_onPress} raised />
            </Animated.View>
            <Animated.View style={[ styles.cabecalho, { transform: [{ translateY: cabecalhoVY }] }]}>
                <Text h1 h1Style={styles.cabecalhoTexto}>Login</Text>
            </Animated.View>
            <Animated.View style={[ styles.lineView, { transform: [ { translateX: usuarioVX } ]} ]}>
                <UsuarioText txtSenha={txtSenha} usuario={usuario} setUsuario={setUsuario} />
            </Animated.View>
            <Animated.View style={[ styles.lineView, {transform: [ { translateX: senhaVX } ]} ]}>
                <Senha reference={txtSenha} senha={senha} setSenha={setSenha} />
            </Animated.View>
            <Animated.View style={[ styles.lineView, {transform: [ { translateX: btnLoginVX } ]} ]}>
                <BotaoLogin {...props} usuario={usuario} senha={senha} />
            </Animated.View>
            <View style={styles.copyright}>
                <Text style={styles.copyrightText}>Openline Informática Ltda</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    botaoConfiguracoes: {
        position: 'absolute', 
        top: 25, 
        right: 5
    },
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
