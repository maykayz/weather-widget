import React from 'react'
import { render,screen } from '@testing-library/react'
import Current from '../Current'

//image,description,speed,sunrise,sunset,temp
test('Should not be broken when props was not passed', () => {

	render(<Current/>)

	const description = screen.getByTestId('description');
	expect(description).toBeInTheDocument();
	expect(description).toHaveTextContent('-');

	const image = screen.queryByTestId('image');
	expect(image).not.toBeInTheDocument();

	const speed = screen.getByTestId('speed');
	expect(speed).toBeInTheDocument();
	expect(speed).toHaveTextContent('Wind: - m/s');

	const sunrise = screen.getByTestId('sunrise');
	expect(sunrise).toBeInTheDocument();
	expect(sunrise).toHaveTextContent('Sunrise: - AM');

	const sunset = screen.getByTestId('sunset');
	expect(sunset).toBeInTheDocument();
	expect(sunset).toHaveTextContent('Sunset: - PM');

	const temp = screen.getByTestId('temp');
	expect(temp).toBeInTheDocument();
	expect(temp).toHaveTextContent('- °C');
})

test('Should not be broken when props is an empty object', () => {

	const item = {}
	
	render(<Current current={item}/>)

	const description = screen.getByTestId('description');
	expect(description).toBeInTheDocument();
	expect(description).toHaveTextContent('-');

	const image = screen.queryByTestId('image');
	expect(image).not.toBeInTheDocument();

	const speed = screen.getByTestId('speed');
	expect(speed).toBeInTheDocument();
	expect(speed).toHaveTextContent('Wind: - m/s');

	const sunrise = screen.getByTestId('sunrise');
	expect(sunrise).toBeInTheDocument();
	expect(sunrise).toHaveTextContent('Sunrise: - AM');

	const sunset = screen.getByTestId('sunset');
	expect(sunset).toBeInTheDocument();
	expect(sunset).toHaveTextContent('Sunset: - PM');

	const temp = screen.getByTestId('temp');
	expect(temp).toBeInTheDocument();
	expect(temp).toHaveTextContent('- °C');
})

test('Should render properly when props is present', () => {

	const item = {
		main: {
			temp: 26.5
		},
		weather: [
			{
				icon: '10d',
				description: 'overcast clouds'
			}
		],
		wind: {
			speed: 2.65
		},
		sys: {
			sunrise: 1623452689,
			sunset: 1623497520
		}
	}
	
	render(<Current current={item}/>)

	const description = screen.getByTestId('description');
	expect(description).toBeInTheDocument();
	expect(description).toHaveTextContent('overcast clouds');

	const image = screen.queryByTestId('image');
	expect(image).toBeInTheDocument();

	const speed = screen.getByTestId('speed');
	expect(speed).toBeInTheDocument();
	expect(speed).toHaveTextContent('Wind: 2.65 m/s');

	const sunrise = screen.getByTestId('sunrise');
	expect(sunrise).toBeInTheDocument();
	expect(sunrise).toHaveTextContent('Sunrise: 05:06 AM');

	const sunset = screen.getByTestId('sunset');
	expect(sunset).toBeInTheDocument();
	expect(sunset).toHaveTextContent('Sunset: 18:06 PM');

	const temp = screen.getByTestId('temp');
	expect(temp).toBeInTheDocument();
	expect(temp).toHaveTextContent('26.5 °C');
})