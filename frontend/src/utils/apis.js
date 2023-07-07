const API_BASE_URL = "http://localhost:3001/backend/"

export const URIS = {
    getCapsules: 'index.php'
}

export const MakeRequest = async (path, body, method = "GET") => {
    try {
        let options = { method };
        if(method === 'GET'){
            let params = new URLSearchParams(body)
            path += '?' + params;        
        }else{
            options.body = body;
        }
        const response = await fetch(API_BASE_URL + path, options);
        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            return { error: true, message: "Failed to fetch" }
        }
    }catch (err) {
        return { error: true, message: err.message };
    }
}

export const APIS = {
    getCapsules : (payload) => MakeRequest(URIS.getCapsules, payload)
}

