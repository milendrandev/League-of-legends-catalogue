import { Navigate } from "react-router";

const baseUrl = 'http://localhost:3030/users';

export default {
    async login(data) {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const result = await response.json();
            throw result;
        }

        const result = await response.json();
        return result;
    },

    async logout(accessToken) {
        if (!accessToken) {
            return;
        }
        
        const response = await fetch(`${baseUrl}/logout`, {
            method: 'GET',
            headers: {
                'X-Authorization': accessToken,
            }
        });

        if (response.status == 204) {
            return;
        }
        const result = await response.json();
        return result;
    },

    async register(data) {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const result = await response.json();
            throw result;
        }

        const result = await response.json();
        return result;
    },

    async getUser(accessToken) {
        const response = await fetch(`${baseUrl}/me`, {
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': accessToken,
            }
        });

        const result = await response.json();
        return result;
    },
}
