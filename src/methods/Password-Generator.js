/*
Generates a password that will meet all of the 5 criteria to have a good password
    Will have > 0 numbers
    Will have > 0 lowercase letters
    Will have > 0 uppercase letters
    Will have > 0 symbols
    Will be longer than 10 characters

    Maybe add swapping
*/
function generatePassword() {
    let numbers = "1234567890";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols = "`~!@#$%^&*()_+-={}[]|\:';<>,.?/";

    let randomNumberIndex = Math.floor(Math.random() * numbers.length);
    let randomLowercaseIndex = Math.floor(Math.random() * lowercase.length);
    let randomUppercaseIndex = Math.floor(Math.random() * uppercase.length);
    let randomSymbolIndex = Math.floor(Math.random() * symbols.length);

    let guaranteedNumber = numbers[randomNumberIndex];
    let guaranteedLowercase = lowercase[randomLowercaseIndex];
    let guaranteedUppercase = uppercase[randomUppercaseIndex];
    let guaranteedSymbol = symbols[randomSymbolIndex];

    let ret = guaranteedNumber + guaranteedLowercase + guaranteedUppercase + guaranteedSymbol;

    let retLength = Math.floor(Math.random() + 10) + 5;
    
    for(let i = 0; i < retLength; ++i){
        let characterCategory = Math.floor(Math.random() * 4);
        let index = -1;

        switch(characterCategory){
            case 0:
                //number
                index = Math.floor(Math.random() * numbers.length);
                ret += numbers[index];
                break;
            case 1:
                //lowercase
                index = Math.floor(Math.random() * lowercase.length);
                ret += lowercase[index];
                break;
            case 2:
                //uppercase
                index = Math.floor(Math.random() * uppercase.length);
                ret += uppercase[index];
                break;
            case 3:
                //symbol
                index = Math.floor(Math.random() * symbols.length);
                ret += symbols[index];
                break;
        }
    }

    return ret;
}

export default generatePassword;