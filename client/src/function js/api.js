const HOST = isProduction ? "" :'http://localhost:3000'

export async function request (path, params) {
    return  fetch (`${HOST}/${path}`, params)
}

