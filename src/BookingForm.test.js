import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import { initializeTimes, updateTimes } from "./BookingForm";


test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
test('initializeTimes initializes times correctly', () => {
    const initialTimes = initializeTimes(); // Appelez la fonction pour obtenir les valeurs initiales

    // Vérifiez que les valeurs initiales sont correctes
    expect(initialTimes).toEqual(['10:00 AM', '12:00 PM', '2:00 PM']);
});

test('updateTimes returns the same times when provided with a date', () => {
    const times = ['10:00 AM', '12:00 PM', '2:00 PM'];
    const updatedTimes = updateTimes(times, '2023-09-18'); // Appelez la fonction avec des heures et une date

    // Vérifiez que les heures sont inchangées
    expect(updatedTimes).toEqual(times);
});

