import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Room1 = () => {
    return (
        <View>
            
            <Text style={styles.title}>Room 1 Details</Text>
        </View>
    )
}

export default Room1

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
    },

})
