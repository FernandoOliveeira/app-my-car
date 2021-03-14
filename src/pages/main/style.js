import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled(LinearGradient).attrs({
    colors: ['#022B3A', '#07455c'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
    flex: 1;
    background-color: #1F7A8C;
    align-items: center;
    justify-content: center;
    padding-top: 20;
`;

export default StyleSheet.create({
    container: {
        // paddingTop: Platform.OS === 'android' ? 25 : 0,
        flex: 1,
        backgroundColor: '#1F7A8C',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },

    image: {
        marginTop: 20,
        marginBottom: 10,
        width: 150,
        height: 100,
    },

    inputView: {
        flexDirection: 'row',
        width: '95%',
        height: 50,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#022B3A'
    },

    inputIcon: {
        paddingLeft: 15
    },

    input: {
        flex: 1,
        height: 60,
        width: '95%',
        borderBottomColor: 'gray',
        paddingLeft: 10,
        paddingRight: 25,
        fontSize: 15,
        color: 'white',


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