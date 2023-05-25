import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-paper'

const MessageInput = () => {
  return (
    <View style={styles.container} >
      <TextInput placeholder='Message ici...' style={styles.input}/>
      <TouchableOpacity>
        <MaterialCommunityIcons name='send' style={styles.send} size={24}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#eee',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      backgroundColor: 'white',
    },
    send: {
      backgroundColor: '#695cd4',
      padding: 10,
      paddingHorizontal: 15,
      paddingVertical: 15,
      alignItems: 'center',
      color: 'white',
    }
})

export default MessageInput

