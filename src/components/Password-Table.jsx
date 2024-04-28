//imported components
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';

//Data
import { PasswordTableColumn } from '../data/Password-Table';

//Custom Components
import { changeData } from '../methods/Data-Format';

//style
import '../style/password_table.css';

function PasswordTable() {
    const [user, setUser] = useState(localStorage.getItem("user"));
    const [passwordEntries, setPasswordEntries] = useState([]);
    useEffect(() => {
        if(JSON.parse(user) == "Dominic"){
            const fetchAllData = async () => {
                try {
                    const admResponse = await axios.get("http://localhost:5255/api/Playlist");
                    setPasswordEntries(changeData(admResponse.data));
                }
                catch(error) {
                    console.log('Error: ', error);
                }
            };
            fetchAllData();
        }
        else{
            const fetchData = async () => {
                try {
                    const toAdd = JSON.parse(user);
                    const response = await axios.get("http://localhost:5255/api/Playlist/" + toAdd);
                    setPasswordEntries(changeData(response.data));
                }
                catch(error) {
                    console.log("Error:", error);
                }
            }
            fetchData();
        }
    },[])

    return(
        <div className='table_holder'>
            <DataGrid
                autoHeight
                rows={passwordEntries}
                columns={PasswordTableColumn}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10,10]}
            />
        </div>
    );
}

export default PasswordTable;