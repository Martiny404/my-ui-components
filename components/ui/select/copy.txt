import clsx from 'clsx';
import { FC, KeyboardEvent, useState } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { MyIcon } from '../icon/MyIcon';
import styles from './Select.module.scss';
import { SelectProps } from './select.props';

export const Select: FC<SelectProps> = ({
	options,
	errorMessage,
	placeholder,
	setValue,
	className,
}) => {
	const [selectedOption, setSelectedOption] = useState<number>(-1);
	const {
		isShow: isOptionsOpen,
		setIsShow: setIsOptionsOpen,
		ref: selectRef,
	} = useOutsideClick(false);

	const toggleOptions = () => {
		setIsOptionsOpen(!isOptionsOpen);
	};

	const setSelectedThenCloseDropdown = (index: number) => {
		setSelectedOption(index);
		setValue(options[index].value);
		setIsOptionsOpen(false);
	};

	const handleKeyDown = (index: number) => (e: KeyboardEvent) => {
		switch (e.key) {
			case ' ':
			case 'SpaceBar':
			case 'Enter':
				e.preventDefault();
				setSelectedThenCloseDropdown(index);
				break;
			default:
				break;
		}
	};

	const clearValues = () => {
		setSelectedOption(-1);
		setValue('');
	};

	const handleListKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'Escape':
				e.preventDefault();
				setIsOptionsOpen(false);
				break;
			case 'ArrowUp':
				e.preventDefault();
				const upIndex =
					selectedOption - 1 >= 0 ? selectedOption - 1 : options.length - 1;
				setSelectedOption(upIndex);
				setValue(options[upIndex].value);
				break;
			case 'ArrowDown':
				e.preventDefault();
				const downIndex =
					selectedOption == options.length - 1 ? 0 : selectedOption + 1;
				setSelectedOption(downIndex);
				setValue(options[downIndex].value);
				break;
			default:
				break;
		}
	};

	return (
		<div className={clsx(className)} ref={selectRef}>
			<div
				className={clsx(styles.btnBlock, {
					[styles.expanded]: !!isOptionsOpen,
				})}
			>
				<button
					type='button'
					aria-haspopup='listbox'
					aria-expanded={isOptionsOpen}
					onClick={toggleOptions}
					onKeyDown={handleListKeyDown}
					className={styles.btn}
				>
					{selectedOption == -1 ? placeholder : options[selectedOption].label}
				</button>
				<button onClick={clearValues} className={styles.clearBtn}>
					<MyIcon icon='Cross' />
				</button>
			</div>
			<ul
				className={clsx(styles.options, {
					[styles.show]: !!isOptionsOpen,
				})}
				role='listbox'
				aria-activedescendant={
					selectedOption == -1 ? placeholder : options[selectedOption].label
				}
				tabIndex={-1}
				onKeyDown={handleListKeyDown}
			>
				{options.map((option, index) => (
					<li
						id={option.label + option.value}
						role='option'
						aria-selected={selectedOption == index}
						className={clsx({
							[styles.active]: selectedOption == index,
						})}
						tabIndex={0}
						onKeyDown={handleKeyDown(index)}
						key={option.label + option.value}
						onClick={() => {
							setSelectedThenCloseDropdown(index);
						}}
					>
						{option.label}
					</li>
				))}
			</ul>
			{errorMessage && <div className={styles.error}>{errorMessage}</div>}
		</div>
	);
};
