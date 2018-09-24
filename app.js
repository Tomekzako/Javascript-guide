//////////////////////////////////////////////////////
/*--------------------> BASICS <--------------------*/
//////////////////////////////////////////////////////

function basics() {
  //FALSY --> undefined, null, 0, '', NaN
  //TRUTHY --> NOT falsy values

  let height;

  if (height) {
    console.log("Variable is defined");
  } else {
    console.log("Variable has NOT been defined");
  }

  // --> Falsy, becasue height is undefined.

  //PRACTICE

  const mikeTeam = [89, 120, 103];
  const johnTeam = [116, 94, 123];
  const maryTeam = [97, 134, 105];

  const mikeTeamAvg = mikeTeam.reduce((a, b) => a + b);
  const johnTeamAvg = johnTeam.reduce((a, b) => a + b);
  const maryTeamAvg = maryTeam.reduce((a, b) => a + b);

  const mikeAvg = mikeTeamAvg / mikeTeam.length;
  const johnAvg = johnTeamAvg / johnTeam.length;
  const maryAvg = maryTeamAvg / maryTeam.length;

  if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log("Mike's team has the highest average");
  } else if (mikeAvg === johnAvg && mikeAvg === maryAvg) {
    console.log("John's team has the same average as Mike's and Mary's team");
  } else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
    console.log("Mary's team has the highest average");
  } else {
    console.log("John's team has higher average");
  }

  //PRACTICE

  const bills = [124, 48, 268];

  function addTip(bill) {
    let tip;
    if (bill < 50) {
      tip = 0.2;
    } else if (bill > 50 && bill < 200) {
      tip = 0.15;
    } else {
      tip = 0.1;
    }
    return tip * bill;
  }

  //  addTip(bills[0]);
  //  addTip(bills[1]);
  //  addTip(bills[2]);

  const tipArray = bills.map(el => addTip(el));
  console.log(tipArray);

  const years = [1990, 2007, 1943, 1985, 1921];

  //ES5

  //    var array = [];
  //
  //    for (var i = 0; i < years.length; i++) {
  //        array[i] = 2018 - years[i];
  //    }
  //
  //    for (var i = 0; i < array.length; i++) {
  //
  //        if (array[i] >= 18) {
  //            console.log("Person " + (i + 1) + " is " + array[i] + " years old, and is full of age.");
  //        } else {
  //            console.log("Person " + (i + 1) + " is " + array[i] + " years old, and is NOT full of age.");
  //        }
  //    }
  //
  //    function printFullAge(years) {
  //        var array = [];
  //        var fullAges = [];
  //        for (var i = 0; i < years.length; i++) {
  //            array[i] = 2018 - years[i];
  //        }
  //        for (var i = 0; i < array.length; i++) {
  //
  //            if (array[i] >= 18) {
  //                console.log("Person " + (i + 1) + " is " + array[i] + " years old, and is full of age.");
  //                fullAges.push(true);
  //            } else {
  //                console.log("Person " + (i + 1) + " is " + array[i] + " years old, and is NOT full of age.");
  //                fullAges.push(false);
  //            }
  //        }
  //        return fullAges;
  //    }
  //
  //
  //    const full_1 = printFullAge(years);
  //    const full_2 = printFullAge(['2012', '2015', '1920']);
  //
  //    console.log(full_1);
  //    console.log(full_2);

  //ES6

  function printFullAge(years) {
    //        let age = [];
    let fullAge = [];

    //        for (let val of years) {
    //            age.push(new Date().getFullYear() - val);
    //        }

    const age = years.map(el => new Date().getFullYear() - el);

    age.forEach((el, index) => {
      if (el >= 18) {
        console.log(
          `Person ${index + 1} is ${el} years old, and is full of age.`
        );
        fullAge.push(true);
      } else {
        console.log(
          `Person ${index + 1} is ${el} years old, and is NOT full of age.`
        );
        fullAge.push(false);
      }
    });
    return fullAge;
  }
  const full_1 = printFullAge(years);
  const full_2 = printFullAge(["2012", "2015", "1920"]);

  console.log(full_1);
  console.log(full_2);
}
basics();

////////////////////////////////////////////////////////
/*--------------------> HOISTING <--------------------*/
////////////////////////////////////////////////////////
function hoisting() {
  calculateAge(1993); //--> działa

  function calculateAge(y) {
    console.log(2018 - y);
  }

  //    retirement(1993); //--> błąd, ponieważ jest to wyrażenie funkcyjne, a hoisting działa tylko dla deklaracji funkcji

  var retirement = function(y) {
    console.log(65 - (2018 - y));
  };

  console.log(age);
  var age = 23;
  console.log(age);
}
//hoisting();

///////////////////////////////////////////////////////
/*--------------------> SCOPING <--------------------*/
///////////////////////////////////////////////////////
function scoping() {
  // Scoping odpowiada na pytanie "Gdzie mamy dostęp do poszczególnej zmiennej"
  // Każda nowa funkcja tworzy scope.
  // Lexical Scoping: funkcja, która jest wewnątrz innej funkcji ma dostęp do 'scope' funkcji zewnętrznej

  var a = "Hello!";
  first();

  function first() {
    var b = "Hi!";
    second();

    function second() {
      var c = "Hey!";
      console.log(a + b + c);
    }
  }
  // Execution stack - porządek w jakim wywoływane sa funkcje
  // Scope Chain - porządek w jakim funckje sa zapisane leksykalnie

  var a = "Hello!";
  first();

  function first() {
    var b = "Hi!";
    second();

    function second() {
      var c = "Hey!";
      third(); // ma dostęp do funckji z powodu lexical scoping
    }
  }

  function third() {
    var d = "John";
    console.log(c); // nie ma dostępu do zmiennej c
  }
}
//scoping();

////////////////////////////////////////////////////
/*--------------------> THIS <--------------------*/
////////////////////////////////////////////////////

function thisKeyword() {
  // Zwykła deklaracja funckji - This kieruje do Window object
  // Metoda - This kieruje do obiektu który wywołuje metode

  var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() {
      console.log(this);
      console.log(2018 - this.yearOfBirth);
    }
  };
  john.calculateAge();

  var mike = {
    name: "Mike",
    yearOfBirth: 1970
  };
  mike.calculateAge = john.calculateAge;
  mike.calculateAge();
}
//thisKeyword();

////////////////////////////////////////////////////////////////////
/*--------------------> FUNCTION CONSTRUCTOR <--------------------*/
////////////////////////////////////////////////////////////////////
function constructor() {
  var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  };

  Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
  };

  Person.prototype.lastName = "Smith";

  var john = new Person("John", 1973, "Teacher");
  var maria = new Person("Maria", 1957, "Designer");

  console.log(john);
  john.calculateAge();

  console.log(maria.lastName);
}
// constructor();

/////////////////////////////////////////////////////////////
/*--------------------> OBJECT CREATE <--------------------*/
/////////////////////////////////////////////////////////////

function objectCreate() {
  var personProto = {
    calculateAge: function() {
      console.log(2018 - this.yearOfBirth);
    }
  };
  var john = Object.create(personProto);
  john.name = "John";
  john.yearOfBirth = 1990;
  john.job = "Teacher";
  console.log(john);

  var jane = Object.create(personProto, {
    name: {
      value: "Jane"
    },
    yearOfBirth: {
      value: 1968
    },
    job: {
      value: "Designer"
    }
  });
  console.log(jane);
}
//objectCreate();

///////////////////////////////////////////////////////////////////////////
/*--------------------> PASSING FUNCTION AS ARGUMENT<--------------------*/
///////////////////////////////////////////////////////////////////////////

function passingFunction() {
  var years = [1985, 2011, 1976, 2001, 1948];

  function arrayCalc(array, fn) {
    var arrRes = [];
    for (var i = 0; i < array.length; i++) {
      arrRes.push(fn(array[i]));
    }
    return arrRes;
  }

  function calculateAge(el) {
    return new Date().getFullYear() - el;
  }

  function isFullAge(el) {
    return el >= 18;
  }

  var ages = arrayCalc(years, calculateAge);
  console.log(ages);

  var fullAge = arrayCalc(ages, isFullAge);
  console.log(fullAge);
}

// passingFunction();

//////////////////////////////////////////////////////////////////////////
/*--------------------> FUNCTION RETURNING FUNCTION<--------------------*/
//////////////////////////////////////////////////////////////////////////

function returnFunction() {
  function interviewQuestion(job) {
    if (job === "designer") {
      return function(name) {
        console.log(name + ", can you please explain what UX design is?");
      };
    } else if (job === "teacher") {
      return function(name) {
        console.log("What subject do you teach " + name + "?");
      };
    } else {
      return function(name) {
        console.log("Hello " + name + ". What do you do?");
      };
    }
  }

  var teacherQuestion = interviewQuestion("teacher");
  teacherQuestion("Adam");
  teacherQuestion("Filip");
  //    var teacherQuestion = interviewQuestion("teacher")("Adam");

  var designerQuestion = interviewQuestion("designer")("Maria");
}
// returnFunction();

///////////////////////////////////////////////////
/*--------------------> IIFE<--------------------*/
///////////////////////////////////////////////////

(function iife() {
  function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
  }
  game();

  (function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
  })();

  (function game(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
  })(4);

  //Możemy wywołać IIFE tylko raz.
});
//();

///////////////////////////////////////////////////////
/*--------------------> CLOSURES<--------------------*/
///////////////////////////////////////////////////////
(function closures() {
  function retirement(retirementAge) {
    var a = " years until retirement.";
    return function(yearOfBirth) {
      var age = 2018 - yearOfBirth;
      console.log(retirementAge - age + a);
    };
  }

  var retirementUS = retirement(66);
  retirementUS(1976);

  var retirementPL = retirement(68);
  retirementPL(1996);

  var retirementGer = retirement(62);
  retirementGer(1965);

  /*
        Wewnętrzna funkcja ma zawsze dostęp do zmiennych i parametrów jej funkcji zewnętrznej, nawet jak zewnętrzna funckja jest zwrócona.
    */

  function interviewQuestion(job) {
    return function(name) {
      if (job === "designer") {
        console.log(name + ", can you please explain what UX design is?");
      } else if (job === "teacher") {
        console.log("What subject do you teach " + name + "?");
      } else {
        console.log("Hello " + name + ". What do you do?");
      }
    };
  }
  interviewQuestion("teacher")("Adam");
});
//();

/////////////////////////////////////////////////////////////////
/*--------------------> BIND, CALL, APPlY <--------------------*/
/////////////////////////////////////////////////////////////////

(function() {
  //CALL

  //Example 1
  let john = {
    name: "John",
    age: 26,
    job: "teacher",
    presentation: function(style, timeOfDay) {
      if (style === "formal") {
        console.log(
          `Good ${timeOfDay} Ladies and Gentelman! I'm ${this.name} and I'm a ${
            this.job
          }. I'm ${this.age} years old.`
        );
      } else if (style === "friendly") {
        console.log(
          `Hey, what's up? I'm ${this.name}, I'm a ${this.job} and I'm ${
            this.age
          } years old. Have a nice ${timeOfDay}.`
        );
      }
    }
  };

  let maria = {
    name: "Maria",
    age: 45,
    job: "des1igner"
  };

  john.presentation("friendly", "morning");

  john.presentation.call(maria, "formal", "afternoon");

  //Example 2
  function greet() {
    var reply = [
      this.animal,
      "typically sleep between",
      this.sleepDuration
    ].join(" ");
    console.log(reply);
  }

  var obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours"
  };

  greet.call(obj); // cats typically sleep between 12 and 16 hours

  //APPLY
  //john.presentation.apply(maria, ['formal', 'afternoon']);

  //BIND
  const johnFormal = john.presentation.bind(john, "formal");

  johnFormal("morning");
  johnFormal("night");

  const mariaFriendly = john.presentation.bind(maria, "friendly");

  mariaFriendly("morning");
  mariaFriendly("night");

  //Example

  var years = [1985, 2011, 1976, 2001, 1948];

  function arrayCalc(array, fn) {
    var arrRes = [];
    for (var i = 0; i < array.length; i++) {
      arrRes.push(fn(array[i]));
    }
    return arrRes;
  }

  function calculateAge(el) {
    return new Date().getFullYear() - el;
  }

  function isFullAge(limit, el) {
    return el >= limit;
  }

  const ages = arrayCalc(years, calculateAge);
  const fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

  console.log(ages);
  console.log(fullJapan);
});
//();

///////////////////////////////////////////////////////
/*--------------------> PRACTICE<--------------------*/
///////////////////////////////////////////////////////

(function practice() {
  const Question = function(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  };

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    //        for (i = 0; i < this.answer.length; i++) {
    //            console.log(i + ': ' + this.answer[i]);
    //        }

    for (const [index, cur] of this.answer.entries()) {
      console.log(`${index} : ${cur}`);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    let sc;
    if (ans === this.correct) {
      console.log("Correct answer!");
      sc = callback(true);
    } else {
      console.log("Wrong answer. Try again :)");
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log(`Your current score is ${score}`);
    console.log("----------------------");
  };

  const q1 = new Question(
    "Is Javascript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );
  const q2 = new Question(
    "What is the name of this course's teacher?",
    ["John", "Michael", "Jonas"],
    2
  );
  const q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tediuos"],
    2
  );

  const questions = [q1, q2, q3];

  function score() {
    let sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  const keepscore = score();

  function nextQuestion() {
    const randomQuestion = Math.floor(Math.random() * questions.length);

    questions[randomQuestion].displayQuestion();

    const answer = prompt("Please select the correct answer.");

    if (answer !== "exit") {
      questions[randomQuestion].checkAnswer(parseInt(answer), keepscore);
      nextQuestion();
    }
  }

  nextQuestion();
});
// ();

//////////////////////////////////////////////////////////////////////
/*--------------------> ASYNCHRONOUS JAVASCRIPT<--------------------*/
//////////////////////////////////////////////////////////////////////

function asynchronous() {
  /* ---> SYNCHRONOUS JAVASCRIPT:
        Operacje są wykonywane po kolei, jedna po drugiej, linijka po linijce, w pojedynczym wątku w silniku JavaScript.
    */
  //   Przykład:

  //const second = () => {
  //    console.log('How are you doing?');
  //};
  //
  //const first = () => {
  //    console.log('Hey there!');
  //    second();
  //    console.log('The End!');
  //};
  //
  //first();

  /* ---> ASYNCHRONOUS JAVASCRIPT:
        Pozwala wykonywać wiele czynności jednocześnie, w tym samym czasie. 

        'Filozofia Asynchronous JS polega na tym, że nie czekamy aż funkcja skończy pracę i dopiero po tym robimy coś z rezultatem. 
        Zamiast tego pozwalamy funkcji wykonywać jakąś pracę w "tle".'
        
        Przykładem może być ładowanie się obrazu. W trakcie pobierania, wyświetlamy informację że obrazek jest pobierany.
        
        > pozwala funkcjom na prace w 'tle'
        > pozwala przekazać callback funkcje, która zostanie wywołana jak tylko funkcja skończy prace
        > rusza natychmiast dalej. Kod nigdy nie jest blokowany.
    */

  //   Przykład:

  const second = () => {
    setTimeout(() => {
      console.log("Async hey There!");
    }, 2000); // setTimeout nie zatrzyma wywoływania kodu na 2000ms, będzie się wywoływał normalnie, a po upływnie 2s funkcja zwróci rezultat.
  };

  const first = () => {
    console.log("Hey there!");
    second();
    console.log("The End!");
  };

  // first();

  function getRecipe() {
    setTimeout(() => {
      const recipeID = [34, 654, 491, 23];
      console.log(recipeID);

      setTimeout(
        id => {
          const recipe = {
            title: "Fresh Tomato Pasta",
            publisher: "Tomek"
          };
          console.log(`${id}: ${recipe.title}`);

          setTimeout(
            publisher => {
              const recipe2 = {
                title: "Italian Pizza",
                publisher: "Andrew"
              };
              console.log(recipe2);
            },
            1500,
            recipe.publisher
          );
        },
        1500,
        recipeID[1]
      );
    }, 1500);
  }
  getRecipe();
}
// asynchronous();

///////////////////////////////////////////////////////
/*--------------------> PROMISES<--------------------*/
///////////////////////////////////////////////////////

/*
    Promise:
        Obiekt, utrzymujący informacje czy dane async wydarzenie się już wydarzyło czy nie. 
        Jeśli się wydarzyło, determinuje co powinno nastąpić później.
        Wprowadza pojęcie przyszłej wartości, której się spodziewamy.
*/

function promises() {
  const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([34, 654, 491, 23]);
    }, 1500);
  });

  const getRecipe = recId => {
    return new Promise((resolve, reject) => {
      setTimeout(
        ID => {
          const recipe = {
            title: "Fresh Tomato Pasta",
            publisher: "Tomek"
          };
          resolve(`${ID}: ${recipe.title}`);
        },
        1500,
        recId
      );
    });
  };

  const getPublisher = publisher => {
    return new Promise((resolve, reject) => {
      setTimeout(
        pub => {
          const recipe2 = {
            title: "Italian Pizza",
            publisher: "Andrew"
          };
          resolve(`${pub}: ${recipe2.title}`);
        },
        1500,
        publisher
      );
    });
  };

  getIDs
    .then(IDs => {
      console.log(IDs);
      return getRecipe(IDs[2]);
    })
    .then(recipe => {
      console.log(recipe);
      return getPublisher("Tomek");
    })
    .then(pub => {
      console.log(pub);
    })
    .catch(error => {
      console.log("Error!");
    });
}
//promises();

//////////////////////////////////////////////////////////
/*--------------------> ASYNC/AWAIT<--------------------*/
//////////////////////////////////////////////////////////

function asyncAwait() {
  const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([34, 654, 491, 23]);
    }, 1500);
  });

  const getRecipe = recId => {
    return new Promise((resolve, reject) => {
      setTimeout(
        ID => {
          const recipe = {
            title: "Fresh Tomato Pasta",
            publisher: "Tomek"
          };
          resolve(`${ID}: ${recipe.title}`);
        },
        1500,
        recId
      );
    });
  };

  const getPublisher = publisher => {
    return new Promise((resolve, reject) => {
      setTimeout(
        pub => {
          const recipe2 = {
            title: "Italian Pizza",
            publisher: "Andrew"
          };
          resolve(`${pub}: ${recipe2.title}`);
        },
        1500,
        publisher
      );
    });
  };

  async function getRecipeAW() {
    // --> 'async' oznacza, że funkcja działa w 'tle' nie wstrzymując kodu.
    const IDs = await getIDs; // --> 'await' czeka, aż Promise  osiągnie i zwróci wynik.
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const publisher = await getPublisher("Tomek");
    console.log(publisher);

    return recipe;
  }

  getRecipeAW().then(rec => console.log(`${rec} is the best ever!`));

  /* Asynchroniczne funkcje zawsze zwracają Promise. */
}
//asyncAwait();

//////////////////////////////////////////////////////////
/*--------------------> AJAX & APIs<--------------------*/
//////////////////////////////////////////////////////////
/*
    Asynchronous JavaScript And XML:
    
    Pozwala asynchronicznie komunikować się z zdalnymi serwerami. Pobrać dane bez konieczności przeładowania całej strony
    
    Application Programming Interface:
    
    Interfejs oprogramowania, ściśle określony zestaw reguł i ich opisów, w jaki programy komputerowe komunikują się między sobą. Umożliwia komunikację między różnymi aplikacjami.
    Są dwa typy API's, które można użyc w JS:
    - własny API (dane z własnego serwera)
    - 3rd-party APIs (Google Maps, Embed YouTube videos, Weather data, Movies data, itp.)
    
*/

function ajax() {
  function getWeather(woeid) {
    fetch(
      `https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`
    )
      .then(result => {
        console.log(result);
        return result.json();
      })
      .then(data => {
        console.log(data);
        const today = data.consolidated_weather[0];
        console.log(
          `Temperatures in ${data.title} stay between ${today.min_temp} and ${
            today.max_temp
          }`
        );
      })
      .catch(error => console.log(error));
  }
  //    getWeather(2487956);
  //    getWeather(44418);

  async function getWeatherAW(woeid) {
    try {
      const result = await fetch(
        `https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`
      );
      const data = await result.json();
      const tomorrow = data.consolidated_weather[1];
      console.log(
        `Temperatures in ${data.title} stay between ${tomorrow.min_temp} and ${
          tomorrow.max_temp
        }`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  let dataSanFr;
  getWeatherAW(44418).then(data => {
    dataSanFr = data;
    console.log(dataSanFr);
  });
  getWeatherAW(2487956);
}
//ajax();

//////////////////////////////////////////////////////
/*--------------------> MODULES<--------------------*/
//////////////////////////////////////////////////////

var moduleOne = (function() {
  var x = 15;

  function add(a) {
    return x + a;
  }

  return {
    publicTest: function(b) {
      return add(b);
    }
  };
})();

var moduleTwo = (function(modOne) {
  var z = modOne.publicTest(6);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  };
})(moduleOne);
// moduleTwo.anotherPublic();

//////////////////////////////////////////////////////////
/*--------------------> REF VS COPY<--------------------*/
//////////////////////////////////////////////////////////

function ref() {
  // start with strings, numbers and booleans
  // let age = 100;
  // let age2 = age;
  // console.log(age, age2);
  // age = 200;
  // console.log(age, age2);

  // let name = 'Wes';
  // let name2 = name;
  // console.log(name, name2);
  // name = 'wesley';
  // console.log(name, name2);

  // Let's say we have an array
  const players = ["Wes", "Sarah", "Ryan", "Poppy"];

  // and we want to make a copy of it.
  const team = players;

  console.log(players, team);
  // You might think we can just do something like this:
  // team[3] = 'Lux';

  // however what happens when we update that array?

  // now here is the problem!

  // oh no - we have edited the original array too!

  // Why? It's because that is an array reference, not an array copy. They both point to the same array!

  // So, how do we fix this? We take a copy instead!
  const team2 = players.slice();

  // one day

  // or create a new array and concat the old one in
  const team3 = [].concat(players);

  // or use the new ES6 Spread
  const team4 = [...players];
  team4[3] = "heeee hawww";
  console.log(team4);

  const team5 = Array.from(players);
}
ref();
