import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerMain: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerText: {
        fontSize: 30,
    },

    input: {
        height: 40,
        width: (Dimensions.get('window').width / 1.5),
        borderColor: 'gray',
        borderWidth: 1,
        margin: 30,
        backgroundColor: 'white'
    }


})