import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



const Video = (props) => {

	return(
		<View style = {Styles.container} >
		<Text>video page</Text>
		</View>
		)

}

export default Video;


const Styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}

})
