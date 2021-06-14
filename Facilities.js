import React, { useState } from "react";
import { View } from 'react-native';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ImageBackground} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Room1 from './Rooms/Room1';

const DATA = [
    {
        id: "1001",
        title: "Facilities at WADI BUDI",
    },
    {
        id: "1002",
        title: "Facilities at MAIN AUDI",
    },
    {
        id: "1003",
        title: "Facilities at SHAH MOSQUE (Mini Audi)",
    },

    {
        id: "1004",
        title: "Facilities at SHAHS MOSQUE (Prayer Hall)",
    },

    {
        id: "1005",
        title: "Facilities at KICT (E-Games MY)",
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const Facil = createStackNavigator();

const Facilities_Test = () => {
    return(
            <Facil.Navigator  >
                <Facil.Screen name="Available Facilities"  component={Facilities} />
                <Facil.Screen name="Facilities at WADI BUDI"  component={Room1} />
                <Facil.Screen name="Facilities at MAIN AUDI"  component={Facilities} />
                <Facil.Screen name="Facilities at SHAH MOSQUE (Mini Audi)"  component={Facilities} />
                <Facil.Screen name="Facilities at SHAHS MOSQUE (Prayer Hall)"  component={Facilities} />
                <Facil.Screen name="Facilities at KICT (E-Games MY)"  component={Facilities} />
            </Facil.Navigator>
    );
}

const Facilities = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "rgba(53,62,108,0.8)" : "rgba(145,157,243,0.6)";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <View style={{height:'100%'}}>
        <ImageBackground source={require('./assets/bg2.jpg')} style={styles.image}>
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
        </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20,
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 16,
    },
    
    image: {
        flex: 1,
        width: '100%'
      },
});

export default Facilities;