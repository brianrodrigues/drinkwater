const Language = {
  init() {
    if (window.navigator.language == "pt-BR") {
      return Language.pt;
    } else {
      return Language.en;
    }
  },
  randomArray(array){
    const random = Math.floor(Math.random() * array.length + 1);
    return array[random];
  },
  pt: {
    titleAlert: "Hora de beber água",
    menssageAlert(){return Language.randomArray(Language.phrasesPT)},
    title: "Beba Água",
    textInit:"Não crie expectativas. Beba água!<br>Se nada der certo, pelo menos você está hidratado!",
    btnConfirmed: "COMEÇAR",
    footer: "Feito com ❤️ por",
    btnBeginner: "PRINCIPIANTE",
    btnIntermediary: "INTERMEDIÁRIO",
    btnAdvanced: "AVANÇADO",
    btnDownload: "Download para desktop",
    btnDoe: "Seja um apoiador",
    textPermission:
      "Precisamos de sua permissão para <br>notificá-lo quando beber água!",
  },
  en: {
    titleAlert: "Time to drink water",
    menssageAlert(){return Language.randomArray(Language.phrasesIN)},
    title: "Drink Water",
    textInit:
      "Do not create expectations. Drink water! <br> If nothing goes right, at least you're hydrated!",
    btnConfirmed: "START",
    footer: "Made with ❤️ by",
    btnBeginner: "BEGINNER",
    btnIntermediary: "INTERMEDIARY",
    btnAdvanced: "ADVANCED",
    btnDownload: "Download for desktop",
    btnDoe: "Be a supporter",
    textPermission:
      "We need your permission to <br>notify you when you drink water!",
  },
  phrasesPT: [
    "O corpo humano de um adulto possui até 65% de água em sua composição. Em um recém-nascido o número é ainda maior: 78%",
    "O planeta Terra também é conhecido como o Planeta Água. A justificativa para o nome deve-se ao fato de que 70,9% de sua superfície é coberta por água.",
    "Apenas 3% da água do mundo é doce. Deste total, 70% está na forma de gelo ou no solo.",
    "12% da água doce do mundo está no Brasil. O país é privilegiado por seus aquíferos, que armazenam a água no solo.",
    "O Aquífero Guarani é o maior do mundo. Ele se estende por uma área média de 1,2 milhão de km2 e reserva, aproximadamente, 45 mil quilômetros cúbicos de água.",
    "Existe mais água na atmosfera do que em todos os rios do mundo juntos.",
    "Em média, 2/3 da água do mundo é usada para a produção de alimentos, em especial à agricultura e pecuária.",
    "Uma torneira que goteja a cada segundo pode vazar três mil litros em um ano.",
    "De toda a água existente no planeta, apenas 1% é potável.",
    "A estimativa é a de que 1 em cada 9 pessoas não tenha fácil acesso à água potável.",
    "90% de toda a água doce do mundo está na Antártica.",
    "Uma pessoa consegue sobreviver cerca de um mês sem comida. No entanto, consegue sobreviver apenas uma semana sem beber.",
    "Uma torneira mal fechada pode levar ao desperdício de 128 litros de água por dia.",
    "Cada litro de água do mar contém aproximadamente 35 gramas de sal dissolvido.",
    "Os ossos humanos são compostos por 31% de água.",
    "Mais de metade da água utilizada em casa é gasta na casa de banho.",
    "Um adulto bebe cerca de 1000 litros de água anualmente.",
  ],
  phrasesIN: [
    "The human body of an adult has up to 65% water in its composition. In a newborn the number is even higher: 78%",
    "The planet Earth is also known as the Water Planet. The justification for the name is due to the fact that 70.9% of its surface is covered by water.",
    "Only 3% of the world's water is sweet. Of this total, 70% is in the form of ice or on the ground.",
    "12% of the world's fresh water is in Brazil. The country is privileged for its aquifers, which store water in the soil.",
    "The Guarani Aquifer is the largest in the world. It extends over an average area of ​​1.2 million km2 and reserves approximately 45 thousand cubic kilometers of water.",
    "There is more water in the atmosphere than in all the rivers in the world combined.",
    "On average, 2/3 of the world's water is used for food production, especially for agriculture and livestock.",
    "A faucet that drips every second can leak three thousand liters in one year.",
    "Of all the water on the planet, only 1% is drinkable.",
    "The estimate is that 1 in 9 people does not have easy access to drinking water.",
    "90% of all fresh water in the world is in Antarctica.",
    "A person can survive about a month without food. However, he can survive only a week without drinking.",
    "A poorly closed faucet can lead to the waste of 128 liters of water per day.",
    "Each liter of sea water contains approximately 35 grams of dissolved salt.",
    "Human bones are made up of 31% water.",
    "More than half of the water used at home is spent in the bathroom.",
    "An adult drinks about 1000 liters of water annually.",
  ],
  
};

export default Language.init();
