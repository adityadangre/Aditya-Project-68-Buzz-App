import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Facebook from './screens/Facebook'
import Instagram from './screens/Instagram'
import Twitter from './screens/Twitter'
import LinkedIn from './screens/LinkedIn'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebook, navigationOptions:{
    tabBarLabel: "Facebook",
    tabBarIcon: <Image
    style={{
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderRadius: 100,
    justifyContent: "center",
    }}
    source={{
    uri:
        'https://pyxis.nymag.com/v1/imgs/11d/582/c7b0487c6e26db4f5be6eb679e3620d2ce-facebook.rsquare.w1200.jpg',
    }}
    />
  }},
  Instagram:{screen:Instagram, navigationOptions:{
    tabBarLabel: "Instagram",
    tabBarIcon: <Image
    style={{
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderRadius: 100,
    justifyContent: "center",
    }}
    source={{
    uri:
        'https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ',
    }}
    />
  }},
  Twitter:{screen:Twitter, navigationOptions:{
    tabBarLabel: "Twitter",
    tabBarIcon: <Image
    style={{
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderRadius: 100,
    justifyContent: "center",
    }}
    source={{
    uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWT9GYaWmZWlSHNIdxeeHkZJ1fqQE40NzmEQGXGGa8EbBYWa-ny59GHjMA5Y9enMZ890U&usqp=CAU',
    }}
    />
  }},
  LinkedIn:{screen:LinkedIn, navigationOptions:{
    tabBarLabel: "LinkedIn",
    tabBarIcon: <Image
    style={{
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderRadius: 100,
    justifyContent: "center",
    }}
    source={{
    uri:
        'https://www.jet.org.za/contact/color-of-the-linkedin-logo.jpg/@@images/image',
    }}
    />
  }}
})

const AppContainer = createAppContainer(TabNavigator)