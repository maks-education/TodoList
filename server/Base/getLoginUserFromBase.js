export async function getLoginUserFromBase (client) {
    try {
        return client.query('SELECT login FROM reguserdata')
    } catch {
        console.error('error')
    }
} 

