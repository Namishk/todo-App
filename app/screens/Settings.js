import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



const settings = (props) => {

	return(
		<View style = {Styles.container} >
		<Text>Settings page</Text>
		</View>
		)

}

export default settings;


const Styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}

})
