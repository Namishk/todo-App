import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import {enableScreens} from 'react-native-screens';

enableScreens();

import { useFonts,
  Andika_400Regular 
} from '@expo-google-fonts/andika';
import AppLoading from 'expo-app-loading';
import colors from './../../Colors';

const Login = ({ navigation }) => {

	let [fontsLoaded] = useFonts({
		Andika_400Regular,
	});
	
	const [text, onChangeText] = React.useState('');
	const [password, onChangePassword] = React.useState('');


	const login = (uName, pass) =>{
		if (uName=='namish' && pass =='namish') {
			navigation.navigate('mainScreen');
			return(console.log('login Successfull'));
		}
		
	}

	if(!fontsLoaded) {
		return <AppLoading />
	}

	return(

		<View style={Styles.container}>
				<Image style={Styles.logo} source={require('./../../assets/logo.png')} />
				<View style={ Styles.inputContainer }>
					<Text style={ Styles.text }>Username</Text>
					<TextInput style={ Styles.input }
					onChangeText={onChangeText}
					value={text}
					placeholder='Username'
					/>
				</View>
				<View style={ Styles.passwordContainer } >
					<Text style={ Styles.text }>Password</Text>

					<TextInput style={ Styles.input }
					onChangeText={onChangePassword}
					value={password}
					placeholder='Password'
					secureTextEntry={true}
					/>
				</View>
				<TouchableOpacity onPress={() =>  login(text, password)} style={Styles.button}>
					<View style={Styles.btntxt}>
						<Text style={Styles.logIn}>LOG IN</Text>
					</View>
				</TouchableOpacity>
				
				<TouchableOpacity style={Styles.gbutton}>
					<View style={Styles.btntxt}>
						<Text style={Styles.glogIn}>LOG IN WITH GOOGLE</Text>
					</View>
				</TouchableOpacity>

		</View>

		);
};

export default Login;

const Styles = StyleSheet.create({

	container: {
		flex: 1,
		position:'relative',
		alignItems: 'center',
		backgroundColor: colors.white,
	},

	
	inputContainer: {
		height: "auto",
		width: '100%',
		marginTop: '10%',
		alignItems: 'center',
		// backgroundColor: "#343434",
	},


	text: {
		fontFamily: 'Andika_400Regular',
		fontSize: 27,
		fontWeight: '800',
		marginLeft: '10%',
		marginBottom: -10, 
		alignSelf: 'flex-start', 
	},

	input: {
		
		fontSize: 25,
		padding: 10,
		fontWeight: '500',
		borderWidth: 2,
		width: 300,
		borderRadius: 15,
		backgroundColor: '#fff',

	},

	logo: {
		zIndex: -1,
		marginTop:'20%',
		width: 250,
		height: 200, 

	},

	passwordContainer: {
		
		height: 50,
		width: '100%',
		marginTop: '5%',
		alignItems: 'center',
	
	},

	button: {
		width: '70%',
		height: '6%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 70,
		backgroundColor: '#E89FB3',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center', 

	},

	gbutton: {
		width: '70%',
		height: '6%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 30,
		backgroundColor: colors.softGreen,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center', 

	},

	logIn:{
		fontSize: 30,
		fontFamily: 'Andika_400Regular',
		color:colors.softWhite,
	},

	glogIn: {
		fontSize: 23,
		fontFamily: 'Andika_400Regular',
		color:colors.softWhite,
	}

});
