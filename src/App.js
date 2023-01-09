import { firebaseAuth } from "fbApp";
import { useState, useEffect } from "react";
import WebRouter from "components/WebRouter";

function App() {
    useEffect(() => {
        firebaseAuth.onIdTokenChanged((u) => {
            setUser(u);
            setLoading(false);
        });
    });

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <div>{loading ? <div>loading..</div> : <WebRouter user={user} />}</div>
    );
}

export default App;
