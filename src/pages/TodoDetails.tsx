import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

interface TodoDetailsProps {
  id: string;
}

const TodoDetails = ({ id }: TodoDetailsProps) => {
  const [todo, setTodo] = useState<any>(null);

  useEffect(() => {
    console.info("hello")
    // const getTodo1 = async () => {
    //   const docRef = doc(collection(db, "todos"), id);
    //   const docSnap = await getDoc(docRef);
    //   if (docSnap.exists()) {
    //     setTodo({
    //       id: docSnap.id,
    //       ...docSnap.data(),
    //     });
    //   } else {
    //     console.log("No such document!");
    //   }
    // };
    const getTodo = async () => {
        // const todoRef = await getDoc(collection(db, "todos", id));

        // console.log("todoRef: " + todoRef);
        // const todoDoc = await getDoc(todoRef);
        
        // if (todoDoc.exists()) {
        //   return { ...todoDoc.data(), id: todoDoc.id };
        // } else {
        //   console.log("No such document!");
        //   return null;
        // }
      };
    getTodo();
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todo Details</h1>
      <p>ID: {todo.id}</p>
      <p>Subject: {todo.subject}</p>
      <p>Completed: {todo.isCompleted ? "Yes" : "No"}</p>
    </div>
  );
};

export default TodoDetails;
