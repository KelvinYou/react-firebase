import React, { useEffect, useState } from 'react';
import Logout from "../components/auth/Logout";
import Center from "../components/utils/Center";
import { db } from "../config/firebase";
import {
  collection, 
  addDoc,
} from 'firebase/firestore';

interface Props {}

const Home = ({}: Props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [subject, setSubject] = useState("");

  const addSubmit = async () => {
    console.info("add subject" + subject);
    if (subject !== "") {
      await addDoc(collection(db, "todos"), {
        subject,
        completed: false,
      });
      setSubject("");
    }
  }

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
      <Logout />
    </Center>
  )
}

export default Home