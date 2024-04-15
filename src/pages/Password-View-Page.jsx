//Custom Componenets
import PasswordTable from "../components/Password-Table";
import Title from "../components/Title";
import NewPasswordForm from "../components/New-Password-Form";

//style
import "../style/general_page.css";
import "../style/password_table.css";

function PasswordViewPage() {
    return(
        <div className="view_page_container">
            <div className="table_title_container">
                <Title pageTitle={"Password Table"}/>
            </div>
            <div className="utilities_container">
                <div className="password_table_container">
                    <NewPasswordForm/>
                </div>
                <div className="password_creater_container">
                    <PasswordTable/>
                </div>
            </div>
        </div>
    );
}

export default PasswordViewPage;