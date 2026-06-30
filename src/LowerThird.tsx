import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const LowerThird: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Underline draws in over first 15 frames
	const underlineProgress = interpolate(
		frame,
		[0, 15],
		[0, 1],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
	);

	// Text fades in after underline starts, over next 15 frames (frames 15-30)
	const textOpacity = interpolate(
		frame,
		[15, 30],
		[0, 1],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
	);

	const lineColor = '#777'; // desaturated cool tone
	const textColor = '#eee';

	return (
		<AbsoluteFill style={{backgroundColor: 'transparent'}}>
			<div
				style={{
					position: 'absolute',
					bottom: 40,
					left: 40,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
				}}
			>
				<div
					style={{
						fontSize: 48,
						fontWeight: 300,
						color: textColor,
						opacity: textOpacity,
						marginBottom: 4,
						fontFamily: 'sans-serif',
					}}
				>
					Revenue Autopsy
				</div>
				<div
					style={{
						width: '100%',
						height: 2,
						backgroundColor: 'transparent',
						overflow: 'hidden',
					}}
				>
					<div
						style={{
							width: `${underlineProgress * 100}%`,
							height: '100%',
							backgroundColor: lineColor,
						}}
					/>
				</div>
			</div>
		</AbsoluteFill>
	);
};