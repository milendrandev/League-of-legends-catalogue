const baseUrl = 'http://localhost:3030/users';

export default {
    async login(data) {
        const response = await fetch( `${baseUrl}/login`, {
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
