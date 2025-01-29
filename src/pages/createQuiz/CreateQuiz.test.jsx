import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { test, describe } from 'vitest';
import userEvent from '@testing-library/user-event';
import React from "react";
import { MemoryRouter } from 'react-router-dom';
import CreateQuiz from './CreateQuiz';

describe('CreateQuiz', () => {
  test.only('should submit form and log the correct values', async () => {
    // Creamos un mock para la función onFinish
    const mockOnFinish = vi.fn(); // Usamos 'vi.fn()' en lugar de 'jest.fn()'

    // Renderizamos el formulario dentro de un MemoryRouter
    render(
      <MemoryRouter>
        <CreateQuiz onFinish={mockOnFinish} />
      </MemoryRouter>
    ); // Asegúrate de pasar 'mockOnFinish' como prop

    // Obtenemos los inputs y el botón
    const questionInput = screen.getByLabelText(/Question/i);
    const answer1Input = screen.getByLabelText(/Answer 1/i);
    const answer2Input = screen.getByLabelText(/Answer 2/i);
    const answer3Input = screen.getByLabelText(/Answer 3/i);
    const answer4Input = screen.getByLabelText(/Answer 4/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    // Simulamos la entrada de datos
    await userEvent.type(questionInput, 'What is React?');
    await userEvent.type(answer1Input, 'A library');
    await userEvent.type(answer2Input, 'A framework');
    await userEvent.type(answer3Input, 'A language');
    await userEvent.type(answer4Input, 'A tool');

    // Simulamos el envío del formulario
    fireEvent.click(submitButton);

    // Esperamos que la función mockOnFinish sea llamada con los datos correctos
    await waitFor(() => {
      expect(mockOnFinish).toHaveBeenCalledWith({
        question: 'What is React?',
        answer_1: 'A library',
        answer_2: 'A framework',
        answer_3: 'A language',
        answer_4: 'A tool',
      });
    });
  });
});
