import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  

  function handleOnSubmit(newQuestion) {
    setQuestions([...questions, newQuestion])
  }


  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((questions) => setQuestions(questions));
  }, []);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onSubmit={handleOnSubmit} /> : <QuestionList questions={questions} setQuestions={setQuestions} />}
    </main>
  );
}

export default App;
