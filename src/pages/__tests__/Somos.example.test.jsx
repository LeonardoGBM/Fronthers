import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Somos from '../Somos';

const renderSomos = () =>
  render(
    <MemoryRouter>
      <Somos />
    </MemoryRouter>
  );

describe('Somos - smoke test', () => {
  it('renderiza sin errores', () => {
    const { container } = renderSomos();
    expect(container).toBeTruthy();
  });
});

describe('Somos - Hero', () => {
  it('renderiza el título "¿Quiénes Somos?"', () => {
    renderSomos();
    expect(screen.getByRole('heading', { name: /¿Quiénes Somos\?/i })).toBeInTheDocument();
  });

  it('tiene la clase hero-somos', () => {
    const { container } = renderSomos();
    expect(container.querySelector('.hero-somos')).toBeInTheDocument();
  });
});

describe('Somos - Misión / Visión', () => {
  it('tiene dos columnas con títulos "Misión" y "Visión"', () => {
    renderSomos();
    expect(screen.getByRole('heading', { name: /^Misión$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Visión$/i })).toBeInTheDocument();
  });

  it('tiene íconos (elementos <i>)', () => {
    const { container } = renderSomos();
    const section = container.querySelector('.mision-vision-section');
    const icons = section.querySelectorAll('i');
    expect(icons.length).toBeGreaterThan(0);
  });
});

describe('Somos - Valores', () => {
  it('tiene un título de sección "Nuestros Valores"', () => {
    renderSomos();
    expect(screen.getByRole('heading', { name: /Nuestros Valores/i })).toBeInTheDocument();
  });

  it('renderiza 4 tarjetas con data-testid="tarjeta-valor"', () => {
    renderSomos();
    expect(screen.getAllByTestId('tarjeta-valor')).toHaveLength(4);
  });
});

describe('Somos - Equipo', () => {
  it('renderiza 3 tarjetas con data-testid="tarjeta-miembro"', () => {
    renderSomos();
    expect(screen.getAllByTestId('tarjeta-miembro')).toHaveLength(3);
  });

  it('las imágenes del equipo tienen clase rounded-circle', () => {
    renderSomos();
    const tarjetas = screen.getAllByTestId('tarjeta-miembro');
    tarjetas.forEach((tarjeta) => {
      const img = within(tarjeta).getByRole('img');
      expect(img).toHaveClass('rounded-circle');
    });
  });
});

describe('Somos - CTA', () => {
  it('contiene un link que apunta a /contactos', () => {
    renderSomos();
    const link = screen.getByRole('link', { name: /Contáctanos/i });
    expect(link).toHaveAttribute('href', '/contactos');
  });
});
