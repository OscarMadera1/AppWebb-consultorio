import urlBackend from "../config/apiUrl.js";

class APIInvoke {
    async invokeGET(resource, queryParams) {

        queryParams = queryParams || []
        const queryString = queryParams.reduce((last, q, i) => last + `${i === 0 ? '?' : "&"}${q}`, '')

        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `Bearer ${token}`;
        }

        const data = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': bearer
            }
        }
        const url = `${urlBackend.apiUrl}${resource}${queryString}`
        let response = (await (await fetch(url, data)).json())
        return response
    }

    async invokePUT(resource, body) {

        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `Bearer ${token}`;
        }

        const data = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'authorization': bearer
            }
        }
        const url = `${urlBackend.apiUrl}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
    }

    async invokePOST(resource, body) {

        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `Bearer ${token}`;
        }

        const data = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'authorization': bearer
            }
        }
        const url = `${urlBackend.apiUrl}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
    }

    async invokeDELETE(resource) {

        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `Bearer ${token}`;
        }

        const data = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': bearer
            }
        }
        const url = `${urlBackend.apiUrl}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
    }
}

export default new APIInvoke();