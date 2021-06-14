import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },

      navbar:{
        backgroundColor: 'rgba(24,38,96,0.9)',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 20,
        justifyContent: 'center'
      },
    
      item: {
        width: '90%'
      },
    
      button:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 100,
        backgroundColor: '#D86363',
        borderRadius: 3,
        marginTop: 50
      
      },

      reserve:{
        marginTop: 0,
        backgroundColor: 'rgba(112,103,198,0.2)',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding : 20,
        justifyContent: 'center',
        width: '100%'
      },

      center: {
        flex: 1,
        margin: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 36,
        marginBottom: 16
    },
    androidButtonText: {
        color: 'blue',
        fontSize: 20
    },

    fixToText: {
        paddingVertical: 50,
        paddingHorizontal: 30,
        marginTop: 30,
        flexDirection: 'column',
        width: '90%',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },

    self: {
      marginVertical: 5,
      paddingHorizontal: 15,
    },

    image: {
      flex: 1,
      width: '100%'
    },

    image1:{
      width: 100,
      height: 60,
      borderRadius: 5,
      alignSelf: 'center',
      marginTop: 30,
  },
});

export default styles;