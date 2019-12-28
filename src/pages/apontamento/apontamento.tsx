import React, { PropsWithChildren } from 'react';
import { View, FlatList } from 'react-native';
import {ListItem} from 'react-native-elements'

import {StackProps} from 'types/common/navigation'

interface Props extends StackProps<any> {}

interface Funcionarios {
    id: number,
    nome: string,
    quantidade: number
}

export default function Apontamento(props: PropsWithChildren<Props>){
    const funcionarios: Array<Funcionarios> = [
        {id: 1, nome: 'Joao Jose', quantidade: 0},
        {id: 2, nome: 'Jair', quantidade: 23},
        {id: 3, nome: 'Mauricio', quantidade: 0},
        {id: 4, nome: 'Pablo', quantidade: 18},
        {id: 5, nome: 'Palmeiras', quantidade: 30},
        {id: 6, nome: 'Oloko', quantidade: 25},
    ]

    function keyextractor(item, index): string {
        return index.toString()
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
                bottomDivider
            />
        )
    }

    return (
        <View>
            <FlatList<Funcionarios> 
                data={funcionarios} 
                renderItem={renderItem}
                keyExtractor={keyextractor}  
            />
        </View>
    )
}
