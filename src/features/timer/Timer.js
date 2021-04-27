import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CountDown } from '../../components/CountDown';

export const Timer = ({ subject }) => {
	return (
		<View style={styles.container}>
			<View style={styles.countDown}>
				<CountDown />
			</View>
			<View style={{ paddingTop: 40 }}>
				<Text style={styles.title}>Focusing On:</Text>
				<Text style={styles.task}>{subject}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		color: 'white',
		textAlign: 'center',
	},
	task: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	countDown: {
		flex: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
