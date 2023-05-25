import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { fakeSetting } from '../../fakeData/fakeSetting'
import SettingItem from '../../composantes/SettingItem'


const Settings = () => {
  return (
    <View style={styles.container} >
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/avatar.png')}
          style={styles.image}
        />

        <View style={styles.userInfo}>
          <Text style={styles.userName}>Abraham KONE</Text>
          <Text style={styles.userEmail}>abrahamkone12@gmail.com</Text>
          <Text>+225 07 08 47 48 72</Text>
        </View>
      </View>
      {/* Fin Header */}

      <FlatList 
        data={fakeSetting}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <SettingItem item={item} />
        }}
      />
    </View>
  )
}

export default Settings