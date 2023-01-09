import { firebaseAuth } from "fbApp";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import useInput from "hooks/useInput";
import { useState } from "react";

function AccountForm() {
    function handleSubmit(e) {
        //create / login with eamil + password
        e.preventDefault();

        try {
            if (formType === "signUp") {
                createUserWithEmailAndPassword(
                    firebaseAuth,
                    emailInput.value,
                    passwordInput.value
                );
            } else if (formType === "signIn") {
                signInWithEmailAndPassword(
                    firebaseAuth,
                    emailInput.value,
                    passwordInput.value
                );
            }
        } catch (err) {
            setErrorMsg(err.message);
            console.log(errorMsg);
        }
    }

    const emailInput = useInput("");
    const passwordInput = useInput("");

    //form을 submit할시 로그인할지, 회원가입할지를 나타내는 state
    const [formType, setFormType] = useState("signUp");
    //handleSubmit시 firebase에서 던져주는 error catch한 msg
    const [errorMsg, setErrorMsg] = useState("");

    function handleButtonClick(e) {
        const {
            target: { value },
        } = e;
        setFormType(value);
    }

    return (
        <div>
            <h3>do {formType}</h3>
            <button onClick={handleButtonClick} value="signUp">
                SignUp
            </button>
            <button onClick={handleButtonClick} value="signIn">
                SignIn
            </button>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="email">id</label>
                    <input
                        type="text"
                        id="email"
                        name="eamil"
                        placeholder="email"
                        {...emailInput}
                    />
                </p>

                <p>
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        {...passwordInput}
                    />
                </p>
                <div>{errorMsg}</div>
                <input type="submit" />
            </form>
        </div>
    );
}

export default AccountForm;
