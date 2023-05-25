import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const MessagesList = ({item, navigation}) => {
  return (
    <TouchableOpacity style={styles.messageContainer} onPress={()=> navigation.navigate('MessageDetails', {item})} >
      <Image style={styles.massageImg} source={{uri: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'}} />

      <View style={styles.messageInfo}>
        <View style={styles.date_name} >
            <Text style={styles.name}>{item.fullname}</Text>
            <Text>{dayjs(item.date).fromNow(true)}</Text>
        </View>
        <Text>{item.last_message}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5,
        marginTop: 15,
        paddingHorizontal: 15,
        paddingVertical: 15

    },
    massageImg: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 15
    },
    messageInfo: {
        flexDirection: 'column',
        flex: 1,
        paddingVertical: 15,
        
    },
    date_name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    name:{
        fontWeight: 'bold',
        marginRight: 5
    }

})

export default MessagesList