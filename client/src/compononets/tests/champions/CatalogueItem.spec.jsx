import { it, expect, beforeEach, vi } from 'vitest'
import ReactDOM from 'react-dom/client'
import { act } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CatalogueItem from "../../champion/CatalogueItem";
import App from '../../../App';

it('Should display title', () => {

    render(<App />);

    const url = screen.getByText('Hi');
    expect(url).toBeInTheDocument()

});