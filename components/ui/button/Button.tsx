import clsx from 'clsx';
import { FC } from 'react';
import { ButtonProps } from './button.props';
import styles from './Button.module.scss';
import { MyIcon } from '../icon/MyIcon';

export const Button: FC<ButtonProps> = ({
	className,
	variant,
	text,
	icon,
	...props
}): JSX.Element => {
	return (
		<button
			className={clsx(styles.btn, className, {
				[styles.primary]: variant == 'primary',
				[styles.ghost]: variant == 'ghost',
				[styles.withIcon]: !!icon,
			})}
			{...props}
		>
			{icon && <MyIcon icon={icon} />}
			<span>{text}</span>
		</button>
	);
};
