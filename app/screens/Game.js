import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



const Game = (props) => {

	return(
		<View style = {Styles.container} >
		<Text>Game page</Text>
		</View>
		)

}

export default Game;


const Styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}

})
