import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { MyIconType } from '../icon/MyIcon';

export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	text: string;
	variant: 'primary' | 'ghost';
	icon?: MyIconType;
}
