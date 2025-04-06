import type { FormEvent } from 'react';

type Props = {
	name: string;
	onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ name, onSubmit }: Props) => {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				onSubmit?.(event);
			}}
		>
			<h2>アカウント情報</h2>
			<p id=''>{name}</p>
			<div>
				<button type="button">編集する</button>
			</div>
		</form>
	);
};
