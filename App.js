import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';

export default function App() {
	const [subject, setSubject] = useState(null);

	return (
		<View style={styles.container}>
			{subject ? (
				<Timer subject={subject} />
			) : (
				<Focus setSubject={setSubject} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'ios' ? 50 : 100,
		backgroundColor: '#252250',
	},
});
