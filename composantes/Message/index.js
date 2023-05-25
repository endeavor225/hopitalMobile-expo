import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)

const Message = ({item}) => {

    const isMine = () => {
        return item.user.id === 1
    }

  return (
    <View style={[styles.container,
      {
        backgroundColor: isMine() ? '#695cd4' : 'white',
        alignSelf: isMine() ? 'flex-end' : 'flex-start',
      }
    ]}>
      <Text style={{
        color: isMine() ? 'white' : null,
      }}> {item.message} </Text>
      <Text style={{ color: isMine() ? 'white' : null}}> {dayjs(item.createdAt).fromNow(true)} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 5,
        padding: 10,
        borderRadius: 5,
        maxWidth: '90%'
    }

})

export default Message