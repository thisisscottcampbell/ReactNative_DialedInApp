import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ updateTime }) => {
	return (
		<>
			<View style={styles.timingButton}>
				<RoundedButton size={75} title="10" onPress={() => updateTime(10)} />
			</View>
			<View style={styles.timingButton}>
				<RoundedButton size={75} title="15" onPress={() => updateTime(15)} />
			</View>
			<View style={styles.timingButton}>
				<RoundedButton size={75} title="20" onPress={() => updateTime(20)} />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	timingButton: {
		flex: 1,
		alignItems: 'center',
	},
});
