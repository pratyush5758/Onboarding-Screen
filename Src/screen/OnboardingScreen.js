import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { IMAGES } from '../assets';


const Slider = [
  {
    id: 'Image_1',
    Title: 'WelCome To GO Traveling ',
    Content: 'From popular city beaches to hidden gems, there is an abundance of beautiful beaches across the country. Qatar enjoys pleasant weather all year long and is ideal for sun-seekers and those who want to refuel and rejuvenate',
    Image: IMAGES.TRAVEL,
  },
  {
    id: 'Image_2',
    Title: 'Lets Traveling',
    Content: 'From popular city beaches to hidden gems, there is an abundance of beautiful beaches across the country. Qatar enjoys pleasant weather all year long and is ideal for sun-seekers and those who want to refuel and rejuvenate',
    Image: IMAGES.OFFICE,
  },
  {
    id: 'Image_3',
    Title: 'Navigation',
    Content: 'From popular city beaches to hidden gems, there is an abundance of beautiful beaches across the country. Qatar enjoys pleasant weather all year long and is ideal for sun-seekers and those who want to refuel and rejuvenate',
    Image: IMAGES.WORK,
  },
  {
    id: 'Image_4',
    Title: 'Desination',
    Content: 'From popular city beaches to hidden gems, there is an abundance of beautiful beaches across the country. Qatar enjoys pleasant weather all year long and is ideal for sun-seekers and those who want to refuel and rejuvenate',
    Image: IMAGES.PASSPORT,
  },

]

const Onboarding = () => {

  const { ShownHomePage, SetShownHomePage } = useState(false);

  const buttonLable = (Lable) => {
    return (
      <View style={styles.NextButtom}>
        <Text style={styles.LableBtn}>{Lable}</Text>
      </View>
    )
  }
  return (
    <AppIntroSlider
      data={Slider}
      renderItem={({ item }) => {
        return (
          <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <Image source={item?.Image}
              style={styles.ImgContainer}
              resizeMode="cover"
            />
            <View style={styles.TextCont}>
              <Text style={styles.TitleText}>{item?.Title}</Text>
              <Text style={styles.ContentText}>{item?.Content}</Text>
            </View>
          </View>
        )
      }}
      activeDotStyle={{
        backgroundColor: 'blue',
        width: 30,
      }}
      renderNextButton={() => buttonLable("Skip")}
      renderDoneButton={() => buttonLable("Let's Go")}
    />
  )
}

export default Onboarding

const styles = StyleSheet.create({
  ImgContainer: {
    width: 410,
    height: 450,
  },
  TextCont: {
    marginHorizontal: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  TitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'gray',
    paddingTop: 10,
  },
  ContentText: {
    textAlign: 'justify',
    fontSize: 17,
    fontWeight: '500',
    paddingTop: 30,
  },
  NextButtom: {
    padding: 10,
    backgroundColor: 'blue',
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    marginRight:-20,
    width: 100,
    alignItems: 'center',
  },
  LableBtn: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
})