export async function request (path, params) {
    return  fetch (`/${path}`, params)
}

