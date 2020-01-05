import React, { PropsWithChildren } from 'react';
import {HeaderButton, HeaderButtons, HiddenItem, defaultOnOverflowMenuPress} from 'react-navigation-header-buttons'
import {MaterialIcons} from '@expo/vector-icons'

import {StackProps} from 'types/common/navigation'
import Colors from 'shared/styles/Colors'

export default function HeaderRight(props: PropsWithChildren<StackProps>){
    const MaterialHeaderButton = props => (
        <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color="blue" />
    );
    
    return (
        <HeaderButtons
            HeaderButtonComponent={MaterialHeaderButton}
            OverflowIcon={<MaterialIcons name="more-vert" size={23} color={Colors.Branco} />}
            onOverflowMenuPress={({ overflowButtonRef, hiddenButtons }) =>
                defaultOnOverflowMenuPress({
                    overflowButtonRef,
                    hiddenButtons,
                })
            }
        >
            <HiddenItem title="Sair" onPress={() => props.navigation.navigate('Login')} />
        </HeaderButtons>
    )
}
