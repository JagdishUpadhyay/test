
export const callApi = (url, method = 'GET') => {

    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
};