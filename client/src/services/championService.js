const baseUrl = 'http://localhost:3030/data/champions';

export default {

    async getChampionById(id) {
        const response = await fetch(`${baseUrl}/${id}`);
        const champion = await response.json();
        return champion;
    },

    async create(championData, accessToken) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify(championData),
        });

        const result = await response.json();
        return result;
    },

    async update(data, championId, ownerId) {
        const response = await fetch(`${baseUrl}/${championId}`, {
            method: 'PATCH',
            headers: {
                'X-Admin': 'Admin',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, _ownerId: ownerId })
        })

        const result = response.json();
        return result;
    },

    async delete(championId, accessToken) {
        const response = await fetch(`${baseUrl}/${championId}`, {
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
