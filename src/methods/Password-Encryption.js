import { AES, enc, mode, pad, lib } from "crypto-js";
   
export function generateOptions() {
    //temp
    return { mode: mode.CBC, padding: pad.Pkcs7 };
}

export function passwordEncrypt(pass, key) {
    let test = AES.encrypt(pass.toString(), key.toString());
    console.log(test);
    return test;
}
export function passwordDecrypt(encryptedPassword, key) {
    let decryptedPassword = AES.decrypt(encryptedPassword, key).toString(enc.Utf8);
    return decryptedPassword;
}