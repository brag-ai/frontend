import { auth } from "../lib/firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

class LoginManager {
    constructor() {
        this.user = null;
    }

    isSignedIn = () => {
        return this.user != null;
    };

    setUser = (user) => {
        this.user = user;
    };

    async signIn(username, password) {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, username, password);
            console.log("user credentials: ", userCredentials);
            this.setUser(userCredentials);
        } catch (err) {
            console.log("error");
            return false;
        }
        return true;
    };

    async register(username, password) {
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, username, password);
            this.setUser(userCredentials);
            console.log("user credentials: ", userCredentials);
            this.user;
        } catch (err) {
            console.log("error");
            return false;
        }
        return true;
    };

    logout = () => {
        this.setUser(null);
        return true;
    };
}

const LoginManagerInstance = new LoginManager();
export default LoginManagerInstance;