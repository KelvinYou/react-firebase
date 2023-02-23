import React, { useEffect, useState } from 'react';
import Logout from "../components/auth/Logout";
import Center from "../components/utils/Center";
import { db } from "../config/firebase";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  collection, 
  query,
  onSnapshot,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

interface Props {}

const Home = ({}: Props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [subject, setSubject] = useState("");

  const [todos, setTodos] = useState<{ id: string }[]>([]);
  
  const addSubmit = async () => {
    console.info("add: " + subject);
    if (subject !== "") {
      await addDoc(collection(db, "todos"), {
        subject,
        completed: false,
      });
      setSubject("");
    }
  }

  const updateTodo = async (id: string, age: number) => {
    const userDoc = doc(db, "todos", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteTodo = async (id: string) => {
    const userDoc = doc(db, "todos", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collection(db, "todos"));
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);


  return (
    <Center>
        <div className="input-container">
          <input type="text"
            placeholder='what do you want to do?'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button onClick={ addSubmit }>Add-Todo</button>
        </div>
        {todos.map((todo) => {
        return (
          <div>
            {" "}
            <h1>ID: {todo.id}</h1>
            {/* <h1>Age: {todo.subject}</h1> */}
            <button
              onClick={() => {
                // updatetodo(todo.id, todo.age);
              }}
            >
              {" "}
              Edit
            </button>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              {" "}
              Delete
            </button>
          </div>
        );
      })}
      <Logout />
    </Center>
  )
}

export default Home