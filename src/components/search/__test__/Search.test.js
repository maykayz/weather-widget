import React from 'react'
import { render,screen,fireEvent } from '@testing-library/react'
import ReactTestUtils from "react-dom/test-utils";
import Search from '../Search'

test('Test form submit event to be called only once', () => {
	const city = "Mandalay"

	const onSubmit = jest.fn(e => {
		e.preventDefault();
	})
	const onCityChanged = jest.fn(e => {
		e.preventDefault();
	})

	render(<Search city={city} onSubmit={onSubmit} onCityChanged={onCityChanged}/>)

	const submitButton = screen.getByTestId('search-btn')
	ReactTestUtils.Simulate.submit(submitButton)
	
	expect(onSubmit).toHaveBeenCalledTimes(1)

})

test('Test form submit event not fire', () => {
	const city = "Mandalay"

	const onSubmit = jest.fn(e => {
		e.preventDefault();
	})
	const onCityChanged = jest.fn(e => {
		e.preventDefault();
	})

	render(<Search city={city} onSubmit={onSubmit} onCityChanged={onCityChanged}/>)

	expect(onSubmit).toHaveBeenCalledTimes(0)

})

test('input should detect city and change props', () => {
	let city = "Mandalay"

	const onSubmit = jest.fn(e => {
		e.preventDefault();
	})
	const onCityChanged = jest.fn(e => {
		e.preventDefault();
		city = e.target.value
	})

	render(<Search city={city} onSubmit={onSubmit} onCityChanged={onCityChanged}/>)

	const input = screen.getByTestId('search-input');
	fireEvent.change(input, { target: { value: "yangon"} })
	
	expect(city).toBe("yangon")

})