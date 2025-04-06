import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, test } from 'bun:test';
import { Form } from './Form';
// test('名前の表示', () => {
// 	render(<Form name="taro" />);
// 	const pTag = document.querySelector('p');
// 	expect(pTag?.innerText).toEqual('taro');
// });

// test('set button text', () => {
// 	document.body.innerHTML = '<button>My button</button>;
// 	const button = document.querySelector('button');
// 	expect(button?.innerText).toEqual('My button');
// });

describe('Formコンポーネント', () => {
	// renderは1回じゃないとテストが落ちる
	beforeAll(() => {
		return render(<Form name="taro" />);
	});

	test('名前の表示', () => {
		expect(screen.getByText('taro')).toBeInTheDocument();
	});

	test('ボタンの表示', () => {
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});
