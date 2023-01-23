import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '../components/ui/button/Button';
import { Checkbox } from '../components/ui/checkbox/Checkbox';
import { Field } from '../components/ui/field/Field';
import { Heading } from '../components/ui/heading/Heading';
import { Indicator } from '../components/ui/indicator/Indicator';
import { RadioButton } from '../components/ui/radio-button/RadioButton';
import { Select } from '../components/ui/select/Select';

const Home: NextPage = () => {
	return (
		<div style={{ maxWidth: 1200, padding: '20px', margin: '0 auto' }}>
			<RadioButton placeholder='Text' name='select-some' />
			<br />
			<RadioButton placeholder='Text' name='select-some' />
			<br />
			<hr />
			<br />
			<Checkbox placeholder='Lol' />
			<br />
			<Checkbox placeholder='Lol' />
			<br />
			<hr />
			<br />
			<Button text='hello' variant='primary' />
			<br />
			<Button text='hello' variant='primary' icon='Heart' />
			<br />
			<Button text='Click me' variant='ghost' icon='Check' />
			<br />
			<hr />
			<br />
			<Heading tag='h1'>Hello</Heading>
			<br />
			<Heading tag='h1' weight='regular'>
				Hello
			</Heading>
			<br />
			<hr />
			<br />
			<Indicator color='blue' variant='primary'>
				good
			</Indicator>
			<Indicator color='blue' variant='ghost'>
				good
			</Indicator>

			<Indicator color='orange' variant='primary'>
				asdasd
			</Indicator>

			<br />
			<br />
			<hr />
			<br />
			<Field placeholder='Field' clearFn={() => {}} />
			<br />
			<Field placeholder='Field' variant='dark' clearFn={() => {}} />
			<br />
			<hr />
			<br />
			{/* <Select placeholder='Значение' options={options} setValue={() => {}} /> */}
		</div>
	);
};

export default Home;
