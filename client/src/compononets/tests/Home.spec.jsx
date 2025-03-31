import { expect, it, describe } from "vitest";

it('True Test', () => {
    expect(true).toBe(true); // Jest expect
    expect(true).to.be.true; // chai expect
});

describe('Sum', () => {
    it('Should return positive value when adding positive numbers', () => {
        // Arrange
        const expectedResult = 3;

        // Act
        const actualResult = 3

        // Assert
        expect(actualResult).toEqual(expectedResult); // Jest like expect
        expect(actualResult).to.equal(expectedResult); // Chai like expect
    });
});