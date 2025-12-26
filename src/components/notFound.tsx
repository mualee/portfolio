


"use client";
import FuzzyText from './FuzzyText';
import { useEffect, useState } from 'react';

export function NotFound() {
	const [textColor, setTextColor] = useState('#000');

	useEffect(() => {
		const updateColor = () => {
			const isDark = document.documentElement.classList.contains('dark');
			setTextColor(isDark ? '#fff' : '#000');
		};
		
		updateColor();
		
		const observer = new MutationObserver(updateColor);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});
		
		return () => observer.disconnect();
	}, []);

	return (
		<section id="404" className="py-20 bg-muted/20 dark:bg-muted/5">
			<div className=" flex flex-col items-center justify-center w-full h-[500px] px-4 md:px-6">
			<div className=" flex flex-col justify-center w-1/2 h-[150px] px-4 md:px-6 ">
				<FuzzyText 
					baseIntensity={0.2} 
					hoverIntensity={0.5} 
					enableHover={true}
					color={textColor}
				>
					404
				</FuzzyText> <br/>
				<FuzzyText 
					baseIntensity={0.2} 
					hoverIntensity={0.5} 
					enableHover={true}
					color={textColor}
				>
					Not Found
				</FuzzyText>
			</div>
			</div>
		</section>
	);
}
