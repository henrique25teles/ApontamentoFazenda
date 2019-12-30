import React, { useState } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native'
import {AppLoading} from 'expo'
import {Asset} from 'expo-asset'
import * as Font from 'expo-font'
import { Ionicons, Entypo, AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome, Octicons, MaterialIcons, EvilIcons, Feather } from '@expo/vector-icons';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { EventoAction, EventosActionTypes } from 'types/store/EventosState'
import { CentroCustoAction, CentrosCustosActionTypes } from 'types/store/CentrosCustosState';
import AppContainer from './routes'
import CentroCusto from 'types/models/CentroCusto';
import Evento from 'types/models/Evento';
import ApontamentosState, { ApontamentosActionTypes } from 'types/store/ApontamentosState';
import { GlobalStore } from 'store';

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
        const centrosCustos: Array<CentroCusto> = [
            { id: 0, descricao: 'Selecione'},
            { id: 1, descricao: 'geral'},
            { id: 2, descricao: 'centro 2'},
            { id: 3, descricao: 'Jair baitola'},
        ]

        dispatch({type: CentrosCustosActionTypes.UPDATE_ALL, payload: centrosCustos})

        const eventos: Array<Evento> = [
            { id: 0, descricao: 'Celecione'},
            { id: 1, descricao: 'Eventi 1'},
            { id: 2, descricao: 'evento 2'},
            { id: 3, descricao: 'Evento 3'},
            { id: 4, descricao: 'Evento 4'},
            { id: 5, descricao: 'Evento 5'},
            { id: 6, descricao: 'Evento 6'},
            { id: 7, descricao: 'Evento 7'},
        ]

        dispatch({ type: EventosActionTypes.UPDATE_ALL, payload: eventos})
    }
    
    if (isLoading) {
        loadDados()
        AsyncStorage.getAllKeys().then(x => x.forEach(y => AsyncStorage.getItem(y).then(meuovo => console.log(JSON.parse(meuovo)))))
        
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