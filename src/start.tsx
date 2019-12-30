import React, { useState } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native'
import {AppLoading} from 'expo'
import {Asset} from 'expo-asset'
import * as Font from 'expo-font'
import { Ionicons, Entypo, AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome, Octicons, MaterialIcons, EvilIcons, Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { EventosActionTypes } from 'types/store/EventosState'
import { CentrosCustosActionTypes } from 'types/store/CentrosCustosState';
import AppContainer from './routes'

export default function Start() {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const dispatch = useDispatch()

    async function _loadResourcesAsync() {
        await Promise.all([
          Font.loadAsync(MaterialIcons.font),
          Font.loadAsync(Ionicons.font),
          Font.loadAsync(MaterialCommunityIcons.font),
          Font.loadAsync(Entypo.font),
          Font.loadAsync(AntDesign.font),
          Font.loadAsync(FontAwesome.font),
          Font.loadAsync(FontAwesome5.font),
          Font.loadAsync(Octicons.font),
          Font.loadAsync(EvilIcons.font),
          Font.loadAsync(Feather.font),
        ]);
      };

    async function setEndLoading(): Promise<void> {
        setIsLoading(false)
    }

    function loadDados(): void {
        dispatch({ type: CentrosCustosActionTypes.LOAD_CENTROSCUSTOS })
        dispatch({ type: EventosActionTypes.LOAD_EVENTOS})
    }
    
    if (isLoading) {
        loadDados()
        
        return (
            <AppLoading 
                startAsync={_loadResourcesAsync}
                onFinish={setEndLoading}
                onError={console.log}
                autoHideSplash={true}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.navigator}>
                <AppContainer />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    navigator: {
        flex: 1,
    }
})