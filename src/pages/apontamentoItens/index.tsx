import React, { PropsWithChildren, useState } from 'react';
import { View, FlatList, Alert, Modal, StyleSheet } from 'react-native';
import {ListItem, Icon, Input, Text, Button} from 'react-native-elements'

import {StackProps} from 'types/common/navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackProps<any> {}

interface Funcionarios {
    id: number,
    nome: string,
    quantidade: number
}

export default function ApontamentoQuantidades(props: PropsWithChildren<Props>){
    const funcionarios: Array<Funcionarios> = [
        {id: 1, nome: 'Joao Jose', quantidade: 0},
        {id: 2, nome: 'Jair', quantidade: 0},
        {id: 3, nome: 'Mauricio', quantidade: 0},
        {id: 4, nome: 'Pablo', quantidade: 0},
        {id: 5, nome: 'Palmeiras', quantidade: 0},
        {id: 6, nome: 'Oloko', quantidade: 0},
    ]

    const [listafuncionarios, setListaFuncionarios] = useState(funcionarios)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [funcionarioSelecionado, setFuncionarioSelecionado] = useState<Funcionarios>(funcionarios[0])
    const [quantidade, setQuantidade] = useState("0")

    function keyextractor(item, index): string {
        return index.toString()
    }

    function adicionarQuantidade(funcionarioId) {
        setIsModalVisible(true)
        setFuncionarioSelecionado(listafuncionarios.find(x => x.id == funcionarioId))
        //Alert.alert('', `Id do cara ${funcionarioId}`)
    }

    function botaoIncluir_onPress() {
        const novoFuncionario = {...funcionarioSelecionado}

        novoFuncionario.quantidade += parseFloat(quantidade)

        const novaListaFuncionarios = [...listafuncionarios.filter(x => x.id != novoFuncionario.id)]
        novaListaFuncionarios.push(novoFuncionario)
        setListaFuncionarios(novaListaFuncionarios)
        
        setQuantidade("0")
        setIsModalVisible(false)
    }

    function renderItem({item}){
        return (
            <ListItem
                title={item.nome} 
                subtitle={item.quantidade.toString()}
                leftAvatar={{
                    icon: {name:'user', type:'antdesign'}, 
                    size: 'medium'
                }}
                rightIcon={<Icon name="plussquareo" type="antdesign" size={35} Component={TouchableOpacity} onPress={() => adicionarQuantidade(item.id)} />}
                bottomDivider
            />
        )
    }

    return (
        <>
            <View>
                <FlatList<Funcionarios> 
                    data={listafuncionarios.sort(x => x.id)} 
                    renderItem={renderItem}
                    keyExtractor={keyextractor}  
                />
            </View>
            <Modal animationType="slide" visible={isModalVisible} hardwareAccelerated={true} transparent >
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <Text h4 h4Style={{position: 'absolute', top: 10, left: 10}}>{funcionarioSelecionado.nome}</Text>
                        <Input 
                            label="Quantidade" 
                            value={quantidade} 
                            keyboardType="numeric" 
                            onChangeText={setQuantidade} 
                            placeholder="Insira a quantidade" 
                            selectTextOnFocus 
                        />
                        <Button 
                            title="Incluir"
                            onPress={botaoIncluir_onPress}
                            containerStyle={{position: 'absolute', bottom: 8, right: 8}}
                        />
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000080',
        opacity: 50
    },
    modalView: {
        width: 300,
        height: 300,
        backgroundColor: '#fff', 
        padding: 20,
        justifyContent: "center"
    }
})
