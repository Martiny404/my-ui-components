interface SelectOption {
	label: string;
	value: string;
}

export interface SelectProps {
	options: SelectOption[];
	placeholder: string;
	setValue: (...args: any[]) => void;
	errorMessage?: string;
	className?: string;
}
