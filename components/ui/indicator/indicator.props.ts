import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IndicatorProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color: 'green' | 'blue' | 'orange';
	variant: 'primary' | 'ghost';
	children: ReactNode;
}
