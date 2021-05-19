import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Twitter extends Component {
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
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWT9GYaWmZWlSHNIdxeeHkZJ1fqQE40NzmEQGXGGa8EbBYWa-ny59GHjMA5Y9enMZ890U&usqp=CAU',
                }}
                />

                <Text style={{textAlign:"center", fontSize: 30, fontWeight: "bold"}}>Twitter</Text>

                <Text style={{ marginTop: 30, textAlign:"center", fontSize: 20, fontWeight: "bold"}}>Twitter is a social networking and microblogging service. Users use mobile phones or computers to send and to read messages, called "tweets". For years, tweets could be up to 140 characters long, then doubled in November 2017 to 280 characters. ... All users can send and receive tweets using the Twitter website.</Text>
            </View>
        )
    }
}