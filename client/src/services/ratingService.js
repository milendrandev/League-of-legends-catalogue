const baseUrl = 'http://localhost:3030/data/ratings';

export default {
    async create(championId, ratingValue, accessToken) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify({ championId, ratingValue }),
        });

        const result = await response.json();
        return result;
    },

    async delete(ratingId, accessToken) {
        const response = await fetch(`${baseUrl}/${ratingId}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': accessToken
            },
        });
        const result = await response.json();
        return result;
    }
}