import React from 'react'
import { View, Text } from 'react-native'

const Person = (props) => {
    return (
        <View>
            <Text>minha marca é {props.marca ? props.marca : "Ferrari"}</Text>
            <Text> uso a gasolina {props.tipogasolina ? props.tipogasolina : "Super pura"}</Text>
            <Text>minha cor é {props.cor ? props.cor :"Vermelhonaaaaa"}</Text>
        </View>
    )
}

export default Person