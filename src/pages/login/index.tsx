import React, { PropsWithChildren, useRef, useState} from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'

import {StackProps} from 'types/common/navigation'

export default function Login(props: PropsWithChildren<StackProps<any>>) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    const txtSenha = useRef<Input>();

    function usuario_onSubmit(): void {
        txtSenha.current.focus()
    }

    function entrar_onClick(): void {
        setIsLoading(true)
        setTimeout(() => {
            props.navigation.navigate('Main')
        }, 1500);
    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '78%', paddingBottom: 80}}>
                    <Text h1 h1Style={{color: '#00000080', opacity: 0.95}}>Login</Text>
                </View>
                <View style={styles.lineView}>
                    <Input 
                        placeholder="Digite o Nome de usuário"
                        leftIcon={{name:'user', type:'antdesign'}}
                        leftIconContainerStyle={styles.iconeEsquerdo}
                        containerStyle={styles.texto}
                        inputContainerStyle={styles.textoInputStyle}
                        autoCorrect={false} 
                        keyboardType="default"
                        autoCapitalize="none" 
                        blurOnSubmit={false} 
                        returnKeyType="next"
                        textContentType="username"
                        onSubmitEditing={usuario_onSubmit}
                    />
                </View>
                <View style={styles.lineView}>
                    <Input 
                        placeholder="Digite a senha"
                        leftIcon={{name:'lock', type:'feather'}}
                        leftIconContainerStyle={styles.iconeEsquerdo}
                        containerStyle={styles.texto}
                        inputContainerStyle={styles.textoInputStyle}
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
                            icon={{name:'login', type:'material-community'}}
                            type="outline" 
                            containerStyle={styles.botaoConfirma}
                            buttonStyle={styles.botaoEstilo}
                            titleStyle={styles.botaoTextoEstilo}
                            loading={isLoading}
                            onPressOut={entrar_onClick}
                            raised 
                        />
                    </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width:'100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lineView: {
        padding: 5
    },
    texto: {
        width: 280,
        elevation: 2, 
        borderRadius: 25
    },
    textoInputStyle: {
        borderBottomWidth: 0
    },
    iconeEsquerdo: {
        left: -10,
    },
    botaoConfirma: {
        width: 280,
        paddingTop: 3
    },
    botaoEstilo: {
        borderRadius: 25,
        backgroundColor: '#f27cb1',
    },
    botaoTextoEstilo: {
        color: '#fafafa'
    }
})