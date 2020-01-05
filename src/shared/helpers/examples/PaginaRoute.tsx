import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalStore } from 'store';
import {StackProps} from 'types/common/navigation'
import Apontamento from 'types/models/Apontamento';
import defaultStyles from 'shared/styles/EstilosPadrao'
import Colors from 'shared/styles/Colors'


export function navigationOptions(): NavigationStackOptions {
    return {
        title: 'Título da página',
    }
}

export default function NovaTela(props: PropsWithChildren<StackProps>) {
    const buscandoDados = useSelector<GlobalStore, Apontamento>(state => state.apontamentoSelecionado)

    const dispatch = useDispatch()

    function chamandoAction() {
        dispatch({types: 'NOMEDAACTION', payload: "ObjetoParametroDaAction"})
    }

    return (
        <View>
            {/* O código vai aqui */}
        </View>
    )
}

const styles = StyleSheet.create({
    estilo1: {
        height: 10,
        width: '50%'
    }
})
