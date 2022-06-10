import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';
describe('Button', () => {
  it('render component', () => {
    render(<Button disabled={false} />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Button disabled={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Button disabled={false} />);
    expect(screen.getByText(/click/)).toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <Button disabled={false} />
        <Button disabled={false} />
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

    render(<Button disabled={false} onButtonClick={mockHandler} />);

    await userEvent.click(screen.getByText(/click/));
    expect(mockHandler).toBeCalledTimes(1);
  });

  it('button async click', async () => {
    const mockHandler = jest.fn();
    render(
      <Button
        disabled={false}
        onButtonClick={() => setTimeout(mockHandler, 500)}
      />
    );

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

  // it('Bot`s response', async () => {
  //   render(<Form />);
  //   fireEvent.input(screen.getByPlaceholderText('Введите текст...'), {
  //     target: { value: 'TestMessage' },
  //   });
  //   fireEvent.click(screen.getByTestId('submitbutton'));

  //   //Вариант 1
  //   expect(await screen.findByText('Chatbot')).toBeInTheDocument();

  //   //Вариант 2
  //   await waitFor(() =>
  //     expect(screen.getByText('Chatbot')).toBeInTheDocument()
  //   );
  // });
});
