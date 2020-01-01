import React, { PropsWithChildren, useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';

import {StackProps} from 'types/common/navigation'
import { Icon, Text } from 'react-native-elements';
import Colors from 'shared/styles/Colors';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

interface Props extends StackProps<any> {}

export default function HeaderRight(props: PropsWithChildren<Props>){
    const [dropdownSettings, setDropdownSettings] = useState({
        visible: false,
        y: new Animated.Value(1)
    })
    
    function toggleDropdown() {
        if (!dropdownSettings.visible)
            setDropdownSettings({...dropdownSettings, visible: true})

        Animated.timing(dropdownSettings.y, {
            toValue: dropdownSettings.visible ? 0 : 1,
            duration: 200,
            useNativeDriver: true
        })
        .start(() => setDropdownSettings({...dropdownSettings, visible: !dropdownSettings.visible }))
    }


    function logOff() {
        props.navigation.navigate('Login')
    }
    
    return (
        <>
            <View style={styles.menuButton}>
                <Icon 
                    name="dots-three-vertical" 
                    type="entypo" 
                    color={Colors.Branco} 
                    Component={TouchableOpacity} 
                    onPress={toggleDropdown}
                    hitSlop={{left: 3, right: 3}} 
                />
            </View>
            {
                dropdownSettings.visible ?
                    <Animated.View style={[styles.dropdown, {transform: [{scaleY: dropdownSettings.y}]} ]}>
                        <TouchableNativeFeedback>
                            <View style={styles.botao}>
                                <Text style={styles.texto}>Configurações</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback  style={styles.botao} onPress={logOff}>
                            <Text style={styles.texto}>Sair</Text>
                        </TouchableNativeFeedback>
                    </Animated.View>
                : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    menuButton: {
        right: 10,
    },
    dropdown: {
        position: 'absolute', 
        top: 50, 
        right: 5, 
        backgroundColor: Colors.Cinza, 
        borderRadius: 2,
    },
    botao: {
        height: 45,
        width: 150,
        padding: 4,
        justifyContent: 'center',
    },
    texto: {
        textAlign: 'left',
        fontSize: 16
    }
})