/*
Takes in character and returns true or false if it is a digit

Probably exists but trivial to code
*/
function isDigit(character) {
    let check = "1234567890";
    let exists = check.search(character);
    if(exists == -1) {return false;}
    else {return true;}
}

/*
Takes in character and returns true or false if it is a lowercase

Probably exists but trivial to code
*/
function isLowercase(character) {
    let check = "abcdefghijklmnopqrstuvwxyz";
    let exists = check.search(character);
    if(exists == -1) {return false;}
    else {return true;}
}

/*
Takes in character and returns true or false if it is an uppercase

Probably exists but trivial to code
*/
function isUppercase(character) {
    let check = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let exists = check.search(character);
    if(exists == -1) {return false;}
    else {return true;}
}

/*
Takes in character and returns true or false if it is a symbol

Probably exists but trivial to code
*/
function isSymbol(character) {
    let check = "`~!@#$%^&_=|:;<>";
    let exists = check.search(character);
    if(exists == -1) {return false;}
    else {return true;}
}

/*
The Password strength function

Parameter(s) -> the users password in the form of a string

Grades the password on the following criteria
    Has numbers -> 1
    Has lowercase letters -> a
    Has uppercase letters -> A
    Has symbols -> !
    Greater than 10 characters long

WIP Implementation
    The function has a series of flags corresponding to each catergory.
    The function then iterates through each character and determines if it matches 
    a category. If the chararcter matches make the flag true. After the string has no 
    characters left we count up how many flags are true.

    Probably a very messy and unoptimized function maybe fix later, but honestly its not 
    that deep

    Maybe add an enum for the return type
*/
function passwordStrength(password) {
    let boxesTicked = 0;

    /*
    flagArray[0] -> is there a number
    flagArray[1] -> is there a lowercase
    flagArray[2] -> is there an uppercase
    flagArray[3] -> is there a symbol
    flagArray[4] -> is the length > 10
    */
    const flagArray = [false, false, false, false, false];

    for(let i = 0; i < password.length; ++i) {
        switch(true) {
            case isDigit(password[i]):
                flagArray[0] = true;
                break;
            case isLowercase(password[i]):
                flagArray[1] = true;
                break;
            case isUppercase(password[i]):
                flagArray[2] = true;
                break;
            case isSymbol(password[i]):
                flagArray[3] = true;
                break;
            default:
                console.log(password[i]);
                alert("Error: Not symbol, letter, or number????");
        }
    }

    if(password.length > 10) {flagArray[4] = true;}

    for(let i = 0; i < flagArray.length; ++i) {
        if(flagArray[i] == true) {++boxesTicked;}
    }

    switch(boxesTicked){
        case 1:
            return "Bad";
        case 2:
            return "Bad";
        case 3: 
            return "OK";
        case 4: 
            return "OK";
        case 5:
            return "Good";
        default:
            return "No Password Entered"
    }
}

export default passwordStrength;