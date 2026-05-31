   'use strict';


   let numberInQuestionItem;
   let numberInQuestionItemUserAnswer;
   let numberInQuestionItemCorrectAnswer;
   let targetLanguage = "English";
   const numberInQuestionBox = document.querySelector("#number-in-question");
   const userInputBox = document.querySelector("#input-area");

   numberInQuestionItem = numberDictionary[Math.floor(Math.random() * numberDictionary.length)];
   console.log(numberInQuestionItem.question);
   numberInQuestionItemUserAnswer = numberInQuestionItem.question;
   numberInQuestionItemCorrectAnswer = numberInQuestionItem.answer;

   numberInQuestionBox.innerText = numberInQuestionItemUserAnswer;


   userInputBox.addEventListener("keyup", (event) => {
      numberInQuestionItemUserAnswer = userInputBox.value;

      let rightAnswer;
      if (targetLanguage === "English") {
         rightAnswer = numberInQuestionItem.answerEnglish;
      } else if (targetLanguage === "Spanish") {
         rightAnswer = numberInQuestionItem.answerSpanish;
      }

      console.log(`match your answer of ${numberInQuestionItemUserAnswer} with ${numberInQuestionItem.question}.`);
      console.log(`Possible answers include ${rightAnswer}.`);

      if (rightAnswer.includes(numberInQuestionItemUserAnswer)) {
         console.log(`correct. Your answer is ${numberInQuestionItemUserAnswer}.`);
      } else {
         console.log(`wrong. Your answer is ${numberInQuestionItemUserAnswer}.`);
      }


   });