import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const SettingItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container} >
      <Text> {item.libelle} </Text>
      <AntDesign name='arrowright' size={16} color='#695cd4'/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: '#fff',
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 15,
    }
})

export default SettingItem

