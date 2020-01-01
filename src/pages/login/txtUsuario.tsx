import React, { PropsWithChildren, MutableRefObject } from 'react';

import defaultStyles from 'shared/styles/EstilosPadrao'
import { Input, IconNode, Icon } from 'react-native-elements';

interface Props {
    txtSenha: MutableRefObject<Input>
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
            onSubmitEditing={txtUsuario_onSubmit}
        />
    )
}
