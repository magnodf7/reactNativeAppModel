import React from 'react'
import { View, Text } from 'react-native'

const Car = (props) => {
    return (
        <View>
            {props.name && <Text>O carro {props.name}</Text>}
            {!props.name && <Text>Carro não identificado</Text>}
            {props.name && props.name == "Porsche" && <Text>Tu e foda</Text>}
        </View>
    )
}

export default Car
