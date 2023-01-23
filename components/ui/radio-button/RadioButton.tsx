import { forwardRef } from 'react';
import clsx from 'clsx';
import { RadioButtonProps } from './radio-button.props';
import styles from './RadioButton.module.scss';

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
	({ className, placeholder, name, ...props }, ref): JSX.Element => {
		return (
			<div className={clsx(styles.wrapper, className)}>
				<label>
					<input
						className={styles.radio}
						ref={ref}
						type='radio'
						name={name}
						{...props}
					/>
					<span className={styles.fake}></span>
					<span className={styles.text}>{placeholder}</span>
				</label>
			</div>
		);
	}
);

RadioButton.displayName = 'RadioButton';
