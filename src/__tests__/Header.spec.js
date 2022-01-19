import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe("Header functionality", () => {
  test('Displays header', () => {
    const count = 0;
    render(<BrowserRouter>
      <Route exact path="/" render={() => (
        <Header basketCount={count} />
      )} />
    </BrowserRouter>);
    expect(document.querySelectorAll("a").length).toBeGreaterThanOrEqual(3);
  });
});