/*
Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.

Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.

Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.

Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
*/

let area = prompt("Te gustaría seguir hacía el área de de Front-End o hacia el área de Back-End?");
if (area.toLocaleLowerCase() ===  "front-end") {
    let framework = prompt("¿Te gustaría aprender React o aprender Vue?");
    if (framework.toLowerCase() === "react") {
        console.log("¡Excelente elección! React es un framework popular y versátil para el desarrollo web");
    } else if (framework.toLocaleLowerCase() === "vue") {
        console.log("¡Vue es una gran opción! Es conocido por su facilidad de aprendizaje y su rendimiento");
    } else {
        console.log("Por favor elige entre React o Vue.");
    }
    let especializacion = prompt("¿Te gustaría seguir especializándote en Front-End o desarrollarte para convertirte en Fullstack?");
    if(especializacion.toLocaleLowerCase() === "front-end") {
        console.log("¡Continúa explorando el mundo del Front-End");
    } else if (especializacion.toLocaleLowerCase() === "fullstack") {
        console.log("Aprenderás a dominar ambos lados del desarrollo")
    }else {
        console.log("Por favor, elige entre especializarte en Front-End o convertirte en Fullstack.");
      }
    } else if (area.toLowerCase() === "back-end") {
      let lenguaje = prompt("¿Te gustaría aprender C# o aprender Java?");
      if (lenguaje.toLowerCase() === "c#") {
        console.log("C# es un lenguaje poderoso y ampliamente utilizado en el desarrollo de aplicaciones.");
      } else if (lenguaje.toLowerCase() === "java") {
        console.log("Java es un lenguaje robusto y escalable, ideal para proyectos de gran envergadura.");
      } else {
        console.log("Por favor, elige entre C# o Java.");
      }
      let especializacion = prompt("¿Te gustaría seguir especializándote en Back-End o desarrollarte para convertirte en Fullstack?");
      if (especializacion.toLowerCase() === "back-end") {
        console.log("¡El Back-End es un área fundamental en el desarrollo web! Hay mucho que explorar.");
      } else if (especializacion.toLowerCase() === "fullstack") {
        console.log("¡Un Fullstack es un perfil muy completo! Aprenderás a dominar ambos lados del desarrollo.");
      } else {
        console.log("Por favor, elige entre especializarte en Back-End o convertirte en Fullstack.");
      }
    } else {
      console.log("Por favor, elige entre Front-End o Back-End.");
    }
    
    let seguir = "ok";
    let tecnologias = [];
    while (seguir.toLowerCase() === "ok") {
      let tecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
      if (tecnologia !== null && tecnologia.trim() !== "") {
        tecnologias.push(tecnologia);
        console.log(`¡${tecnologia} es una tecnología interesante!`);
      }
      seguir = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
    }
    
    if (tecnologias.length > 0) {
      console.log(`¡Es genial que te interesen las siguientes tecnologías: ${tecnologias.join(", ")}!`);
    }
