import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class LinkedIn extends Component {
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
                    'https://www.jet.org.za/contact/color-of-the-linkedin-logo.jpg/@@images/image',
                }}
                />

                <Text style={{textAlign:"center", fontSize: 30, fontWeight: "bold"}}>LinkedIn</Text>

                <Text style={{ marginTop: 30, textAlign:"center", fontSize: 20, fontWeight: "bold"}}>LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. ... LinkedIn allows members (both workers and employers) to create profiles and "connect" to each other in an online social network which may represent real-world professional relationships.</Text>
            </View>
        )
    }
}