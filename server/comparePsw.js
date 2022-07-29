import { crypto } from "./crypto.js";

export function comparePsw (clientPsw, serverPsw) {
    return clientPsw && crypto(clientPsw) === serverPsw 
     
} 
