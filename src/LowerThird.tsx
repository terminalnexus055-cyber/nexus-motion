import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const LowerThirdTitle: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Underline draws in over first 15 frames
	const underlineWidth = interpolate(
		frame,
		[0, 14],
		[0, 100],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
	);

	// Text fades in after underline (starting at frame 15)
	const textOpacity = interpolate(
		frame,
		[15, 30],
		[0, 1],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
	);

	const containerStyle: React.CSSProperties = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		padding: '0 80px 60px',
	};

	const textStyle: React.CSSProperties = {
		fontFamily: 'sans-serif',
		fontWeight: 600,
		fontSize: 64,
		color: '#e0e0e0',
		opacity: textOpacity,
	};

	const underlineStyle: React.CSSProperties = {
		height: 4,
		backgroundColor: '#a0a0a0',
		width: `${underlineWidth}%`,
		marginTop: 8,
	};

	return (
		<AbsoluteFill style={{backgroundColor: 'transparent'}}>
			<div style={containerStyle}>
				<div style={textStyle}>Revenue Autopsy</div>
				<div style={underlineStyle} />
			</div>
		</AbsoluteFill>
	);
};