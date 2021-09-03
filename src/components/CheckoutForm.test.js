import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText(/first name:/i);
    expect(firstName).toBeInTheDocument();
    userEvent.type(firstName, 'Diana');

    const lastName = screen.getByLabelText(/last name:/i);
    expect(lastName).toBeInTheDocument();
    userEvent.type(lastName, 'Cat');

    const address = screen.getByLabelText(/address:/i)
    expect(address).toBeInTheDocument();
    userEvent.type(address, '2 Southwood Ct.');

    const city = screen.getByLabelText(/city:/i)
    expect(city).toBeInTheDocument();
    userEvent.type(city, 'Oakland');

    const state = screen.getByLabelText(/state:/i)
    expect(state).toBeInTheDocument();
    userEvent.type(state, 'CA');

    const zip = screen.getByLabelText(/zip:/i)
    expect(zip).toBeInTheDocument();
    userEvent.type(zip, '94611');

    const successMessage = screen.queryByTestId('successMessage')
    expect(successMessage).not.toBeInTheDocument();

    const checkout = screen.getByRole('button');
    expect(checkout).toHaveTextContent(/Checkout/i);
    expect(checkout).toBeInTheDocument();
    userEvent.click(checkout);

    await waitFor(() => {
        const successMessageDisplay = screen.queryByTestId('successMessage')
        expect(successMessageDisplay).toBeInTheDocument();

        const firstAndLastDisplay = screen.queryByText('Diana Cat')
        expect(firstAndLastDisplay).toBeInTheDocument();

        const addressDisplay = screen.queryByText('2 Southwood Ct.')
        expect(addressDisplay).toBeInTheDocument();

        const addressTwoDisplay = screen.queryByText('Oakland, CA 94611')
        expect(addressTwoDisplay).toBeInTheDocument();
    })


});
