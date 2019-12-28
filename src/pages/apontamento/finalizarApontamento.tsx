import React, { PropsWithChildren, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements'

import {StackProps} from 'types/common/navigation'

export default function FinalizarApontamento(props: PropsWithChildren<StackProps<any>>) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    const txtSenha = useRef<Input>();

    function usuario_onSubmit(): void {
        txtSenha.current.focus()
    }

    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <Input 
                    label="Usuário"
                    leftIcon={{name:'user', type:'antdesign'}}
                    leftIconContainerStyle={styles.iconeEsquerdo}
                    autoCorrect={false} 
                    keyboardType="default"
                    autoCapitalize="none" 
                    blurOnSubmit={false} 
                    returnKeyType="next"
                    onSubmitEditing={usuario_onSubmit}
                />
            </View>
            <View style={styles.texto}>
                <Input 
                    label="Senha" 
                    leftIcon={{name:'lock', type:'feather'}}
                    leftIconContainerStyle={styles.iconeEsquerdo}
                    autoCorrect={false} 
                    keyboardType="visible-password"
                    autoCapitalize="none" 
                    blurOnSubmit={true} 
                    returnKeyType="done" 
                    textContentType="password"
                    ref={txtSenha}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width:'100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        width: 260,
        paddingBottom: 5,
    },
    iconeEsquerdo: {
        left: -10,
    },
})