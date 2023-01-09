import { firebaseAuth } from "fbApp";
import { signOut } from "firebase/auth";

function Home() {
    function handleSignOutclick() {
        signOut(firebaseAuth);
    }
    return (
        <div>
            <button onClick={handleSignOutclick}>signOut</button>
        </div>
    );
}

export default Home;
