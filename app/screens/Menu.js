import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useFonts,
  Andika_400Regular 
} from '@expo-google-fonts/andika';
import AppLoading from 'expo-app-loading';

import colors from './../../Colors.js';

const Menu = ({navigation}) => {

	let [fontsLoaded] = useFonts({
		Andika_400Regular,
	});

	if(!fontsLoaded) {
		return <AppLoading />
	}


	return(

		<View style={Styles.container} >


			<View style={Styles.topSection} >

				<Image style={Styles.logo} source={require('./../../assets/logo.png')} />

			</View>

			<TouchableOpacity
			style={Styles.option} 
			onPress={() => navigation.navigate('Game')}
			>


			</TouchableOpacity>
			<TouchableOpacity 
			style={Styles.option1} 
			onPress={() => navigation.navigate('Video')}
			>


			</TouchableOpacity>


		</View>

		)
}

export default Menu;

const Styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent:'space-evenly',
		backgroundColor: colors.softWhite,
	},

	// topSection: {
	// 	backgroundColor: colors.softMaroon,
	// 	height: '30%',
	// 	width: '100%',
	// 	alignItems: 'center'
	// },

	logo: {
		width: 250,
		height: 250, 
		position:'relative',
		top: '-20%'
	},

	option: {
		position: 'relative',
		top: '-5%', 
		height: '20%',
		width: '80%',
		backgroundColor: colors.persianBlue,
		borderRadius: 20

	},

	option1: {
		position: 'relative',
		top:'-7%',
		height: '20%',
		width: '80%',
		backgroundColor: colors.softYellow,
		borderRadius: 20

	}

});