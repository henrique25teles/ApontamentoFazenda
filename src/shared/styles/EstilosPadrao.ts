import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width:'100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        borderRadius: 25,
    },
    botaoContainer: {
        width: 280,
        borderRadius: 25,
    },
    textInputContainerStyle: {
        borderBottomWidth: 0,
    },
    textInputLeftIcon: {
        left: -10,
    },
    textInputTexto: {
        width: 280,
        elevation: 2, 
        borderRadius: 25
    },
})