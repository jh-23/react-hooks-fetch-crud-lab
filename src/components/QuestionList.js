import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( { questions, setQuestions }) {
  console.log(questions);

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  function handleUpdateDropdownAnswer(updatedAnswer) {
    const updatedDropdownAnswer = questions.map((question) => {
      if(question.id === updatedAnswer.id) {
        return updatedAnswer
      } else {
        return question
      }
    })
    setQuestions(updatedDropdownAnswer)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => {
        return <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestion} onHandleUpdatedDropdownAnswer={handleUpdateDropdownAnswer}/>
})}
      </ul>
    </section>
  );
}

export default QuestionList;
