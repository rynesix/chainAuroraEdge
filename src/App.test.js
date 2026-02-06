// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chainAurora title', () => {
    render(<App />);
    const titleElement = screen.getByText(/chainAurora/i);
    expect(titleElement).toBeInTheDocument();
});
