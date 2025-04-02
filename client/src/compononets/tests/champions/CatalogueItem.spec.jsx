import { it, expect, beforeEach, vi } from 'vitest'
import ReactDOM from 'react-dom/client'
import { act } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CatalogueItem from "../../champion/CatalogueItem";

it('Should display title', () => {

    render(<CatalogueItem />);

    const url = screen.getByText('Hi');
    expect(url).toBeInTheDocument()

});