import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CountDown } from '../../components/CountDown';
import { RoundedButton } from '../../components/RoundedButton';
import { ProgressBar } from 'react-native-paper';
import { Timing } from './Timing';

export const Timer = ({ subject }) => {
	const [time, setTime] = useState(5);
	const [isStarted, setStarted] = useState(false);
	const [progress, setProgress] = useState(1);

	const onProgress = (timeLeft) => setProgress(timeLeft);

	const updateTime = (time) => {
		setTime(time);
		setProgress(1);
		setStarted(false);
	};

	return (
		<View style={styles.container}>
			<View style={styles.countDown}>
				<CountDown isPaused={!isStarted} onProgress={onProgress} mins={time} />
			</View>
			<View style={{ paddingTop: 40 }}>
				<Text style={styles.title}>Focusing On:</Text>
				<Text style={styles.task}>{subject}</Text>
			</View>
			<View style={{ paddingTop: 10 }}>
				<ProgressBar
					color="#5E84E2"
					style={{ height: 10 }}
					progress={progress}
				/>
			</View>
			<View style={styles.buttonWrapper}>
				<Timing updateTime={updateTime} />
			</View>
			<View style={styles.buttonWrapper}>
				{!isStarted ? (
					<RoundedButton
						title="play"
						size={50}
						onPress={() => setStarted(true)}
					/>
				) : (
					<RoundedButton
						title="pause"
						size={50}
						onPress={() => setStarted(false)}
					/>
				)}
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
	buttonWrapper: {
		flex: 0.3,
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
