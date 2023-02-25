import React, { useEffect, useState } from 'react';
import Logout from "../components/auth/Logout";
import Center from "../components/utils/Center";
import { db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";

import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import ViewAgendaOutlined from "@mui/icons-material/ViewAgendaOutlined";

import { Box, TextField, Button, Grid } from "@mui/material";


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

interface Todo {
  id: string;
  subject: string;
  isCompleted: boolean;
}

const Home = ({}: Props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");

  const [todos, setTodos] = useState<Todo[]>([]);
  
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

  const updateTodo = async (id: string, completed: boolean) => {
    const userDoc = doc(db, "todos", id);
    const newFields = { completed: !completed };
    await updateDoc(userDoc, newFields);
  };

  const deleteTodo = async (id: string) => {
    const userDoc = doc(db, "todos", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const updatedTodos = snapshot.docs.map((doc) => ({
        id: doc.id,
        subject: doc.data().subject as string,
        isCompleted: doc.data().completed as boolean,
      }));
      setTodos(updatedTodos);
    });
    return unsubscribe;
  }, []);


  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        width={"90vw"}
        maxWidth={"400px"}
        boxShadow={2}
        margin={3}
      >
        <TextField 
          error={false}
          fullWidth 
          id="outlined-search" 
          label="New To Do" 
          type="search" 
          placeholder='what do you want to do?'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <Button 
          onClick={ addSubmit }
          fullWidth
          color='primary'
        >
          Add-Todo
        </Button>
      </Box>

      {todos.map((todo) => {
        return (
          <Box
            key={todo.id}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            boxShadow={2}
            margin={3}
            bgcolor="lightgray"
            width={"90vw"}
            maxWidth={"400px"}
          >
            <h1>{todo.subject}</h1>
            <Grid
              container spacing={3}
            >
              <Grid item xs>
                <Button
                  fullWidth
                  color='primary'
                  onClick={ () => navigate(`/todos/${todo.id}`) }
                >
                  <ViewAgendaOutlined />
                </Button>
              </Grid>

              <Grid item xs>

                <Button 
                  onClick={() => {
                    updateTodo(todo.id, todo.isCompleted);
                  }}
                  fullWidth
                  color='primary'
                >
                  <EditIcon />
                </Button>
              </Grid>

              <Grid item xs>

                <Button 
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                  fullWidth
                  color='primary'
                >
                  <DeleteIcon />
                </Button>
              </Grid>
            </Grid>
          </Box>
        )
      })}
    </>
    
  )
}

export default Home