import { useEffect, useState } from "react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { useParams } from "react-router-dom";
import Center from "../components/utils/Center";

interface Props {}

const TodoDetails = ({}: Props) => {
  const [todo, setTodo] = useState<any>(null);
  const { id } = useParams();
  
  useEffect(() => {
    // One-time data fetches
    const getTodo = async () => {
      const docRef = doc(collection(db, "todos"), id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setTodo({
          id: docSnap.id,
          ...docSnap.data(),
        });
      } else {
        console.log("No such document!");
      }
    };
    // Real time update
    const updateTodo = async () => {
      const docRef = doc(collection(db, 'todos'), id);
      const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          setTodo({
            id: docSnapshot.id,
            ...docSnapshot.data(),
          });
        } else {
          console.log('No such document!');
        }
      });
      return () => unsubscribe();
    };
    updateTodo();
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <Center height={"85vh"}>
      <h1>Todo Details</h1>
      <h4>ID: {todo.id}</h4>
      <p>Subject: {todo.subject}</p>
      <p>Completed: {todo.isCompleted ? "Yes" : "No"}</p>
    </Center>
  );
};

export default TodoDetails;
