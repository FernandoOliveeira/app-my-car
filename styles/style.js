import { Dimensions, Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        // paddingTop: Platform.OS === 'android' ? 25 : 0,
        flex: 1,
        backgroundColor: '#1F7A8C',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },

    headerText: {
        fontSize: 30,
    },

    input: {
        height: 50,
        width: Platform.OS === 'android' ? (Dimensions.get('window').width * 70) / 100 : '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 30,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        fontSize: 20,
        borderRadius: 3,


    },

    button: {
        marginTop: 30,
        backgroundColor: '#0caac9',
        borderRadius: 10
    },

    buttonText: {
        fontSize: 20,
        color: '#fff',
        margin: 10,
        padding: 10
    },

})