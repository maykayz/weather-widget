import React from 'react'
import { render,screen } from '@testing-library/react'
import Loader from '../Loader'

test('should render loader component', () => {
	render(<Loader/>)
	const loaderElement = screen.getByTestId('loader');
	expect(loaderElement).toBeInTheDocument();
})