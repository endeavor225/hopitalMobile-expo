import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import dashboardStyles from './style'
import { FakeActivity } from '../../fakeData/fakeActivity'
import { FakeSymptome } from '../../fakeData/fakeSymptome'
import ActivityItem from '../../composantes/ActivityItem'
import SymptomeItem from '../../composantes/SymptomeItem'
import { FakeDoctor } from '../../fakeData/fakeDoctor'

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Debut du header */}
     <View style={dashboardStyles.headers}>
      <Text style={dashboardStyles.userName}>Abraham KONE</Text>
      <Image source={require('../../assets/avatar.png')} style={dashboardStyles.userImg}/>
     </View>
      {/* Fin du header */}

      {/* Liste des activités*/}
      <FlatList 
        data={FakeActivity} 
        keyExtractor={item=>item.id} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList} 
        renderItem={({item})=> {
          return (
            <ActivityItem item={item} />
          )
        }}
      />
      {/* Fin de liste des activités */}

      {/* Liste des symptomes */}
      <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold} >Quel symptomes avez-vous ?</Text>
      </View>

      <FlatList 
        data={FakeSymptome} 
        keyExtractor={item=>item.id} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList} 
        renderItem={({item})=> {
          return (
            <SymptomeItem item={item} />
          )
        }}
      />

      {/* Fin de liste des symptomes */}


      {/* Liste des docteurs */}
      <View style={dashboardStyles.title_space_between}>
        <Text style={dashboardStyles.titleBold} >Nos docteur ?</Text>
        <TouchableOpacity>
          <Text style={dashboardStyles.link}>Afficher tous</Text>
        </TouchableOpacity>
      </View>

      <View style={dashboardStyles.doctuerContainer}>
        {
          FakeDoctor.splice(0, 3).map((doctor, index)=>{
            return(
              <TouchableOpacity key={doctor.id} style={dashboardStyles.doctuerCard} >
                <Image source={{uri: `${doctor.img}`}} style={dashboardStyles.doctorImg}/>
                <View style={dashboardStyles.doctorInfo} >
                  <Text  style={dashboardStyles.doctorName}>{doctor.fullname}</Text>
                  <Text  style={dashboardStyles.doctorSpeciality}>{doctor.speciality}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>

    </ScrollView>
  )
}

export default Home