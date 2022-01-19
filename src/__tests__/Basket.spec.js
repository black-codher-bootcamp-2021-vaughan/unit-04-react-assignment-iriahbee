import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Basket from '../components/Basket';
import data from '../models/data.json';

describe("Basket component functionality", () => {
  test('Displays empty basket', () => {
    const emptyBasket = [];
    const expectedLength = emptyBasket.length;
    const basketCount = 0;
    const basketTotal = 0;
    const { getByText } = render(<Basket basket={emptyBasket} addToBasket={null} removeFromBasket={null} basketCount={basketCount} basketTotal={basketTotal} />);
    expect(document.querySelectorAll('.product').length).toBe(expectedLength);
    expect(document.querySelectorAll('.empty').length).toBe(1);
    expect(getByText('Sorry, no items in basket...')).toBeInTheDocument();
  });

  test('Displays populated basket', () => {
    const basket = data.slice(0, 3);
    const expectedLength = basket.length;
    const basketCount = basket.length;
    const basketTotal = basket.reduce((acc, item) => acc + item.trackPrice, 0);
    render(<Basket basket={basket} addToBasket={null} removeFromBasket={null} basketCount={basketCount} basketTotal={basketTotal} />);
    expect(document.querySelectorAll('.product').length).toBe(expectedLength);
    expect(document.querySelectorAll('.empty').length).toBe(0);
  });

  test('calls removeFromBasket prop when clicked', async () => {
    const removeFromBasket = jest.fn();
    const products = data.slice(0, 1).map(item => ({ ...item, inBasket: true }));
    render(<Basket basket={products} removeFromBasket={removeFromBasket} basketCount={products.length} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(removeFromBasket).toHaveBeenCalledTimes(1);
  });
});