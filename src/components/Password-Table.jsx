//imported components
import { DataGrid } from '@mui/x-data-grid';

//Data
import { PasswordTableColumn, DummyPasswordTableData } from '../data/Password-Table';

//style
import '../style/password_table.css';

function PasswordTable() {
    return(
        <div className='table_holder'>
            <DataGrid
                autoHeight
                rows={DummyPasswordTableData}
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