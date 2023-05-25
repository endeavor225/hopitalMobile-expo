import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ActivityItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem} >
    <Image source={require('../../assets/image//undraw_medicine.png')} style={styles.img}/>
    <Text style={styles.mainText}> {item.mainText} </Text>
    <Text style={styles.subText}> {item.subText} </Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    img: {
        width: 85, 
        height:60, 
        marginBottom:10
    },
    scrollableListItem: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginRight: 15,
        backgroundColor: 'white',
        elevation: 1
    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    subText: {
        marginTop: 10,
        fontSize: 12
    }

})

export default ActivityItem