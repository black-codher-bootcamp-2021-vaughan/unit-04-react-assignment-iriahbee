import '@testing-library/jest-dom';
import { readFile } from '../../.autograding/utils.js';

describe("Application structure", () => {
  test("/src/components/Basket.js found", () => {
    expect(readFile("/src/components/Basket.js")).toBeTruthy();
  });

  test("/src/components/BasketCount.js found", () => {
    expect(readFile("/src/components/BasketCount.js")).toBeTruthy();
  });

  test("/src/components/BasketTotal.js found", () => {
    expect(readFile("/src/components/BasketTotal.js")).toBeTruthy();
  });

  test("/src/components/Header.js found", () => {
    expect(readFile("/src/components/Header.js")).toBeTruthy();
  });

  test("/src/components/Product.js found", () => {
    expect(readFile("/src/components/Product.js")).toBeTruthy();
  });

  test("/src/components/ProductList.js found", () => {
    expect(readFile("/src/components/ProductList.js")).toBeTruthy();
  });

  test("/src/components/Search.js found", () => {
    expect(readFile("/src/components/Search.js")).toBeTruthy();
  });

  test("/src/models/data.json found", () => {
    expect(readFile("/src/models/data.json")).toBeTruthy();
  });

  test("/src/pages/About.js found", () => {
    expect(readFile("/src/pages/About.js")).toBeTruthy();
  });
});