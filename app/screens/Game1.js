import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Video} from 'expo-av';


const Game1 = (props) => {

	return(
		<View style = {Styles.container} >
		<Video
			source={{uri : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
			shouldPlay
			resizeMode="cover"
			useNativeControls
			style={{ width: "100%", height: 300 }}
		/>
		</View>
		)

}

export default Game1;


const Styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}

})
