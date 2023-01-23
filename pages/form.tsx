import type { NextPage } from 'next';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Select } from '../components/ui/select/Select';

const options = [
	{ label: 'Человек', value: 'Human' },
	{ label: 'Машина', value: 'Car' },
	{ label: 'Яблоко', value: 'Apple' },
];

interface FormType {
	select: string;
}

const Home: NextPage = () => {
	const { setValue, handleSubmit, control } = useForm<FormType>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<FormType> = data => {};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{ maxWidth: 1200, padding: '20px', margin: '0 auto' }}
		>
			<Controller
				name='select'
				control={control}
				defaultValue=''
				render={({ field: { value }, fieldState: { error } }) => (
					<Select
						placeholder='Значение'
						options={options}
						initialValue={value}
						setValue={(value: string) =>
							setValue('select', value, {
								shouldValidate: true,
							})
						}
						errorMessage={error?.message}
					/>
				)}
				rules={{
					required: 'Фото обязательное поле',
				}}
			/>

			<button>submit</button>
		</form>
	);
};

export default Home;
