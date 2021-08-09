import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, Andika_400Regular} from '@expo-google-fonts/andika';
import AppLoading from 'expo-app-loading';
import colors from './../../Colors';
import {game1, game2} from './../globalFunctions/gameUnlocker';



const Game = ({navigation}) => {

	const opener = (game) => {
		if(game == 'Game1') {
			if(game1) return navigation.navigate('Game1');
			else return navigation.navigate('qrscanner');
		}
		else if(game == 'Game2') {
			if(game2) return navigation.navigate('Game2');
			else return navigation.navigate('qrscanner');
		}
	}

	let [fontsLoaded] = useFonts({
		Andika_400Regular
	});

	if(!fontsLoaded){
		return <AppLoading />
	}


	return(
		
		<View style={Styles.container} >

			<View style={Styles.topSection}>
				<Image style={Styles.logo} source={require('./../../assets/logo.png')} />
			</View>

			<TouchableOpacity
			style={Styles.gameUnlocked}
			onPress={()=> opener('Game1')}
			>
				<Text>Game 1</Text>
			</TouchableOpacity>

			<TouchableOpacity
			style={Styles.gameLocked}
			onPress={()=> opener('Game2')}
			>
				<Text>Game 2</Text>
			</TouchableOpacity>
		</View>

		)	

}

export default Game;


const Styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent:'space-evenly',
		backgroundColor: colors.softWhite,
	},

	logo: {
		width: 250,
		height: 250, 
		position:'relative',
		top: '-20%'
	},

	gameUnlocked: {
		position: 'relative',
		top: '-5%', 
		height: '20%',
		width: '80%',
		backgroundColor: colors.rosered,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',

	},

	gameLocked: {
		position: 'relative',
		top:'-7%',
		height: '20%',
		width: '80%',
		backgroundColor: colors.softGreen,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',

	}

})
