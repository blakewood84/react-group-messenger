import './App.css';
import { useEffect } from 'react';

import { doc, collection, onSnapshot } from "firebase/firestore";
import { db } from './firebase' 

function App() {

  useEffect(async () => {
    const unsub = onSnapshot(collection(db, 'test'), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        console.log(change.doc.data())
      })
  });
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
