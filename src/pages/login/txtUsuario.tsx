import React, { PropsWithChildren, MutableRefObject, useEffect } from 'react';

import defaultStyles from 'shared/styles/EstilosPadrao'
import { Input, IconNode, Icon } from 'react-native-elements';
import { AsyncStorage } from 'react-native';

interface Props {
    txtSenha: MutableRefObject<Input>
    usuario: string,
    setUsuario: (texto: string) => void
}

export default function Usuario(props: PropsWithChildren<Props>){
    
    function txtUsuario_onSubmit(): void {
        props.txtSenha.current.focus()
    }

    function txtUsuario_leftIcon(): IconNode {
        return <Icon name="user" type="antdesign" />
    }


    return (
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
            value={props.usuario}
            onChangeText={props.setUsuario}
            onSubmitEditing={txtUsuario_onSubmit}
        />
    )
}
