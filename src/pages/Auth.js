import AccountForm from "components/forms/AccountForm";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const { firebaseAuth } = require("fbApp");

function Auth() {
    function handleSocialLoginClick(e) {
        //google login
        const provider = new GoogleAuthProvider();
        signInWithRedirect(firebaseAuth, provider);
    }

    return (
        <div>
            <AccountForm />
            <button onClick={handleSocialLoginClick}>google login</button>
        </div>
    );
}

export default Auth;
