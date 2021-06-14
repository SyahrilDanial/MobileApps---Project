import * as React from 'react' ;
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View, TextInput, Button, TouchableOpacity, ImageBackground} from 'react-native';
import styles from "./styles";
import fire from './fire.js';

import ViewAvailable_Test from "./ViewAvailable";
import Facilities_Test from "./Facilities";
import Reserve_Test from "./Reservation";
import Cancel_Test from "./Cancelation";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const handleLogOut = () =>{
	fire.auth().signOut();
};

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<ImageBackground source={require('./assets/bg2.jpg')} style={styles.image}>
			<View style={{ flex: 1, alignItems: 'center' }}>
				<Image source={require('./app/component/logo.png')} style={styles.image1}/>	
				<Text style={{color:'#D16BEC', fontSize:28, marginTop: 15, letterSpacing: 4}}><b>EAZY BOOK</b></Text>
				<Text style={{color:'white', fontSize:14, marginTop: 2}}><b>For convenience booking.</b></Text>

				<View style={styles.fixToText}>
					<View style={styles.self}>
						<Button
							title="Rooms"
							onPress={() => {navigation.navigate('Available Venue')}}
						/>
					</View >
  
					<View style={styles.self}>
						<Button
						title="Facilities"
						onPress={() => {navigation.navigate('Available Facilities')}}
						/>
					</View >
	
					<View style={styles.self}>
						<Button
						title="Reservation"
						onPress={() => {navigation.navigate('Reservation')}}
						/>
					</View >
	
					<View style={styles.self}>
						<Button
						title="Cancelation"
						onPress={() => {navigation.navigate('Cancelation')}}
						/>
					</View >
		  		</View>
				
				
				<TouchableOpacity style={styles.button} onPress={handleLogOut} >
					<Text style={styles.btntext}><b>Log Out</b></Text>
				</TouchableOpacity>
			</View>
			</ImageBackground>
		</View>
	  
	  );
  }

  const Stack = createStackNavigator();

  export default function Hero() {
	return (
		
	  <NavigationContainer>
		  
		{/* <MyTabs /> */}
		<Stack.Navigator 
			initialRouteName="Home" 
			screenOptions={{headerStyle: {
			backgroundColor: 'rgba(24,38,96,0.7)',
		  },
		  	headerTintColor: 'white',
		  	headerTitleStyle: {
			fontWeight: 'bold',
		  },
		}}
		// headerMode= 'none'
		>
		  <Stack.Screen name="Home" component={HomeScreen} />
		  <Stack.Screen name="Available Venue" component={ViewAvailable_Test} />
		  <Stack.Screen name="Available Facilities" component={Facilities_Test} />
		  <Stack.Screen name="Reservation" component={Reserve_Test} />
		  <Stack.Screen name="Cancelation" component={Cancel_Test} />
		</Stack.Navigator>
		
	  </NavigationContainer>

	);
  }



{/*const Hero = ({handleLogOut}) => {

	return(
		<View style={styles.container}>
			<View style={styles.navbar}>
				<View style={styles.item}>
					<Text style={styles.header}><b>Welcome</b></Text>
				</View>

				<View style={styles.item}>
				<TouchableOpacity style={styles.button} onPress={handleLogOut} >
					<Text style={styles.btntext}><b>Log Out</b></Text>
				</TouchableOpacity>
				</View>	
			</View>
			
			<View style={styles.reserve}> 
			<Reservation />
			</View>
			
			<View style={styles.reserve}> 
			<App />
			</View>
			
			{/*<View style={styles.reserve}>
			<View style={styles.fixToText}>
				<View style={styles.self}>
				<Button
					title="Rooms"
					onPress={() => {navigation.navigate('Available Rooms')}}
				/>
				</View >

				<View style={styles.self}>
				<Button
				title="Facilities"
				onPress={() => {navigation.navigate('Available Facilities')}}
				/>
				</View >

				<View style={styles.self}>
				<Button
				title="Reservation"
				onPress={() => {navigation.navigate('Reservation')}}
				/>
				</View >

				<View style={styles.self}>
				<Button
				title="Cancelation"
				onPress={() => {navigation.navigate('Cancelation')}}
				/>
				</View >
				</View>*
			
		</View>
	
	)
}


export default Hero; 

const styles = StyleSheet.create({ 
	container:{
		flexDirection: 'column',
	},

	navbar:{
		backgroundColor: 'rgba(24,38,96,0.9)',
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		padding : 20,
		justifyContent: 'center'
	},

	item: {
		width: '50%'
	},

	header:{
		font: "Nunito",
		fontSize: 25,
		color: '#F2D036'
	},

	button:{
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'center',
		height: 30,
		width: 80,
		backgroundColor: '#D86363',
		borderRadius: 5
	},

	reserve:{
		marginTop: 0,
		backgroundColor: 'rgba(112,103,198,0.2)',
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		padding : 20,
		justifyContent: 'center'
	}
}); */}


const page = StyleSheet.create({
	text: {
	  color: "#000",
	  fontSize: 14,
	  fontWeight: "bold"
	},

	container:{
		flexDirection: 'column',
	},
  });
  
  const typography = StyleSheet.create({
	header: {
	  color: "#f4511e",
	  fontSize: 30,
	  marginBottom: 36
	}
  });
  
  const flattenStyle = StyleSheet.flatten([
	page.text,
	typography.header
  ]);
  