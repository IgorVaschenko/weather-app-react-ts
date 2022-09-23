import { useState, useEffect, FormEvent } from 'react'

import { getAuth } from "firebase/auth";
import { uid } from 'uid';
import { set, ref, onValue, remove, update } from 'firebase/database'

import { db } from 'firebase-config';
import { getTimeNow } from 'helpers/getTimeNow';
import { byTime } from 'helpers/sortByTime';
import { getDateNow } from 'helpers/getDateNow';

import {
    TodoBlock, EventAddForm, AddEventButton,
    AddButton, TextInput, TimeInput, EventItem,
    EventTime, EventConfirm, EventDescription,
    EventUpdate, EventDelete, EventList, EventEmpty,
    EventOperations
} from 'containers/Todo/components'

interface ArrayProps {
    todo: string;
    uidd?: number;
    time: string;
}

type todoProps = {
    todo: string;
    uidd: number;
    time: string;
    date: number;
}

const Todo = () => {

    const [addEvent, setAddEvent] = useState(false)
    const [isUserSignedIn, setIsUserSignedIn] = useState(true)
    const [todo, setTodo] = useState('')
    const [time, setTime] = useState(getTimeNow())
    const [todos, setTodos] = useState<todoProps[]>([])
    const [isEdit, setIsEdit] = useState(false)
    const [tempUidd, setTempUidd] = useState<number>()

    const auth = getAuth();

    const date = getDateNow()


    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {

                setIsUserSignedIn(true);

                onValue(ref(db, `${auth.currentUser?.uid}`), (snapshot) => {
                    setTodos([]);
                    const data: ArrayProps = snapshot.val();
                    if (data !== null) {
                        Object.values(data).map(todo => {
                            setTodos(oldValues => [...oldValues.filter(value => value.date === date), todo])
                        })
                    }
                })
            } else {
                setIsUserSignedIn(false)
            }
        })
    }, [])

    const writeTodoDatabase = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const uidd = uid();
        set(ref(db, `/${auth.currentUser?.uid}/${uidd}`), {
            todo,
            time,
            date,
            uidd: uidd
        })
        setTodo('')
    }

    const handleEditConfirm = () => {
        update(ref(db, `/${auth.currentUser?.uid}/${tempUidd}`), {
            todo,
            time,
            date,
            uidd: tempUidd
        })
        setIsEdit(false)
        setTodo('')
    }

    const handleUpdate = (todo: ArrayProps) => {
        setIsEdit(true)
        setTodo(todo.todo)
        setTime(todo.time)
        setTempUidd(todo.uidd)
    }

    const handleDelete = (uidd: number) => {
        remove(ref(db, `/${auth.currentUser?.uid}/${uidd}`))
    }

    const handlerAddForm = () => {
        setAddEvent(!addEvent)
    }

    return (
        <>
            {
                isUserSignedIn
                    ? <TodoBlock>
                        {!todos.length && <AddEventButton onClick={handlerAddForm} />}
                        {(addEvent ?? !todos.length) &&
                            <EventAddForm show={addEvent} onSubmit={writeTodoDatabase}>
                                <AddButton>Add</AddButton>
                                <TimeInput
                                    type='time'
                                    onChange={(e) => setTime(e.target.value)}
                                    value={time}
                                />
                                <TextInput
                                    isConfirmButton={isEdit}
                                    type='text'
                                    placeholder='Add todo...'
                                    value={todo}
                                    onChange={(e) => setTodo(e.target.value)}
                                />
                                {isEdit &&
                                    <EventConfirm onClick={handleEditConfirm}>
                                        Сonfirm
                                    </EventConfirm>
                                }
                            </EventAddForm>
                       }
                        {todos.sort(byTime()).length ?
                            <EventList>
                                {todos.map(todo => (
                                    <EventItem key={todo.uidd}>
                                        <EventTime>{todo.time}</EventTime>
                                        <EventDescription>{todo.todo}</EventDescription>
                                        <EventOperations>
                                            <EventUpdate onClick={() => handleUpdate(todo)} />
                                            <EventDelete onClick={() => handleDelete(todo.uidd)} />
                                        </EventOperations>
                                    </EventItem>
                                ))}
                            </EventList>
                            : <EventEmpty show={addEvent}>No events today</EventEmpty>
                        }
                    </TodoBlock>
                    : <TodoBlock />
            }
        </>
    );
}

export default Todo;