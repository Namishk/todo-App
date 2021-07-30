import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



const qrscnner = (props) => {

	return(
		<View style = {Styles.container} >
		<Text>qrscnner page</Text>
		</View>
		)

}

export default qrscnner;


const Styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center' 
	}

})