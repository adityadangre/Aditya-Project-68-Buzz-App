import React, { Component } from 'react';
import { Text, View , Image } from 'react-native';

export default class Facebook extends Component {
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
                    'https://pyxis.nymag.com/v1/imgs/11d/582/c7b0487c6e26db4f5be6eb679e3620d2ce-facebook.rsquare.w1200.jpg',
                }}
                />

                <Text style={{textAlign:"center", fontSize: 30, fontWeight: "bold"}}>Facebook</Text>

                <Text style={{ marginTop: 30, textAlign:"center", fontSize: 20, fontWeight: "bold"}}>Facebook (sometimes shortened to FB) is a social networking service and website started in February 2004. It was built by Mark Zuckerberg. It is owned by Facebook, Inc. ... Users may make a personal profile, add other users as friends, and send messages. Facebook users must register before using the site.</Text>

            </View>
        )
    }
}