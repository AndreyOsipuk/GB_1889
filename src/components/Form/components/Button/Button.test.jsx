import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';
describe('Button', () => {
  it('render component', () => {
    render(<Button />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Button />);
    expect(screen.getByText(/click/)).toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <Button />
        <Button />
      </>
    );

    expect(screen.queryAllByRole('button').length).toBe(2);
  });

  it('button is disabled', () => {
    render(<Button disabled />);

    expect(screen.getByText('click')).toBeDisabled();
  });

  // it('button have style background red', () => {
  //   render(<Button />);

  //   expect(screen.getByText('click')).toHaveStyle({ backgroundColor: 'red' });
  // });

  it('button click with userEvent', async () => {
    const mockHandler = jest.fn();

    render(<Button onButtonClick={mockHandler} />);
    await userEvent.click(screen.getByText(/click/));
    expect(mockHandler).toBeCalledTimes(1);
  });

  it('button async click', async () => {
    const mockHandler = jest.fn();
    render(<Button onButtonClick={() => setTimeout(mockHandler, 1000)} />);

    await userEvent.click(screen.getByText(/click/));

    await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
      timeout: 1100,
    });
  });

  it('test exapmle', async () => {
    const onChange = jest.fn();
    render(<input type="checkbox" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    await userEvent.dblClick(checkbox);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(checkbox).not.toBeChecked();
  });
});
