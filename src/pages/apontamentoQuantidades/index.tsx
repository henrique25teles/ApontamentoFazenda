import React, { PropsWithChildren, useState } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet, FlatList } from 'react-native';

import {StackProps} from 'types/common/navigation'
import { Text, ListItem, Icon, Button, Input } from 'react-native-elements';
import Colors from 'shared/styles/Colors';

interface Props extends StackProps<any> {}

interface Quantidade {
    id: number,
    quantidade: number
    hora: string
}

export default function ApontamentoQuantidadesPage(props: PropsWithChildren<Props>){
    const [isModalVisivel, setIsModalVisivel] = useState(false)

    const quantidades: Array<Quantidade> = [
        {id: 1, hora: '07:15', quantidade: 15.25},
        {id: 2, hora: '09:25', quantidade: 3.40},
        {id: 3, hora: '08:30', quantidade: 18.16},
        {id: 4, hora: '04:38', quantidade: 40},
        {id: 5, hora: '09:25', quantidade: 4},
        {id: 6, hora: '12:45', quantidade: 7},
        {id: 7, hora: '23:45', quantidade: 9.48},
        {id: 8, hora: '19:45', quantidade: 10.25},
        {id: 9, hora: '08:45', quantidade: 25},
        {id: 10, hora: '21:45', quantidade: 30},
        {id: 11, hora: '19:45', quantidade: 100},
        {id: 12, hora: '18:45', quantidade: 250},
        {id: 13, hora: '12:50', quantidade: 25000},
    ]

    function keyextractor(item, index): string {
        return index.toString()
    }

    function botaoEditar_onPress() {
        setIsModalVisivel(false)
    }

    function renderItem({item, index}){
        return (
            <ListItem
                title={`${item.id.toString()} - Horário:`} 
                subtitle={`${item.hora}`}
                rightTitle={`Qtde: ${item.quantidade.toString()}`}
                onPress={() => setIsModalVisivel(true)}
                Component={TouchableOpacity}
                bottomDivider
            />
        )
    }

    return (
        <>
            <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', width: '100%', height: '100%'}}>
                <View style={{height: 100}}>
                    <ListItem 
                        title="João da silva"
                        rightTitle="Total: 50,45"
                        leftAvatar={{
                            icon: {name:'user', type:'antdesign'}, 
                            size: 'medium'
                        }} 
                        containerStyle={{backgroundColor: Colors.Cinza, height: 100, elevation: 5}}
                    />
                </View>
                <View style={{flex: 1}}>
                    <FlatList 
                        data={quantidades} 
                        renderItem={renderItem}
                        keyExtractor={keyextractor} 
                    />
                </View>
            </View>
            <Modal animationType="fade" visible={isModalVisivel} hardwareAccelerated={true} transparent >
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <Text h4 h4Style={{position: 'absolute', top: 10, left: 10}}>Apontamento 1</Text>
                        <Text h4 h4Style={{position: 'absolute', top: 40, left: 10, fontSize: 18}}>Horário 09:15</Text>
                        <Input 
                            label="Quantidade" 
                            value="0" 
                            keyboardType="numeric" 
                            placeholder="Insira a quantidade" 
                            selectTextOnFocus 
                        />
                        <Button 
                            title="Alterar"
                            onPress={botaoEditar_onPress}
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
        backgroundColor: Colors.PretoClaro,
        opacity: 50
    },
    modalView: {
        width: 300,
        height: 300,
        backgroundColor: Colors.Branco, 
        padding: 20,
        justifyContent: "center"
    },
})