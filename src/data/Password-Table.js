export const PasswordTableColumn = [
    { field: 'id', type: 'string', headerName: 'ID', flex: 1 },
    { field: 'user', headerName: 'User Name', flex: 1 },
    { field: 'company', headerName: 'Company/Site', flex: 1 },
    { field: 'username', headerName: 'Username/Email', flex: 1 },
    { field: 'password', headerName: 'Password', flex: 1 },
    { field: 'strength', headerName: 'Password Strength', flex: 1}, //Maybe make type an enum of Good, Medium, Bad
];

export const DummyPasswordTableData = [
    { id: '1', user: 'Test-User-1', company: 'Amazon', username: 'testuser1@gmail.com', password: 'password1', strength: 'Good'},
    { id: '2', user: 'Test-User-1', company: 'Google', username: 'testuser1@gmail.com', password: 'password2', strength: 'Medium'},
    { id: '3', user: 'Test-User-1', company: 'Facebook', username: 'testuser1@gmail.com', password: 'password3', strength: 'Good'},
    { id: '4', user: 'Test-User-1', company: 'Microsoft', username: 'testuser1@gmail.com', password: 'password4', strength: 'Good'},
    { id: '5', user: 'Test-User-1', company: 'Steam', username: 'testuser1@gmail.com', password: 'password5', strength: 'Good'},
    { id: '6', user: 'Test-User-1', company: 'Youtube', username: 'testuser1@gmail.com', password: 'password6', strength: 'Good'},
    { id: '7', user: 'Test-User-1', company: 'Canvas', username: 'testuser1@gmail.com', password: 'password7' , strength: 'Medium'},
    { id: '8', user: 'Test-User-1', company: 'Flashline', username: 'testuser1@gmail.com', password: 'password8', strength: 'Medium'},
    { id: '9', user: 'Test-User-1', company: 'Github', username: 'testuser1@gmail.com', password: 'password9' , strength: 'Bad'},
    { id: '10', user: 'Test-User-1', company: 'Netflix', username: 'testuser1@gmail.com', password: 'password10', strength: 'Good'},
    { id: '11', user: 'Test-User-1', company: 'Huntington', username: 'testuser1@gmail.com', password: 'password11', strength: 'Good'},
    { id: '12', user: 'Test-User-1', company: 'Chase', username: 'testuser1@gmail.com', password: 'password12', strength: 'Good'},
    { id: '13', user: 'Test-User-1', company: 'Hulu', username: 'testuser1@gmail.com', password: 'password13', strength: 'Bad'},
]