import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';


describe('App', () => {
  it('should render orderbook component', () => {
    const StoreProvider = ({ children }: any) => (<>{children}</>);
    const Orderbook = ({ children }: any) => (<>{children}</>);

    const { container } = render(<App/>);
    screen.debug();
    expect(container?.firstElementChild).toHaveClass('app-container');
  });
});
