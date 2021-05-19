import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Instagram extends Component {
    render() {
        return(
            <View>
                <Text style={{ marginTop: 30, textAlign:"center", backgroundColor: "#FEBEBC", fontSize: 50, fontWeight: "bold"}}>Buzz App</Text>

                <Image
                style={{
                width: 150,
                height: 150,
                alignSelf: 'center',
                borderRadius: 100,
                marginTop: 40,
                justifyContent: "center",
                }}
                source={{
                uri:
                    'https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ',
                }}
                />

                <Text style={{textAlign:"center", fontSize: 30, fontWeight: "bold"}}>Instagram</Text>

                <Text style={{ marginTop: 30, textAlign:"center", fontSize: 20, fontWeight: "bold"}}>Instagram (commonly abbreviated to IG or Insta) is an American photo and video sharing social networking service created by Kevin Systrom and Mike Krieger. ... Users can like photos and follow other users to add their content to a personal feed.</Text>
            </View>
        )
    }
}

