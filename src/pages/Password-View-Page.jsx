//Custom Componenets
import PasswordTable from "../components/Password-Table";
import Title from "../components/Title";

//style
import "../style/general_page.css";

function PasswordViewPage() {
    return(
        <div className="view_page_container">
            <Title pageTitle={"Password Table"}/>
            <PasswordTable/>
        </div>
    );
}

export default PasswordViewPage;