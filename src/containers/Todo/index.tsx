import { useState, useEffect, FormEvent, MouseEvent } from 'react'

import { uid } from 'uid';

import { updateUserData, deleteUserData, setUserData, initialUserData } from 'firebase-config';
import { getTimeNow } from 'helpers/getTimeNow';
import { byTime } from 'helpers/sortByTime';
import { getDateNow } from 'helpers/getDateNow';

import {
    TodoBlock, EventAddForm, AddButton,
    TextInput, TimeInput, EventItem,
    EventTime, EventConfirm, EventDescription,
    EventUpdate, EventDelete, EventList, EventEmpty,
    EventOperations
} from 'containers/Todo/components'

interface ArrayProps {
    todo: string;
    uidd?: number;
    time: string;
}

export const DELAY_WRONG_ADD = 3000

const Todo = () => {

    const [isEmpty, setIsEmpty] = useState(false)
    const [isUserSignedIn, setIsUserSignedIn] = useState(true)
    const [todo, setTodo] = useState<string>('')
    const [time, setTime] = useState(getTimeNow())
    const [todos, setTodos] = useState<ArrayProps[]>([])
    const [isEdit, setIsEdit] = useState(false)
    const [tempUidd, setTempUidd] = useState<string>('')

    const date = getDateNow()

    useEffect(() => {
        initialUserData(setIsUserSignedIn,setTodos)
    }, [])

    const writeTodoDatabase = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const uidd = uid();
        todo && setUserData(todo, time, date, uidd)

        !todo && setIsEmpty(true)
        setTimeout(() => setIsEmpty(false), DELAY_WRONG_ADD)
        todo && setIsEmpty(false)
        setTodo('')
    }

    const handleEditConfirm = () => {
        updateUserData(todo, time, date, tempUidd)
        setIsEdit(false)
        setTodo('')
    }

    const handleUpdate = (e: MouseEvent<HTMLButtonElement>) => {
        setIsEdit(true)
        setTodo(e.currentTarget.getAttribute('data-todo') || '')
        setTime(e.currentTarget.getAttribute('data-time') || '')
        setTempUidd(e.currentTarget.getAttribute('data-uidd') || '')
    }

    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
        deleteUserData(e.currentTarget.getAttribute('data-uidd') || '')
    }

    return (
        <>
            {
                isUserSignedIn
                    ? <>
                        <EventAddForm onSubmit={writeTodoDatabase}>
                            <AddButton>Add</AddButton>
                            <TimeInput
                                type='time'
                                onChange={(e) => setTime(e.target.value)}
                                value={time}
                            />
                            <TextInput
                                onFocus={() => !isEmpty}
                                isEmpty={isEmpty}
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
                        <TodoBlock>
                            {todos.sort(byTime()).length ?
                                <EventList>
                                    {todos.map(todo => (
                                        <EventItem key={todo.uidd}>
                                            <EventTime>{todo.time}</EventTime>
                                            <EventDescription>{todo.todo}</EventDescription>
                                            <EventOperations>
                                                <EventUpdate
                                                    data-todo={todo.todo}
                                                    data-uidd={todo.uidd}
                                                    data-time={todo.time}
                                                    onClick={handleUpdate}
                                                />
                                                <EventDelete
                                                    data-uidd={todo.uidd}
                                                    onClick={handleDelete}
                                                />
                                            </EventOperations>
                                        </EventItem>
                                    ))}
                                </EventList>
                                : <EventEmpty show={!!todos.length}>No events today</EventEmpty>
                            }
                        </TodoBlock>
                    </>
                    : <TodoBlock />
            }
        </>
    );
}

export default Todo;