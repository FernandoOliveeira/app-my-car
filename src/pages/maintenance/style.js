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
    padding-top: 20px;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    margin-top: 20px;
`;

export default StyleSheet.create({

    inputIcon: {
        paddingLeft: 15
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