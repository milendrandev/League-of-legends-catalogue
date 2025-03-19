const baseUrl = 'http://localhost:3030/jsonstore/champions';

export default{
    async create(data) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        return result;
    },

    async getChampionById(id) {
        const response = await fetch(`${baseUrl}/${id}`);
        const champion = await response.json();
        return champion;
    },
}