import React, { PropsWithChildren, useRef, useState } from 'react'
import { View, StyleSheet, Picker, Alert } from 'react-native'
import { Text, Button } from 'react-native-elements'

import {StackProps} from 'types/common/navigation'
import BotoesApontamento from 'pages/apontamento/btnIniciarFinalizarApontamento'
import CabecalhoApontamento from './cabecalhoApontamento'
import RodapeApontamento from './rodapeApontamento'

interface SelectItem {
    id: number
    texto: string
}

export default function Apontamento(props: PropsWithChildren<StackProps<any>>) {
    const [isIniciadoApontamento, setIsIniciadoApontamento] = useState<boolean>(false)
    const [isPausadoApontamento, setIsPausadoApontamento] = useState<boolean>(false)

    const centrosCustos: Array<SelectItem> = [
        { id: 0, texto: 'Selecione'},
        { id: 1, texto: 'geral'},
        { id: 2, texto: 'centro 2'},
        { id: 3, texto: 'Jair baitola'},
    ]
    
    const [centroCustoSelecionado, setCentroCustoSelecionado] = useState<number>(centrosCustos[0].id)
    
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

    const [eventoSelecionado, setEventoSelecionado] = useState<number>(eventos[0].id)
  
    function dropdownCentroCusto_onChange(itemValue: number, itemIndex: number) {
        setCentroCustoSelecionado(itemValue)
    }

    function dropdownEvento_onChange(itemValue: number, itemIndex: number) {
        setEventoSelecionado(itemValue)
    }

    function btnLogOut_onClick() {
        props.navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            {
                isIniciadoApontamento ?
                    <CabecalhoApontamento {...props}/>
                :
                null
            }
            <View style={styles.form}>
                <View style={styles.dropdownView}>
                    <Text style={styles.label}>Centro de Custo</Text>
                    <View style={styles.dropDown}>
                        <Picker
                        mode="dialog"
                        selectedValue={centroCustoSelecionado}
                        onValueChange={dropdownCentroCusto_onChange}
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
                    </View>
                </View>
                <View style={styles.dropdownView}>
                    <Text style={styles.label}>Eventos</Text>
                    <View style={styles.dropDown}>
                        <Picker
                        mode="dialog"
                        selectedValue={eventoSelecionado}
                        onValueChange={dropdownEvento_onChange}
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
                    
                    </View>
                </View>
                <View style={styles.formBotoes}>
                    <BotoesApontamento 
                        isIniciado={isIniciadoApontamento} 
                        setIsIniciado={setIsIniciadoApontamento}
                        isPausado={isPausadoApontamento} 
                        setIsPausado={setIsPausadoApontamento}
                        {...props} />
                </View>
            </View>
            {
                isIniciadoApontamento ?
                <RodapeApontamento {...props} />
                : 
                null
            }
            <Button 
                title="Sair"
                type="clear"
                containerStyle={styles.botaoLogOut}
                titleStyle={styles.textoLogOut}
                onPressOut={btnLogOut_onClick}
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    form: {
        flex: 2,
        margin: 5
    },
    formBotoes: {
        paddingVertical: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    botaoContainer: {
        margin: 5,
    },
    
    label: {
        textAlign: 'left'
    },
    dropdownView: {
        width: 290,
        paddingBottom: 5,
    },
    dropDown: {
        borderStyle: "solid", 
        borderWidth: 1, 
        borderColor: 'black'
    },
    iconeEsquerdo: {
        left: -10,
    },
    botaoLogOut: {
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
    textoLogOut: {
        textDecorationLine: "underline",
        fontSize: 22
    }
})