import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';
import { expect, test } from 'jest-without-globals';

describe('Footer', () => {
  test('renders the component', () => {
    render(<Footer />);
    expect(screen.getByRole('button', { name: /submit/i })).toBeVisible();
  });

  test('displays error message when email is not entered', () => {
    render(<Footer />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/please enter your email/i)).toBeInTheDocument();
  });

  test('clears error message when email is entered', () => {
    render(<Footer />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    fireEvent.change(
      screen.getByRole('textbox', { name: /join the mailing list/i }),
      {
        target: { value: 'test@example.com' },
      }
    );
    expect(screen.queryByText(/please enter your email/i)).toBeNull();
  });
});
