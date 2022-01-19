import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasketCount from '../components/BasketCount';

describe("BasketCount functionality", () => {

  test('Displays correct basket count', () => {
    const count = 10;
    const { getByText } = render(<BasketCount basketCount={count} />);
    expect(getByText(`${count} items`)).toBeInTheDocument();
  });
});