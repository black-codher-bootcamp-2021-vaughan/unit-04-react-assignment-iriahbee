import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../components/Search';

describe("Search function", () => {
  test("it should search by a search term (link)", () => {
    const term = 'iPhone';
    const search = jest.fn();
    const setTerm = jest.fn();
    render(<Search term={term} search={search} setTerm={setTerm}/>);
    fireEvent.click(screen.getByRole('button'));
    expect(search).toHaveBeenCalledTimes(1);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: "Samsung" } });
    expect(setTerm).toHaveBeenCalledTimes(1);
  });
});