import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const KineticStatCounterOverlay: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const displayedNumber = Math.round(
		interpolate(
			frame,
			[0, 39],
			[0, 200],
			{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
		)
	);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					fontSize: 140,
					fontWeight: 700,
					color: '#e0e0e0',
					fontFamily: 'sans-serif',
				}}
			>
				${displayedNumber}
			</div>
			<div
				style={{
					marginTop: 20,
					fontSize: 32,
					color: '#a0a0a0',
					fontFamily: 'sans-serif',
				}}
			>
				Cost of the missed call
			</div>
		</AbsoluteFill>
	);
};

export default KineticStatCounterOverlay;