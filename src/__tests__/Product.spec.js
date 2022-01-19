import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from '../components/Product';
import data from '../models/data.json';

describe("Product functionality", () => {
  test('calls addToBasket when clicked', () => {
    const addToBasket = jest.fn();
    const item = data[0];
    render(<Product key={item.trackId} item={item} addToBasket={addToBasket} />);
    fireEvent.click(screen.getByRole('button'));
    expect(addToBasket).toHaveBeenCalledTimes(1)
  });

  test('calls removeFromBasket when clicked', () => {
    const removeFromBasket = jest.fn();
    const item = data[0];
    item.inBasket = true;
    render(<Product key={item.trackId} item={item} removeFromBasket={removeFromBasket} />);
    fireEvent.click(screen.getByRole('button'));
    expect(removeFromBasket).toHaveBeenCalledTimes(1)
  });
});