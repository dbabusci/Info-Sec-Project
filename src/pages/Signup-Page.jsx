//custom components
import SignupForm from "../components/Signup-Form";
import Title from "../components/Title";

//style
import '../style/general_page.css';
import '../style/signup_form.css';

function SignupPage() {
    return(
        <div className="signup_page_container">
            <div className="signup_title_container">
                <Title pageTitle={"Sign-Up"}/>
            </div>
            <div className="signup_form_container">
                <SignupForm/>
            </div>
        </div>
    );
}

export default SignupPage;