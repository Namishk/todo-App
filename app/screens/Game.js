import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, Andika_400Regular} from '@expo-google-fonts/andika';
import AppLoading from 'expo-app-loading';
import colors from './../../Colors';

const Game = ({navigation}) => {

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
			onPress={()=> navigation.navigate('Game1')}
			>
				<Text>Game Unlocked</Text>
			</TouchableOpacity>

			<TouchableOpacity
			style={Styles.gameLocked}
			onPress={()=> navigation.navigate('qrscanner')}
			>
				<Text>Game Locked</Text>
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
