import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Banana from './components/Banana';
import LotsOfGreetings from './components/LotsOfGreetings';
import BlinkApp from './components/BlinkApp';
import LotOfStyles from './components/LotOfStyles';
import FlexDimensionsBasics from './components/FlexDimensionsBasics';
import FixedDimensionsBasics from './components/FixedDimensionsBasics';
import PizzaTranslator from './components/PizzaTranslator';
import ButtonBasics from './components/ButtonBasics';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <>
        <FlexDimensionsBasics />
        <PizzaTranslator />
       
          <ButtonBasics />
        <FixedDimensionsBasics />
        
      

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Primeiro app react!</Text>
          <LotOfStyles />
          <Banana />
          <LotsOfGreetings />
          <BlinkApp />
        </View>
      </>
    );
  }
}
