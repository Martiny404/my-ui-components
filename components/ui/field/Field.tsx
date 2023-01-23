import clsx from 'clsx';
import { forwardRef } from 'react';
import { MyIcon } from '../icon/MyIcon';
import styles from './Field.module.scss';
import { FieldProps } from './field.props';

export const Field = forwardRef<HTMLInputElement, FieldProps>(
	(
		{
			placeholder,
			className,
			errorMessage,
			clearFn,
			variant = 'light',
			...props
		},
		ref
	) => {
		return (
			<div className={clsx(styles.wrapper, className)}>
				<label className={styles.label}>
					<input
						className={clsx(styles.field, {
							[styles.light]: variant == 'light',
							[styles.dark]: variant == 'dark',
						})}
						ref={ref}
						type='text'
						{...props}
						placeholder={placeholder}
					/>
				</label>
				{clearFn && (
					<button
						className={clsx(styles.clearBtn, {
							[styles.clearLight]: variant == 'light',
							[styles.clearDark]: variant == 'dark',
						})}
					>
						<MyIcon icon='Cross' />
					</button>
				)}
				{errorMessage && <div className={styles.error}>{errorMessage}</div>}
			</div>
		);
	}
);
