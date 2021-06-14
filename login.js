import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button} from 'react-native';



const Login = props => {

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignUp, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

	return(
            <View style={styles.loginContainer} >
            <Image source={require('./app/component/logo.png')} style={styles.image}/>

            <Text style={styles.header}><b>EAZYBOOK</b></Text>
            <Text style={styles.p0}>Making your booking process ez.</Text>

                <Text style={styles.label1}>Email</Text>
                <TextInput 
                    style={styles.textinput}
                    placeholder="Enter your email"
                    autoFocus 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} />
                <Text style={styles.errorMsg}>{emailError}</Text>
                
                <Text style={styles.label1}>Password</Text>
                <TextInput 
                    style={styles.textinput}
                    placeholder="Enter password"
                    type="password" 
                    required 
                    secureTextEntry
                    value={password} 
                    onChange={e => setPassword(e.target.value)} />
                <Text style={styles.errorMsg}>{passwordError}</Text>

                
                {hasAccount ? (
                    <>
                        <Button style={styles.button} onPress={handleLogin} title="Log In"  />
                        <Text style={styles.p}>Don't have an account?
                            <Text style={styles.p1} onPress={() => setHasAccount(!hasAccount)}><b>  Sign Up</b></Text></Text>
                    </>
                ) : (
                    <>
                    <Button style={styles.button} onPress={handleSignUp} title="Sign Up" />
                    <Text style={styles.p}>Have an account? 
                        <Text style={styles.p1} onPress={() => setHasAccount(!hasAccount)}><b>  Sign In</b></Text></Text>
                    </>
                )}
                
            </View>

	)
}

export default Login;

const styles = StyleSheet.create({ 
    image:{
        width: 120,
        height: 50,
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom:10,
    },

    header:{
        fontSize: 30,
        letterSpacing: 6,
        alignSelf: 'center',
    },

    p0: {
        fontSize:12, 
        marginBottom:40,
        alignSelf: 'center',
        letterSpacing: 1,
    },
    
    
    label1:{
        fontSize: 16,
        font: "Nunito",
    },

    textinput: {
            height: 35,
            padding: 6,
            marginTop: 6,
            fontSize: 14,
            borderWidth: 1,
            borderColor: 'transparent',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: 'white',
    },

    loginContainer:{
        width: 300,
        marginTop: 80,
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: 30,
        borderRadius: 10,
        alignSelf: 'center',
    },

      p:{
        fontSize: 13,
        marginTop: 4,
        alignSelf: 'flex-end',
      },

      p1:{
        color: '#11246D',
        alignContent: 'flex-end',
      },

      errorMsg:{
        fontSize: 14, 
        color: 'red',
        marginBottom: 20,
      },

  
  })
