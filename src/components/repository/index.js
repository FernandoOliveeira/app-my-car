import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Container, View, Title, Text } from './style';

export default function Repository({ data }) {
  return (

    <Container>

      {/* Title */}
      <View>
        <Ionicons name={'build-outline'} size={25} color={'white'} />
        <Title>
          {data.service}
        </Title>

      </View>

      {/* Price */}
      <View>
        <Ionicons name={'logo-usd'} size={20} color={'white'} />
        <Text>
          {String(data.price).replace('.', ',')}
        </Text>
      </View>

      {/* Date */}
      <View>
        <Ionicons name={'calendar-outline'} size={20} color={'white'} />
        <Text>
          {data.date}
        </Text>
      </View>


    </Container>


  )
}

