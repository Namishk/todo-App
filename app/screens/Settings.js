import { Andika_400Regular } from '@expo-google-fonts/andika';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from './../../Colors';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const settings = (props) => {

	return(
		<View style = {Styles.container} >
			<Text style={Styles.settings}>
				Settings
			</Text>
			<TouchableOpacity style={Styles.reset}>
				<Entypo name="ccw" size={40} color={colors.persianBlue} />
				<Text style={Styles.resetTxt}>Reset</Text>
			</TouchableOpacity>
			<TouchableOpacity style={Styles.reset}>sta
			<AntDesign name="team" size={40} color={colors.persianBlue} />
				<Text style={Styles.resetTxt}>About</Text>
			</TouchableOpacity>
			<TouchableOpacity style={Styles.reset}>
			<MaterialIcons name="logout" size={40} color={colors.persianBlue} />
				<Text style={Styles.resetTxt}>Logout</Text>
			</TouchableOpacity>
		</View>
		)

}

export default settings;


const Styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '10%',
		paddingHorizontal: 0,
	},

	settings : {
		fontFamily: 'Andika_400Regular',
		fontSize: 50,
	},

	reset: {
		width: '95%',
		maxHeight: '8%',
		borderRadius: 10,
		justifyContent: 'flex-start',
		padding: 10,
		display:'flex',
		flexDirection: 'row',
		// backgroundColor: colors.rosered,
		marginVertical: 15,
	},

	resetTxt: {
		fontSize: 30,
		paddingLeft: 50
	}


})
