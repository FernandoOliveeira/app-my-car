import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  border-radius: 4px;
  background: #0caac9;
  margin-bottom: 15px;
  margin-right: 25px;
`;

export const CustomView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;
export const ServiceView = styled.View`
  flex: 1;
  flex-direction: row;
  margin-right: 30px;
  align-items: center;
`;

export const Service = styled.Text.attrs({
  NumberOfLines: 4,
})`
  flex-wrap: wrap;
  margin: 10px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Price = styled.Text`
  color: white;
  font-size: 20px;
  padding-left: 10px;
`;

export const Date = styled.Text`
  color: white;
  font-size: 20px;
  padding-left: 10px;
`;

