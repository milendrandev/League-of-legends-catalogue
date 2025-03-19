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

        const result = await response.json();
        return result;
    },

    async logout(accessToken) {
        const response = await fetch(`${baseUrl}/logout`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': accessToken,
            }
        });

        if (response.status == 204)
            return console.log("LOGOUT");

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

        const result = await response.json();
        return result;
    },
}
