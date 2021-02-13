import React, { useEffect, useState } from 'react';
import styles from 'styles/animationStyles';
import clsx from 'clsx';

const useStyles = styles;

const Design = ({ animate }) => {
	const classes = useStyles();
	const [played, setPlayed] = useState(false);
	useEffect(() => {
		if (animate) setPlayed(true);
	}, [animate]);
	return (
		<svg
			viewBox='0 0 512 512'
			xmlns='http://www.w3.org/2000/svg'
			className={clsx(classes.svg, classes.design)}
		>
			<g id='Outline'>
				<path
					className={
						animate
							? classes.design1In
							: played
							? classes.design1Out
							: classes.design1Start
					}
					d='m29.657 258.343a8 8 0 0 0 -13.657 5.657v224a8 8 0 0 0 8 8h224a8 8 0 0 0 5.657-13.657zm2.343 221.657v-196.687l196.687 196.687z'
				/>
				<path
					className={
						animate
							? classes.design2In
							: played
							? classes.design2Out
							: classes.design2Start
					}
					d='m72 448h64a8 8 0 0 0 5.657-13.657l-64-64a8 8 0 0 0 -13.657 5.657v64a8 8 0 0 0 8 8zm8-52.686 36.687 36.686h-36.687z'
				/>
				<path
					className={
						animate
							? classes.design3In
							: played
							? classes.design3Out
							: classes.design3Start
					}
					d='m104 48h16v16h-16z'
				/>
				<path
					className={
						animate
							? classes.design3In
							: played
							? classes.design3Out
							: classes.design3Start
					}
					d='m136 48h16v16h-16z'
				/>
				<path
					className={
						animate
							? classes.design3In
							: played
							? classes.design3Out
							: classes.design3Start
					}
					d='m168 48h16v16h-16z'
				/>
				<path
					className={
						animate
							? clsx(classes.design4In, classes.orange)
							: played
							? clsx(classes.design4Out, classes.orange)
							: clsx(classes.design4Start, classes.orange)
					}
					d='m180.756 160.7a7.884 7.884 0 0 0 -4.756 7.3v88a8 8 0 0 0 4.751 7.311l72 32a7.968 7.968 0 0 0 6.5-.006v.006l72-32a8 8 0 0 0 4.749-7.311v-88a7.884 7.884 0 0 0 -4.756-7.3v-.011l-72-32a8.01 8.01 0 0 0 -6.5 0l-72 32zm67.244 114.99-56-24.89v-70.49l56 24.89zm72-24.89-56 24.89v-70.49l56-24.889zm-64-106.046 52.3 23.246-52.3 23.245-52.3-23.245z'
				/>
				<path
					className={
						animate
							? clsx(classes.design5In, classes.orange)
							: played
							? clsx(classes.design5Out, classes.orange)
							: clsx(classes.design5Start, classes.orange)
					}
					d='m248 320h16v40h-16z'
				/>
				<path
					className={
						animate
							? clsx(classes.design5In, classes.orange)
							: played
							? clsx(classes.design5Out, classes.orange)
							: clsx(classes.design5Start, classes.orange)
					}
					d='m248 72h16v40h-16z'
				/>
				<path
					className={
						animate
							? clsx(classes.design5In, classes.orange)
							: played
							? clsx(classes.design5Out, classes.orange)
							: clsx(classes.design5Start, classes.orange)
					}
					d='m128.75 133.438h16v37.125h-16z'
					transform='matrix(.431 -.902 .902 .431 -59.345 209.889)'
				/>
				<path
					className={
						animate
							? clsx(classes.design5In, classes.orange)
							: played
							? clsx(classes.design5Out, classes.orange)
							: clsx(classes.design5Start, classes.orange)
					}
					d='m356.688 144h37.125v16h-37.125z'
					transform='matrix(.902 -.431 .431 .902 -28.87 176.566)'
				/>
				<path
					className={
						animate
							? clsx(classes.design5In, classes.orange)
							: played
							? clsx(classes.design5Out, classes.orange)
							: clsx(classes.design5Start, classes.orange)
					}
					d='m118.188 272h37.125v16h-37.125z'
					transform='matrix(.902 -.431 .431 .902 -107.333 86.288)'
				/>
				<path
					className={
						animate
							? classes.design6In
							: played
							? classes.design6Out
							: classes.design6Start
					}
					d='m488 384h-48v-124.686l47.03-47.03a30.627 30.627 0 1 0 -43.314-43.313l-3.716 3.716v-68.687a8 8 0 0 0 -2.343-5.657l-80-80a8 8 0 0 0 -5.657-2.343h-248a32.036 32.036 0 0 0 -32 32v232h16v-232a16.019 16.019 0 0 1 16-16h240v48a32.036 32.036 0 0 0 32 32h48v76.686l-125.657 125.657a8.008 8.008 0 0 0 -2.188 4.088l-8 40a8 8 0 0 0 9.414 9.414l40-8a8 8 0 0 0 4.088-2.188l82.343-82.343v108.686h-160a8 8 0 0 0 -8 8v24h-40v16h40v24a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8v-64a8 8 0 0 0 -8-8zm-128-304v-36.686l52.686 52.686h-36.686a16.019 16.019 0 0 1 -16-16zm-44.686 240 124.686-124.686 20.686 20.686-124.686 124.686zm150.059-144a14.628 14.628 0 0 1 10.343 24.971l-3.716 3.715-20.686-20.686 3.716-3.716a14.529 14.529 0 0 1 10.343-4.284zm-156.46 160.227 10.86 10.86-13.573 2.713zm171.087 111.773h-208v-48h16v16h16v-16h16v16h16v-16h16v16h16v-16h16v16h16v-16h16v16h16v-16h16v16h16v-16h16z'
				/>
			</g>
		</svg>
	);
};

export default Design;
