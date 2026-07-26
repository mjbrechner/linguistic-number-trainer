   'use strict';


   let numberInQuestionItem;
   let numberInQuestionItemUserAnswer;
   let numberInQuestionItemCorrectAnswer;
   let targetLanguage = "English";
   document.getElementById("language-english").style.borderColor = "pink";
   let numberOfQuestions = 1;
   let seconds = 0;
   let secondsTotal = 0;
   let secondsAverage = 0;
   let timerID = null;
   const numberInQuestionBox = document.querySelector("#number-in-question");
   const inputBox = document.querySelector("#input-area");
   const userInputBox = document.querySelector("#input-area");
   const notificationBox = document.getElementById("notification-box");


   function languageChange() {
      document.getElementById("language-english").style.borderColor = "black";
      document.getElementById("language-spanish").style.borderColor = "black";
      document.getElementById("language-japanese").style.borderColor = "black";
      inputBox.focus();
   }

   function languageSelectEnglish() {
      targetLanguage = "English";
      document.getElementById("language-english").style.borderColor = "pink";
   }

   function languageSelectSpanish() {
      targetLanguage = "Spanish";
      document.getElementById("language-spanish").style.borderColor = "pink";
   }

   function languageSelectJapanese() {
      targetLanguage = "Japanese";
      document.getElementById("language-japanese").style.borderColor = "pink";
   }

   function newQuestion() {
      numberInQuestionItem = numberDictionary[Math.floor(Math.random() * numberDictionary.length)];
      console.log(numberInQuestionItem.question);
      numberInQuestionItemUserAnswer = numberInQuestionItem.question;
      numberInQuestionItemCorrectAnswer = numberInQuestionItem.answer;

      numberInQuestionBox.innerText = numberInQuestionItemUserAnswer;
      numberOfQuestions++;
      resetTimer();
   }

   function timerDisplay() {
      document.getElementById("timer-display").innerText = `Time: ${seconds}`;
      if (seconds === 3) {
         notificationBox.innerText = "";
      }
   }

   function timerStart() {
      if (timerID !== null) return;
      timerDisplay();
      timerID = setInterval(() => {
         seconds++;
         timerDisplay();
      }, 1000);
   }

   function resetTimer() {
      clearInterval(timerID);
      timerID = null;
      seconds = 0;
      timerStart();
   }

   timerStart();
   newQuestion();

   function correctAnswer() {
      // alert(`Correct! You got this in ${seconds} seconds!`);
      notificationBox.innerText = `Correct!`;
      userInputBox.value = "";

      //Calculate average time
      secondsTotal = secondsTotal + seconds;
      secondsAverage = (secondsTotal / numberOfQuestions).toFixed(2);
      document.getElementById("timer-average-display").innerText = `Time Average: ${secondsAverage}`;
      //End calculate average time

      newQuestion();
   }

   userInputBox.addEventListener("keyup", (event) => {
      numberInQuestionItemUserAnswer = userInputBox.value;

      let rightAnswer;
      if (targetLanguage === "English") {
         rightAnswer = numberInQuestionItem.answerEnglish;
      } else if (targetLanguage === "Spanish") {
         rightAnswer = numberInQuestionItem.answerSpanish;
      } else if (targetLanguage === "Japanese") {
         rightAnswer = numberInQuestionItem.answerJapanese;
      }

      console.log(`match your answer of ${numberInQuestionItemUserAnswer} with ${numberInQuestionItem.question}.`);
      console.log(`Possible answers include ${rightAnswer}.`);

      if (rightAnswer.includes(numberInQuestionItemUserAnswer)) {
         console.log(`correct. Your answer is ${numberInQuestionItemUserAnswer}.`);
         correctAnswer();
      } else {
         console.log(`wrong. Your answer is ${numberInQuestionItemUserAnswer}.`);
      }


   });