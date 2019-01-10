function myFunc() {
  let x = document.getElementById("name").value;
  //Validación de que agregaste tu nombre

  valor = document.getElementById("name").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
  alert('[ERROR] No ingresaste ningún nombre');
  return false;
}

  let mensaje =" Bienvenid@ a la trivia " + x + " ¡Mucha Suerte!";

  document.getElementById("demo").innerHTML = mensaje; // mete el elemento nombre del usuario al elemento demo del html
  document.getElementById("star").style.display="none"; // Le decimos al elemento start que desaparezca cuando el usuario de click
  document.getElementById("type-question").style.display ="block"; //aparecen los botones con los tipos de preguntas para que el usuario elija

  }
  //función para que desaparezca lo anteriory aparezcan los botones de las opciones de los quiz
  //function quizOption(){
    //document.getElementById("demo").style.display="none"
    //document.getElementById("type-question").style.display="block";
  //}

  //Le digo que aparezca el cuestionario A, cuando de click en dicho botón
  function quizA(){
    document.getElementById("type-question").style.display="none"; //oculta los botones
    document.getElementById("quiz").style.display="block"; //Aparece el cuestionario A
    document.getElementById("quiz").reset(); //Resetear el cuestionario
  }

 function hola(){
    document.getElementById("type-question").style.display="none"; //oculta los botones
    document.getElementById("me").style.display="block"; //Aparece el cuestionario B
    document.getElementById("me").reset(); //Resetear el cuestionario
  }


  function quizC(){
    document.getElementById("type-question").style.display="none"; //oculta los botones
    document.getElementById("quizB").style.display="block";   //Aparece el cuestionario B cuando el usuario da click en ese botón
    document.getElementById("quizB").reset();//Resetear el cuestionario
  }

//esta función revisa cuántas respuestas correctas hubo, y manda mensajitos
  function check(){

    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let correct = 0, incorrect =0;


    if (question1 == "1969") {
      correct++;
      }else{ incorrect++}
    if (question2 == "Thomas Alva Edison") {
      correct++;
      }	else{ incorrect++}
    if (question3 == "1995") {
      correct++;
      }else{ incorrect++}

    //Arreglo de los mensajes
    let messages = ["¡ Gran Trabajo ! ", " ¡ No esta mal !", "¡ Necesitas Mejorar !"];
    let score; //variable que indica cuántas respuestas correctas hubo

    if (correct == 0) {
      score = 2;
    }

    if (correct > 0 && correct < 3) {
      score = 1;
    }

    if (correct == 3) {
      score = 0;
    }

    document.getElementById("quiz").style.display="none"; //desaparece el cuestionario A
    document.getElementById("after_submit").style.display="block"
    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "¡Tuviste " + correct + " CORRECTAS!!! ¡ Y  "+ incorrect + " Incorrectas!" ;
    }

//Función de las respuestas del cuestionario B

  function checkt(){

    let question1 = document.me.question1.value;
    let question2 = document.me.question2.value;
    let question3 = document.me.question3.value;
    let question4 = document.me.question4.value;
    let correct = 0, incorrect =0;


    if (question1 == "Leo") {
      correct++;
      }else{ incorrect++}
    if (question2 == "Miguel") {
      correct++;
      }	else{ incorrect++}
    if (question3 == "Bethoven") {
      correct++;
      }else{ incorrect++}
     if (question4 == "19") {
      correct++;
      }else{ incorrect++}

    //Arreglo de los mensajes
    let messages = ["¡ Gran Trabajo ! ", " ¡ No esta mal !", "¡ Necesitas Mejorar !"];
    let score; //variable que indica cuántas respuestas correctas hubo

    if (correct == 0) {
      score = 2;
    }

    if (correct > 0 && correct < 4) {
      score = 1;
    }

    if (correct == 4) {
      score = 0;
    }

    document.getElementById("me").style.display="none"; //desaparece el cuestionario B
    document.getElementById("after_submit").style.display="block"
    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "¡Tuviste " + correct + " CORRECTAS!!! ¡ Y  "+ incorrect + " Incorrectas!" ;
    }


  function checkB(){

	  let question1 = document.quizB.question1.value;
	  let question2 = document.quizB.question2.value;
	  let question3 = document.quizB.question3.value;
    let question4 = document.quizB.question4.value;
    let question5 = document.quizB.question5.value;
	  let correct = 0, incorrect=0;

	  if (question1 == "Las vacas") {
		  correct++;
    }else{ incorrect++}
	  if (question2 == "Captan el oxígeno del aire a través de sus orificios nasales modificados") {
		  correct++;
    }else{ incorrect++}
	  if (question3 == "Por medio de sonidos de alta frecuencia, de manera similar a un submarino") {
		correct++;
	  }else{ incorrect++}
    if (question4 == "Nacen de los huevos que pone la madre en los mares de sargaso") {
		correct++;
	  } else{ incorrect++}
    if (question5 == "Las orcas") {
		correct++;
	  }else{ incorrect++}

  //Arreglo de los mensajes
    let messages = ["¡ Gran Trabajo ! ", " ¡ No esta mal !", "¡ Necesitas Mejorar !"];
    let score; //variable que indica cuántas respuestas correctas hubo

    if (correct == 0 || correct == 1 ) {
		score = 2;
	  }

    if (correct > 2 || correct <5 ) {
		score = 1;
	  }

    if (correct == 5) {
		score = 0;
  	}

    document.getElementById("quizB").style.display="none"; //desaparece el cuestionario B
    document.getElementById("after_submit").style.display="block"
    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "¡Tuviste " + correct + " CORRECTAS!!! ¡ Y  "+ incorrect + " Incorrectas!" ;
    }

	function reset()//Botón de Reinicio
  { document.getElementById("after_submit").style.display="none";
    document.getElementById("type-question").style.display="block";
  }

function start()//Botón de Inicio
  {
    document.getElementById("after_submit").style.display="none"; document.getElementById("star").style.display="block";
  }
