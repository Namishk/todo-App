import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import game1Unlocker from '../globalFunctions/gameUnlocker';


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
			<BarCodeScanner
			 onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
			 style={StyleSheet.absoluteFillObject}
			/>
				{scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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