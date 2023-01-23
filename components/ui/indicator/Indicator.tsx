import { FC } from 'react';
import { IndicatorProps } from './indicator.props';
import styles from './Indicator.module.scss';
import clsx from 'clsx';

export const Indicator: FC<IndicatorProps> = ({
	color,
	variant,
	children,
	className,
	...props
}): JSX.Element => {
	return (
		<div
			className={clsx(styles.indicator, className, {
				[styles.primary]: variant == 'primary',
				[styles.ghost]: variant == 'ghost',
				[styles.green]: color == 'green',
				[styles.blue]: color == 'blue',
				[styles.orange]: color == 'orange',
			})}
			{...props}
		>
			{children}
		</div>
	);
};
