import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface FieldProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder: string;
	errorMessage?: string | undefined;
	variant?: 'dark' | 'light';
	clearFn?: () => void;
}
