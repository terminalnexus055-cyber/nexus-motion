import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';

const LowerThirdTitle: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	// Underline draws in over first 15 frames
	const underlineWidth = interpolate(
		frame,
		[0, 14],
		[0, 100],
		{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
	);

	// Text fades in after underline (frames 15‑30)
	const textOpacity = interpolate(
		frame,
		[15, 30],
		[0, 1],
		{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
	);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'flex-end',
				alignItems: 'flex-start',
				padding: '5%',
			}}
		>
			{/* Underline */}
			<div
				style={{
					position: 'relative',
					marginBottom: 8,
					height: 2,
					backgroundColor: '#777',
					width: `${underlineWidth}%`,
				}}
			/>
			{/* Text */}
			<div
				style={{
					fontSize: 48,
					fontWeight: 400,
					color: '#ddd',
					opacity: textOpacity,
					fontFamily: 'sans-serif',
				}}
			>
				Revenue Autopsy
			</div>
		</AbsoluteFill>
	);
};

export default LowerThirdTitle;