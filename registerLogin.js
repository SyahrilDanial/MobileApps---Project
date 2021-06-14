import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, Component} from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ImageBackground} from 'react-native';
import Login from './login';
import Hero from './hero.js';
import fire from './fire.js';



const App = () => {
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [hasAccount, setHasAccount] = useState('');

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

	const handleLogin = () =>{
        clearErrors();
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(err => {
				switch(err.code){
					case "auth/invalid-email":
					case "auth/user/disabled":
					case "auth/user-not-found":
						setEmailError(err.message);
						break;
					case "auth/wrong-password":
						setPasswordError(err.message);
						break;
				}
			});
	};

    const handleSignUp = () =>{
        clearErrors();
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch(err => {
				switch(err.code){
					case "auth/email-already-in-use":
					case "auth/invalid-email":
						setEmailError(err.message);
						break;
					case "auth/weak-password":
						setPasswordError(err.message);
						break;
				}
			});
	};

    const handleLogOut = () =>{
		fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
      authListener();
    }, [])



  return (
    <View style={styles.container} >
      <ImageBackground source={require('./assets/bg1.jpg')} style={styles.image}>
        {user ? (
              <Hero handleLogOut={handleLogOut} />

            ) : (
              <Login
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
              />
            )}
        </ImageBackground>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

})






