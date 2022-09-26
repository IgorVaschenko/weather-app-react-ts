import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase, set, ref, onValue, remove, update } from 'firebase/database'
import { getDateNow } from 'helpers/getDateNow';

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY_FIREBASE}`,
    authDomain: "weather--auth.firebaseapp.com",
    projectId: "weather--auth",
    storageBucket: "weather--auth.appspot.com",
    messagingSenderId: "238720834252",
    appId: "1:238720834252:web:b15f2d74aa00d304af8069"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const date = getDateNow()

interface ArrayProps {
    todo: string;
    uidd?: number;
    time: string;
}

export const initialUserData = (setIsUserSignedIn: (arg: boolean) => void, setTodos: (args: ArrayProps[]) => void) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            setIsUserSignedIn(true);
            onValue(ref(db, `${auth.currentUser?.uid}`), (snapshot) => {
                setTodos([]);
                const data: ArrayProps = snapshot.val();
                const arr: ArrayProps[] = []
                if (data !== null) {
                    Object.values(data).map(todo => {
                        todo.date === date
                            ? arr.push(todo)
                            : remove(ref(db, `/${auth.currentUser?.uid}/${todo.uidd}`))
                    })
                }
                setTodos([...arr])
            })
        } else {
            setIsUserSignedIn(false)
        }

    })
}
export const setUserData = (todo: string, time: string, date: number, uidd: string) => {
    set(ref(db, `/${auth.currentUser?.uid}/${uidd}`), {
        todo,
        time,
        date,
        uidd: uidd
    })
}
export const deleteUserData = (uidd: string) => {
    remove(ref(db, `/${auth.currentUser?.uid}/${uidd}`))
}

export const updateUserData = (todo: string, time: string, date: number, uidd: string) => {
    update(ref(db, `/${auth.currentUser?.uid}/${uidd}`), {
        todo: todo,
        time,
        date,
        uidd: uidd
    })
}

export const authentication = getAuth(app)
export const db = getDatabase(app)