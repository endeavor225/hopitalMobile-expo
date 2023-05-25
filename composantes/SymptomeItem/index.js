import { StyleSheet, Text,TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const SymptomeItem = ({item}) => {
  return (
    <TouchableOpacity >
      <View style={styles.item} >
        <Image source={require('../../assets/image/img.jpg')} style={styles.img} />
        <Text> {item.libelle} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 5
  }
})

export default SymptomeItem

