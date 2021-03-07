import { Dimensions, Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 25 : 0,
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
        width: Platform.OS === 'android' ? (Dimensions.get('window').width * 70) / 100 : '70%',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 30,
        backgroundColor: 'white'
    }


})