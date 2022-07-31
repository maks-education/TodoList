export function checkValidRegisterPassword (password) {
    let specialCharacters = [ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]
    if (password.includes([0-9])){
        return true
    // } else if (password.includes([a-z])) {
    //     return true
    // } else if (password.includes([0-9])){
    //     return true
    } else if (password.includes(specialCharacters)){
        return true    
    } else if (password >= 8 && password <= 26 ) {
        return true
    } else {
        return false
    }
}