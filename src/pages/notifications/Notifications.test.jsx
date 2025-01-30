import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications"; // Ruta correcta según tu estructura de proyecto
import "@testing-library/jest-dom";
import { describe, test, expect } from '@jest/globals';

describe('Notifications', () => {
  test('renders Notifications component', () => {
    render(<Notifications />);
    
    // Verificamos que los componentes clave se rendericen
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    expect(screen.getByTestId("button-select")).toBeInTheDocument();
    expect(screen.getByTestId("notifications-card")).toBeInTheDocument();
    expect(screen.getByTestId("menu-bar")).toBeInTheDocument();
  });

  test('renders correct content in NotificationsCard', () => {
    render(<Notifications />);
    
    // Comprobamos que el contenido de las tarjetas es correcto
    expect(screen.getByText("1. Event: Relive the History of the Roman Empire 🏛")).toBeInTheDocument();
    expect(screen.getByText("📅 October 10-15")).toBeInTheDocument();
    
    expect(screen.getByText("2. New Timeline: The Cold War: Conflicts and Consequences")).toBeInTheDocument();
    expect(screen.getByText("🎓 Challenge: Discover the post-World War II conflicts and solve the most difficult trivia questions.")).toBeInTheDocument();
    
    expect(screen.getByText("3. New Event: Sonic 3")).toBeInTheDocument();
    expect(screen.getByText("🦔 Learn about the new movie of the most famous blue hedgehog")).toBeInTheDocument();
  });
});
