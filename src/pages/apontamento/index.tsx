import React, { PropsWithChildren, useRef, useState } from 'react'
import { View, StyleSheet, Picker, Alert } from 'react-native'
import { Input, Button } from 'react-native-elements'

import {StackProps} from 'types/common/navigation'

interface SelectItem {
    id: number
    texto: string
}

export default function Apontamento(props: PropsWithChildren<StackProps<any>>) {
    const centrosCustos: Array<SelectItem> = [
        { id: 0, texto: 'Selecione'},
        { id: 1, texto: 'geral'},
        { id: 2, texto: 'centro 2'},
        { id: 3, texto: 'Jair baitola'},
    ]

    const eventos: Array<SelectItem> = [
        { id: 0, texto: 'Celecione'},
        { id: 1, texto: 'Eventi 1'},
        { id: 2, texto: 'evento 2'},
        { id: 3, texto: 'Evento 3'},
        { id: 4, texto: 'Evento 4'},
        { id: 5, texto: 'Evento 5'},
        { id: 6, texto: 'Evento 6'},
        { id: 7, texto: 'Evento 7'},
    ]
  
    function finalizaApontamento_onClick() {
        Alert.alert('Opa', 'Tá pronto ainda não misera')
    }

    function centroCusto_onChange(item, index) {

    }

    function evento_onChange() {

    }

    return (
        <View style={styles.container}>
            <Picker
            style={styles.dropdown}
            mode="dialog"
            selectedValue={0}
            onValueChange={centroCusto_onChange}
            >
            {
                centrosCustos.map((centroCusto, index) => (
                    <Picker.Item 
                        key={index.toString()}
                        value={centroCusto.id}
                        label={centroCusto.texto}
                    />
                ))
            }
            </Picker>
            <Picker
            style={styles.dropdown}
            mode="dialog"
            selectedValue={0}
            onValueChange={evento_onChange}
            >
            {
                eventos.map((evento, index) => (
                    <Picker.Item 
                        key={index.toString()}
                        value={evento.id}
                        label={evento.texto}
                    />
                ))
            }
            </Picker>
            <Button 
                title="Finalizar Apontamento"
                icon={{name:'flag-checkered', type:'font-awesome'}}
                type="outline" 
                containerStyle={styles.botaoConfirma}
                onPressOut={finalizaApontamento_onClick}
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
    dropdown: {
        width: 290,
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