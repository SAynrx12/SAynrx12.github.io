document.addEventListener('DOMContentLoaded', function () {
    // Funcionalidad: Mostrar/Ocultar dato curioso
    const toggleButton = document.getElementById('toggleInfo');
    const extraInfo = document.getElementById('extraInfo');
    toggleButton.addEventListener('click', function () {
      if (extraInfo.classList.contains('hidden')) {
        extraInfo.classList.remove('hidden');
        toggleButton.textContent = "Ocultar Curiosidad";
      } else {
        extraInfo.classList.add('hidden');
        toggleButton.textContent = "Mostrar Curiosidad";
      }
    });
  
    // Funcionalidad: Calculadora del cuestionario
    const submitQuiz = document.getElementById('submitQuiz');
    const quizForm = document.getElementById('quiz-form');
  
    submitQuiz.addEventListener('click', function(){
      let score = 0;
      const totalQuestions = 3;
  
      // Se asume que las respuestas correctas tienen value="1"
      const q1 = quizForm.elements["q1"].value;
      const q2 = quizForm.elements["q2"].value;
      const q3 = quizForm.elements["q3"].value;
  
      if(q1 === "1") score++;
      if(q2 === "1") score++;
      if(q3 === "1") score++;
  
      // Mostrar resultado
      const quizResult = document.getElementById('quiz-result');
      quizResult.textContent = "Tu puntaje es: " + score + " de " + totalQuestions;
    });
  });
  