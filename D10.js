/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log("esercizio A");
/* ESERCIZIO A 
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log(sum);
console.log("esercizio B");
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 20);
console.log(random);
console.log("esercizio C");
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Giuseppe",
  surname: "Longo",
  age: 27,
};
console.log(me);
console.log("esercizio D");
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
console.log("esercizio E");
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["html", "css", "Javascript"];
console.log(me);
console.log("esercizio F");
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("qualcos'altro");
console.log(me);
console.log("esercizio G");
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.splice(3);
console.log(me);

// Funzioni
console.log("esercizio 1");
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
let numeroCasuale = dice();
console.log(numeroCasuale);
console.log("esercizio 2");
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(numero1, numero2) {
  if (numero1 < numero2) console.log(numero2);
  else if (numero1 > numero2) {
    console.log(numero1);
  }
}
const numeroMaggiore = whoIsBigger(10, 4);
const numeroMaggiore2 = whoIsBigger(1, 77);
console.log("esercizio 3");
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(Stringa) {
  let casualStringa = Stringa.split("");
  return casualStringa;
}

const arrStringa = splitMe("ciao a tutti");
console.log(arrStringa);
console.log("esercizio 4");
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(Stringa, removeFirst) {
  if (removeFirst) {
    return Stringa.slice(1);
  } else {
    return Stringa.slice(0, -1);
  }
}

console.log(deleteOne("ciao a tutti", true));
console.log(deleteOne("ciao a tutti", false));
console.log("esercizio 5");
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
  
*/
function onlyLetters(stringa) {
  return stringa.replace(/[0-9]/g, "");
}
console.log(onlyLetters("Ciao0o a tutt1111i"));
console.log("esercizio 6");
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(stringa) {
  if (stringa.includes("@")) {
    return true;
  } else {
    return false;
  }
}
console.log(isThisAnEmail("nonloso.it"));
console.log(isThisAnEmail("nonloso@email.it"));
console.log("esercizio 7");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const giorniDellaSettimana = [
    "Domenica",
    "Lunedi",
    "Martedi",
    "Mercoledi",
    "Giovedi",
    "Venerdi",
    "Sabato",
  ];
  const adesso = new Date();
  const oggi = adesso.getDay();
  return giorniDellaSettimana[oggi];
}
console.log(whatDayIsIt());
console.log("esercizio 8");
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(numeroDadi) {
  const result = {
    sum: 0,
    values: [],
  };

  for (let i = 0; i < numeroDadi; i++) {
    const funzioneDice = dice(); // Richiamo la funzione dice() per ottenere il valore del dado
    result.sum += funzioneDice; // Aggiungo il valore alla somma totale
    result.values.push(funzioneDice); // E col push inserisco nell'array dell'oggetto la funzione Dice
  }

  return result;
}
console.log(rollTheDices(7));
console.log("esercizio 9");
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(data) {
  // Ottengo la data corrente
  const dataDiOggi = new Date();

  // Estraggo il giorno del mese dalla data corrente
  const giornoCorrente = dataDiOggi.getDate();

  // Estraggo il giorno del mese dalla data specificata
  const giornoSpecifico = data.getDate();

  // Calcolo la differenza tra i giorni
  const giorniPassati = giornoCorrente - giornoSpecifico;

  return giorniPassati;
}

const data = new Date("2024-05-01");
console.log(howManyDays(data));
console.log("esercizio 10");
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(data) {
  // ottengo la variabile con il mio compleanno
  const mioCompleanno = data.getDate();
  // ottengo il giorno corrente
  const dataDiOggi = new Date().getDate();
  if (dataDiOggi === mioCompleanno) return true;
  else {
    return false;
  }
}
const dataCompleanno = new Date("2024-05-17");
console.log(isTodayMyBirthday(dataCompleanno));

//
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
console.log("esercizio 11");
/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(object, string) {
  delete object[string];
  return object;
}

console.log(deleteProp(me, "age"));
console.log("esercizio 12");
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie() {
  let filmPiuNuovo = movies[0];

  movies.forEach((movies) => {
    if (parseInt(movies.Year) > parseInt(filmPiuNuovo.Year)) {
      filmPiuNuovo = movies;
    }
  });
  return filmPiuNuovo;
}
const filmPiuNuovo = newestMovie(movies);

console.log("Il film più nuovo è:", filmPiuNuovo);
console.log("esercizio 13");
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}
const numerodiFilm = countMovies(movies);
console.log("Il numero di film è:", numerodiFilm);
console.log("esercizio 14");
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(films) {
  const yearsOfMovies = films.map((movies) => movies.Year);
  return yearsOfMovies;
}
const yearsOfMovies = onlyTheYears(movies);
console.log("Anno dei film:", yearsOfMovies);
console.log("esercizio 15");
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  return movies.filter((movies) => {
    return movies.Year >= 1000 && movies.Year < 2000;
  });
}
console.log(
  "i film prodottti nello scorso millennio:",
  onlyInLastMillennium(movies)
);
console.log("esercizio 16");
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  return movies.reduce(
    (accumulator, movies) => accumulator + parseInt(movies.Year),
    0
  );
}
console.log(sumAllTheYears(movies));
console.log("esercizio 17");
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(stringa) {
  return movies.find((movies) => movies.Title);
}

const filmTrovato = searchByTitle("Lord");
console.log("titolo trovato:", filmTrovato);
console.log("esercizio 18");
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(stringa) {
  const oggetto = {
    match: [],
    unmatch: [],
  };

  movies.forEach((movies) => {
    // Controllo se il titolo del film contiene la stringa di ricerca
    if (movies.Title.includes(stringa)) {
      oggetto.match.push(movies);
    } else {
      oggetto.unmatch.push(movies);
    }
  });

  return oggetto;
}

const film = searchAndDivide("Avengers");
console.log("Titoli che corrispondono:", film.match);
console.log("Titoli che non corrispondono:", film.unmatch);
console.log("esercizio 19");
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(number) {
  movies.splice(number, 1);
  return movies;
}
const arrayAggiornato = removeIndex(0);
console.log("Array aggiornato:", arrayAggiornato);
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function id() {
  return document.getElementById("container");
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function tag() {
  return document.querySelectorAll("td");
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function print() {
  const td = document.querySelectorAll("td");
  td.forEach((td) => {
    console.log(td.textContent);
  });
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function background() {
  const linkElements = document.getElementsByTagName("a");
  linkElements.forEach((link) => {
    link.style.backgroundColor = "red";
  });
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function add() {
  const li = document.createElement("li");
  const myList = document.getElementsByTagName("myList");
  myList.appendChild(li);
}
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuota() {
  myList.innerHTML = "";
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClass() {
  const trElements = document.getElementsByTagName("tr");
  trElements.forEach((tr) => {
    tr.classList.add("test");
  });
}
// NON HO RICHIAMATO LE FUNZIONI PERCHE' NON POTEVO PIU' ANDARE AVANTI CON IL CNSOLE.LOG
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
