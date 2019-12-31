import React, { PropsWithChildren, useRef, useState} from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Input, Button, Text, IconNode, Icon } from 'react-native-elements'

import defaultStyles from 'shared/styles/EstilosPadrao'
import {StackProps} from 'types/common/navigation'
import Colors from 'shared/styles/Colors'

export default function Login(props: PropsWithChildren<StackProps<any>>) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    const txtSenha = useRef<Input>();

    function txtUsuario_onSubmit(): void {
        txtSenha.current.focus()
    }

    function txtUsuario_leftIcon(): IconNode {
        return <Icon name="user" type="antdesign" />
    }

    function txtSenha_leftIcon(): IconNode {
        return <Icon name="lock" type="feather" />
    }

    function btnEntrar_icon(): IconNode {
        return <Icon name="login" type="material-community" />
    }

    function btnEntrar_onClick(): void {
        setIsLoading(true)
        setTimeout(() => {
            props.navigation.navigate('Main')
        }, 1500);
    }


    return (
        <KeyboardAvoidingView behavior="height" style={defaultStyles.container}>
                <View style={styles.cabecalho}>
                    <Text h1 h1Style={styles.cabecalhoTexto}>Login</Text>
                </View>
                <View style={styles.lineView}>
                    <Input 
                        placeholder="Digite o Nome de usuário"
                        leftIcon={txtUsuario_leftIcon}
                        leftIconContainerStyle={defaultStyles.textInputLeftIcon}
                        containerStyle={defaultStyles.textInputTexto}
                        inputContainerStyle={defaultStyles.textInputContainerStyle}
                        autoCorrect={false} 
                        keyboardType="default"
                        autoCapitalize="none" 
                        blurOnSubmit={false} 
                        returnKeyType="next"
                        textContentType="username"
                        onSubmitEditing={txtUsuario_onSubmit}
                    />
                </View>
                <View style={styles.lineView}>
                    <Input 
                        placeholder="Digite a senha"
                        leftIcon={txtSenha_leftIcon}
                        leftIconContainerStyle={defaultStyles.textInputLeftIcon}
                        containerStyle={defaultStyles.textInputTexto}
                        inputContainerStyle={defaultStyles.textInputContainerStyle}
                        autoCorrect={false} 
                        autoCapitalize="none" 
                        blurOnSubmit={true} 
                        returnKeyType="done"
                        textContentType="password"
                        secureTextEntry={true}
                        ref={txtSenha}
                    />
                </View>
                <View style={styles.lineView}>
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
        opacity: 0.95
    },
    lineView: {
        padding: 6
    },
    botaoEstilo: {
        backgroundColor: Colors.RosaClaro,
    },
    botaoTextoEstilo: {
        color: Colors.Branco
    }
})