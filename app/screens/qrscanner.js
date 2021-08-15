import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import game1Unlocker from '../globalFunctions/gameUnlocker';
import { MaterialIcons } from '@expo/vector-icons';

const qrscnner = (props) => {

	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	useEffect(() => {
		(async () => {
		  const { status } = await BarCodeScanner.requestPermissionsAsync();
		  setHasPermission(status === 'granted');
		})();
	  }, []);
	  
	const handleBarCodeScanned = ({ data }) => {
		setScanned(true);
		game1Unlocker(data);
	  };

	  if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	  }
	  if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	  }
	return(
		<View style = {Styles.container} >
			<Text style={Styles.text}>scanner</Text>
			<View style={Styles.barcodecontainer}>
			<BarCodeScanner
			 onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
			 style={StyleSheet.absoluteFillObject}
			/>
			</View>
				{scanned && <Pressable onPress={() => setScanned(false)} style={Styles.btn} ><MaterialIcons name="qr-code-scanner" size={100} color="black" /><Text style={Styles.text2}>scan again</Text></Pressable>}
				{!scanned && <Text>scan the qr</Text>}
		</View>
		)

}

export default qrscnner;


const Styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingVertical: '10%',
	},

	barcodecontainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 262.5,
		height: 350,
		borderRadius: 20,
		overflow: 'hidden',
		marginVertical: 50
		
	},

	text:{
		fontFamily: 'Andika_400Regular',
		fontSize: 50,
	},
	btn: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	text2:{
		fontFamily:'Andika_400Regular',
		fontSize: 20
	}

})