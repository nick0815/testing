import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class App extends Component {
  render() {
      return (
        <ScrollView>
          
          <Text style={{fontSize:96}}>If you like</Text>
         
          <Text style={{fontSize:96}}>Scrolling down</Text>
         
          <Text style={{fontSize:96}}>What's the best</Text>
        
          <Text style={{fontSize:96}}>Framework around?</Text>
         
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => App);

