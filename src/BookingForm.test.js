import React from "react";
import { render, screen } from "@testing-library/react";
import  BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from "./components/Main"; // Assurez-vous que le chemin est correct
import { fetchAPI } from './component/Main';
import { validateTime, validateOccasion } from './validationFunctions'; // Importez vos fonctions de validation





test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Réserver une table");
  expect(headingElement).toBeInTheDocument();
});

// Mockez la fonction fetchAPI pour qu'elle retourne un tableau de temps disponibles
jest.mock('./components/BookingForm', () => ({
  fetchAPI: jest.fn(() => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]),
}));
// Testez la fonction initializeTimes
test('initializeTimes should set available times', () => {
  const initialState = {
    // Initial state si nécessaire
  };

  const newState = initializeTimes(initialState);

  // Assurez-vous que newState contient les horaires disponibles
  expect(newState.availableTimes).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ]);
});
// Mockez la fonction fetchAPI pour qu'elle retourne un tableau de temps disponibles
jest.mock('./components/BookingForm', () => ({
  fetchAPI: jest.fn(() => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]),
}));

// Testez la fonction updateTimes
test('updateTimes should set available times based on selected date', () => {
  const initialState = {
    // Initial state si nécessaire
  };

  const selectedDate = '2023-12-01'; // Date pré-sélectionnée

  const newState = updateTimes(initialState, selectedDate);

  // Assurez-vous que newState contient les horaires disponibles en fonction de la date sélectionnée
  expect(newState.availableTimes).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ]);
});

test('le champ "Date" a l\'attribut "required"', () => {
  render(<BookingForm />);

  const dateInput = screen.getByLabelText('Choisissez la date');
  expect(dateInput).toHaveAttribute('required');
});

test('le champ "Heure" a l\'attribut "required"', () => {
  render(<BookingForm />);

  const timeInput = screen.getByLabelText('Choisissez l\'heure');
  expect(timeInput).toHaveAttribute('required');
});

test('le champ "Occasion" a l\'attribut "required"', () => {
  render(<BookingForm />);

  const occasionInput = screen.getByLabelText('Occasion');
  expect(occasionInput).toHaveAttribute('required');
});

// Vous pouvez également ajouter des tests pour les attributs "min" et "max" des autres champs au besoin.

test('le champ "Nombre d\'invités" a l\'attribut "required" et "min" et "max"', () => {
  render(<BookingForm />);

  const guestsInput = screen.getByLabelText('Nombre d\'invités');
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});


test('validateTime renvoie true pour une heure valide', () => {
  const validTime = '17:00';
  const result = validateTime(validTime);
  expect(result).toBe(true);
});

test('validateTime renvoie false pour une heure invalide', () => {
  const invalidTime = '25:00'; // Heure invalide
  const result = validateTime(invalidTime);
  expect(result).toBe(false);
});

test('validateOccasion renvoie true pour une occasion valide', () => {
  const validOccasion = 'Anniversaire';
  const result = validateOccasion(validOccasion);
  expect(result).toBe(true);
});

test('validateOccasion renvoie false pour une occasion invalide', () => {
  const invalidOccasion = 'Réunion'; // Occasion invalide
  const result = validateOccasion(invalidOccasion);
  expect(result).toBe(false);
});
