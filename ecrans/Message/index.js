import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { fakeChats } from '../../fakeData/fakeChat'
import MessagesList from '../../composantes/MessageList'
import styles from './style'

const Message = ({navigation}) => {
  return (
    <FlatList 
      data={fakeChats} 
      keyExtractor={item => item.id}
      style={styles.root} 
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return <MessagesList item={item} navigation={navigation} />
      }}
    />
  )
}

export default Message