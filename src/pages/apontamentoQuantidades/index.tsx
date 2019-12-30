import React, { PropsWithChildren, useState } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet } from 'react-native';

import {StackProps} from 'types/common/navigation'
import { Text, ListItem, Icon, Button, Input } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

interface Props extends StackProps<any> {}

interface Quantidade {
    id: number,
    quantidade: number
    hora: string
}

export default function ApontamentoQuantidadesPage(props: PropsWithChildren<Props>){
    const [isModalVisivel, setIsModalVisivel] = useState(false)

    const quantidades: Array<Quantidade> = [
        {id: 1, hora: '07:15', quantidade: 15},
        {id: 2, hora: '09:25', quantidade: 3},
        {id: 3, hora: '08:30', quantidade: 18},
        {id: 4, hora: '04:38', quantidade: 4},
        {id: 5, hora: '09:25', quantidade: 4},
        {id: 6, hora: '12:45', quantidade: 7},
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
                title={item.id.toString()} 
                subtitle={`Horário ${item.hora}`}
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
                <View style={{height: 120}}>
                    <ListItem 
                        title="João da silva"
                        leftAvatar={{
                            icon: {name:'user', type:'antdesign'}, 
                            size: 'medium'
                        }} 
                        containerStyle={{backgroundColor: '#c5c7c9', height: 120, elevation: 5}}
                    />
                </View>
                <View style={{flex: 1}}>
                    <FlatList 
                        data={quantidades} 
                        renderItem={renderItem}
                        keyExtractor={keyextractor} 
                    />
                </View>
                <View style={{flexDirection: 'column', elevation: 5, alignItems: 'flex-end', height: 50, backgroundColor: '#c5c7c9'}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Text h4>Total: 300</Text>
                    </View>
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
        backgroundColor: '#00000080',
        opacity: 50
    },
    modalView: {
        width: 300,
        height: 300,
        backgroundColor: '#fff', 
        padding: 20,
        justifyContent: "center"
    },
})