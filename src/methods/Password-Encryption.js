import { AES, enc, mode, pad } from "crypto-js";

export function generateKey(){
    return enc.Utf8.parse("youyougotwhatineeeedbutyousayhesjustafriend");
}

export function generateOptions() {
    //temp
    return { mode: mode.CBC, padding: pad.Pkcs7 };
}

export function passwordEncrypt(password, key) {
    let encryptedPassword = AES.encrypt(password, key);
    console.log(encryptedPassword.toString());
    return encryptedPassword;
}

export function passwordDecrypt(encryptedPassword, key) {
    let decryptedPassword = AES.decrypt(encryptedPassword, key).toString(enc.Utf8);
    return decryptedPassword;
}