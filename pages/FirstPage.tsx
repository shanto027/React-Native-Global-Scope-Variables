import React from 'react';
import {
  Button,
  View,
  Text,
SafeAreaView,
StyleSheet,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  
    
} from 'react-native';

const FirstPage = ({ navigation }) => {
  
  global.MyVar ="Global Scope Variables"

    return (
      
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.name}>Our Awesome Services </Text>
          </View>
            <View style={styles.buttonContainer}>

        <TouchableHighlight style={[styles.button, styles.buttonMessage]} >
              <Image style={styles.icon} source={{uri: 'https://image.flaticon.com/icons/png/512/845/845646.png'}}/>
            </TouchableHighlight>
                
            <TouchableHighlight style={[styles.button, styles.buttonMessage]} onPress={()=>navigation.navigate('SecondPage')}>
              <Image style={styles.icon} source={{uri: 'http://bdvromon.com/assets/images/icon/car-rental.png'}}/>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.button, styles.buttonLike]} onPress={()=>navigation.navigate('ThirdPage')}>
              <Image style={styles.icon} source={{uri: 'http://bdvromon.com/assets/images/icon/hotel.png'}}/>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.button, styles.buttonLove]} onPress={()=>navigation.navigate('FourthPage')}>
              <Image style={styles.icon} source={{uri: 'http://bdvromon.com/assets/images/icon/restaurant.png'}}/>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.button, styles.buttonCall]} onPress={()=>navigation.navigate('FifthPage')}>
              <Image style={styles.icon} source={{uri: 'http://bdvromon.com/assets/images/icon/guide.png'}}/>
            </TouchableHighlight>
          </View>
        </View>

  );
};


const styles = StyleSheet.create({
  scrollContainer:{
    flex: 1,
  },
  container:{
    padding:20,
  },
  box: {
    marginTop:10,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2,
    paddingTop:10
  },
  profileImage:{
      width: 200,
      borderRadius:30,
    height:200,
    marginBottom:20,
  },
  name:{
    fontSize:18,
    // marginBottom:20,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:20,
  },

  button: {
    width:50,
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:30,
    margin:10,
    shadowColor: 'black',
    shadowOpacity: .8,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  buttonMessage: {
    backgroundColor: "#00BFFF",
  },
  buttonLike: {
    backgroundColor: "#228B22",
  },
  buttonLove: {
    backgroundColor: "#FF1493",
  },
  buttonCall: {
    backgroundColor: "#40E0D0",
  },
  icon: {
    width:35,
    height:35,
  }
});

export default FirstPage;