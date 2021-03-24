import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Container, CustomView, ServiceView, Service, Price, Date } from './style';

export default function Repository({ data }) {
  return (
    <Container>

      <ServiceView>
        <Ionicons name={'build-outline'} size={25} color={'white'} style={{ paddingRight: 3 }} />
        <Service>{data.serviceInput}</Service>
      </ServiceView>

      <CustomView>
        <Ionicons name={'logo-usd'} size={25} color={'white'} style={{ paddingRight: 3 }} />
        <Price>{data.currencyInput}</Price>
      </CustomView>

      <CustomView>
        <Ionicons name={'calendar-outline'} size={25} color={'white'} style={{ paddingRight: 3 }} />
        <Date>{data.dateInput}</Date>
      </CustomView>

    </Container>

  )
}

