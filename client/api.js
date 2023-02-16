export async function request (path, params) {
    return  fetch (`/api/${path}`, params)
}

