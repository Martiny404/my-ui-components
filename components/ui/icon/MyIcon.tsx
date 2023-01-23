import { FC } from 'react';
import Cross from '../../../assets/images/cross.svg';
import Check from '../../../assets/images/checked.svg';
import Heart from '../../../assets/images/heart.svg';

const icons = {
	Cross: Cross,
	Check: Check,
	Heart: Heart,
};

export type MyIconType = keyof typeof icons;

export const MyIcon: FC<{ icon: MyIconType }> = ({ icon }) => {
	const IconComponent = icons[icon];

	return <IconComponent />;
};
