import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const minsToMills = (num) => num * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const CountDown = ({ min = 20, isPaused }) => {
	const interval = useRef(null);

	const [time, setTime] = useState(minsToMills(min));

	const minutes = Math.floor(time / 1000 / 60) % 60;
	const seconds = Math.floor(time / 1000) % 60;

	const timer = () => {
		setTime((time) => {
			if (time === 0) return time;
			const timeLeft = time - 1000;

			return timeLeft;
		});
	};

	useEffect(() => {
		if (isPaused) return;
		interval.current = setInterval(timer, 1000);

		return () => clearInterval(interval.current);
	}, [isPaused]);

	return (
		<Text style={styles.text}>
			{formatTime(minutes)}:{formatTime(seconds)}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 40,
		fontWeight: 'bold',
		color: 'white',
		padding: 40,
		spacing: 30,
		backgroundColor: 'rgba(94, 132, 226, 0.3)',
	},
});
