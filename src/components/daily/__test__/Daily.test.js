import React from 'react'
import { render,screen } from '@testing-library/react'
import Daily from '../Daily'

test('Should not broken when props was not passed', () => {

	render(<Daily/>)

	const datetime = screen.getByTestId('datetime');
	expect(datetime).toBeInTheDocument();
	expect(datetime).toHaveTextContent('-');

	const image = screen.queryByTestId('image');
	expect(image).not.toBeInTheDocument();

	const temp = screen.getByTestId('temp');
	expect(temp).toBeInTheDocument();
	expect(temp).toHaveTextContent('- °C');
})

test('Should not broken when props was empty ', () => {
	const item = {
	}

	render(<Daily item={item}/>)

	const datetime = screen.getByTestId('datetime');
	expect(datetime).toBeInTheDocument();
	expect(datetime).toHaveTextContent('-');

	const image = screen.queryByTestId('image');
	expect(image).not.toBeInTheDocument();

	const temp = screen.getByTestId('temp');
	expect(temp).toBeInTheDocument();
	expect(temp).toHaveTextContent('- °C');
})

test('should render props properly', () => {
	const item = {
		dt: 1623492594,
		temp: {
			day: 26.5
		},
		weather: [
			{
				icon: '10d'
			}
		]
	}

	render(<Daily item={item}/>)

	const datetime = screen.getByTestId('datetime');
	expect(datetime).toHaveTextContent('Sat');

	const image = screen.getByTestId('image');
	expect(image).toBeInTheDocument();

	const temp = screen.getByTestId('temp');
	expect(temp).toHaveTextContent('26.5 °C');
})