import styled from 'styled-components/native';

export const Container = styled.View`
  padding-left: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: #022B3A;
`;

export const View = styled.View`
  padding-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 20px;
  font-weight: bold;
  color: white;
  padding-left: 10px;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: white;
  padding-left: 10px;
`;



