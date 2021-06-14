import React, { useState } from "react";
import { View } from 'react-native';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Room1 from './Rooms/Room1';
import Room2 from './Rooms/Room2';
import Room3 from './Rooms/Room3';

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Room 1",
        nav: 'Room1',
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Room 2",
        nav: 'Room2',
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Room 3",
        nav: 'Room3',
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const Tab = createStackNavigator();

const ViewAvailable_Test = () => {
    return(
            <Tab.Navigator  >
                <Tab.Screen name="Available Venue"  component={ViewAvailable} />
                <Tab.Screen name="Room1" component={Room1} />
                <Tab.Screen name="Room2" component={Room2} />
                <Tab.Screen name="Room3" component={Room3} />
            </Tab.Navigator>
    );
}

const ViewAvailable = ({navigation}) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "rgba(53,62,108,0.8)" : "rgba(145,157,243,0.6)";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id), () => {navigation.navigate(item.nav);
                }}
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
        fontSize: 20,
    },
    
    image: {
        flex: 1,
        width: '100%'
      },
});

export default ViewAvailable_Test;