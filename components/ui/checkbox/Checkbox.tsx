import { forwardRef } from 'react';
import clsx from 'clsx';
import { CheckboxProps } from './checkbox.props';
import styles from './Checkbox.module.scss';
import CheckboxIcon from '../../../assets/images/checked.svg';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, placeholder, ...props }, ref): JSX.Element => {
		return (
			<div className={clsx(styles.wrapper, className)}>
				<label>
					<input
						className={styles.checkbox}
						ref={ref}
						type='checkbox'
						{...props}
					/>
					<span className={styles.fake}>
						<CheckboxIcon className={styles.icon} width={12} height={12} />
					</span>
					<span className={styles.text}>{placeholder}</span>
				</label>
			</div>
		);
	}
);

Checkbox.displayName = 'Checkbox';
