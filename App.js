import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default function ImageDetails(){
  return(
      <View>
        <Image source={require("./assets/Google_logo.png")} style={{alignSelf:"center"}}/>
      </View>
  );
}