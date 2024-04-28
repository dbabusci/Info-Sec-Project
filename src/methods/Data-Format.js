//Imported Components
import axios from "axios";

//Methods
import { passwordEncrypt, passwordDecrypt } from "./Password-Encryption";
import passwordStrength from "./Password-Strength";

/*
Get all of the data in a site
*/
export async function getDataAdmin() {
    try {
        const response = await axios.get('http://localhost:5255/api/Playlist');
        return response.data;
    }
    catch(error) {
        console.log('Error: ', error);
    }
}

/*
It will be nessacary to convert the data from the c# api to the format of the table
To do this we will need to 
*/
export function changeData(...apiData) {

    let ret = [];

    let id = '';
    let user = '';
    let company = '';
    let username = '';
    let password = '';
    let strength = '';

    for(let i = 0; i < apiData[0].length; ++i){
        id = apiData[0][i]._id;
        user = apiData[0][i].user;
        company = apiData[0][i].websiteName;
        username = apiData[0][i].websiteUsername;
        password = apiData[0][i].websitePassword;
        strength = passwordStrength(apiData[0][i].websitePassword); 
        ret.push({id, user, company, username, password, strength});
    }

    return ret;
}