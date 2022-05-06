import { useState } from "react";

// const QnA = () => {
// const [showAnswer, setShowAnswer] = useState<boolean>(false)

// TODO: Replace this with below
//   return (
//     <div className="z-20 select-none shadow-lg absolute right-0 bg-white rounded-md h-76 max-h-[400px]  w-44 max-w-[240px]">
//       <main className="px-4 py-2 space-y-5 divide-y divide-gray-300 text-gray-500 cursor-pointer font-semibold text-sm">
//       <article className="hover:text-gray-700"
//       onClick={()=>setShowAnswer(!showAnswer)}
//       >
//         <h1 className="my-4">Question1</h1>
//       </article>
//       <article className="hover:text-gray-700">
//         <h1 className="my-4">Question2</h1>
//       </article>
//       <article className="hover:text-gray-700">
//         <h1 className="my-4">Question3</h1>
//       </article>
//       <article className="hover:text-gray-700">
//         <h1 className="my-4">Question4</h1>
//       </article>
//       <article className="hover:text-gray-700">
//         <h1 className="my-4">Question5</h1>
//       </article>
//       </main>
//     </div>
//   )
// }

// export default QnA

// type QuestionProps = {
//   id: number;
//   question: string;
//   answer: string;
// }

const QuestionAnswerList = [
  {
    id: 1,
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Answer 2",
  },
  {
    id: 3,
    question: "Question 3",
    answer: "Answer 3",
  },
  {
    id: 4,
    question: "Question 4",
    answer: "Answer 4",
  },
  {
    id: 5,
    question: "Question 5",
    answer: "Answer 5",
  },
];

const QuestionAnswer = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  function showingAnswer() {
    setShowAnswer(!showAnswer);
    const returnedAnswer = QuestionAnswerList.find(
      (ans) => ans.id !== ans.question
    );
    console.log(returnedAnswer);
    if (showAnswer) {
      // go to the answer page?
      // and show the only answer
      returnedAnswer;
    }
  }
  return (
    <>
      <main className="h-76 absolute right-0 z-20 max-h-[400px] w-44 max-w-[240px] select-none rounded-md bg-white shadow-lg">
        <article className="cursor-pointer space-y-5 divide-y divide-gray-300 px-4 py-2 text-sm font-semibold text-gray-500">
          {QuestionAnswerList.map(({ id, question, answer }) => {
            return (
              <div key={id}>
                <h3 className="hover:text-gray-700" onClick={showingAnswer}>
                  {question}
                </h3>
                <p className="h-full w-full">{answer}</p>
              </div>
            );
          })}
        </article>
      </main>
    </>
  );
};

export default QuestionAnswer;
