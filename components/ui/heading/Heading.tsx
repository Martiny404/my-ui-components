import { FC } from 'react';
import { HeadingProps } from './heading.props';
import styles from './Heading.module.scss';
import clsx from 'clsx';

export const Heading: FC<HeadingProps> = ({
	tag,
	children,
	className,
	weight = 'bold',
}): JSX.Element => {
	switch (tag) {
		case 'h1':
			return (
				<h1
					className={clsx(styles.h1, className, {
						[styles.bold]: weight == 'bold',
						[styles.regular]: weight == 'regular',
					})}
				>
					{children}
				</h1>
			);
		case 'h2':
			return <h2 className={clsx(styles.h2, className)}>{children}</h2>;
		case 'h3':
			return <h3 className={clsx(styles.h3, className)}>{children}</h3>;
		default:
			return <></>;
	}
};
