import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = ({ setSubject }) => {
	const [temp, setTemp] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>What are you focusing on?</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={{ flex: 1, marginRight: 20 }}
						onChangeText={(text) => setTemp(text)}
					/>
					<RoundedButton
						size={50}
						title="+"
						onPress={() => {
							console.log('ran', temp);
							setSubject(temp);
						}}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	titleContainer: {
		flex: 0.5,
		padding: 16,
		justifyContent: 'center',
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18.15,
	},
	inputContainer: {
		paddingTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
});
