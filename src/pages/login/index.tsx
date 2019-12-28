import React, { PropsWithChildren, useRef, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

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
        <View style={styles.container}>
            <Input 
                label="Usuário"
                leftIcon={{name:'user', type:'antdesign'}}
                leftIconContainerStyle={styles.iconeEsquerdo}
                containerStyle={styles.texto}
                autoCorrect={false} 
                keyboardType="default"
                autoCapitalize="none" 
                blurOnSubmit={false} 
                returnKeyType="next"
                onSubmitEditing={usuario_onSubmit}
            />
            <Input 
                label="Senha" 
                leftIcon={{name:'lock', type:'feather'}}
                leftIconContainerStyle={styles.iconeEsquerdo}
                containerStyle={styles.texto}
                autoCorrect={false} 
                keyboardType="visible-password"
                autoCapitalize="none" 
                blurOnSubmit={true} 
                returnKeyType="done" 
                textContentType="password"
                ref={txtSenha}
            />
            <Button 
                title="Entrar"
                icon={{name:'login', type:'material-community'}}
                type="outline" 
                containerStyle={styles.botaoConfirma}
                loading={isLoading}
                onPressOut={entrar_onClick}
                raised 
            />
        </View>
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
    texto: {
        width: 280,
        paddingBottom: 5,
    },
    iconeEsquerdo: {
        left: -10,
    },
    botaoConfirma: {
        width: 280,
        paddingTop: 3
    }
})