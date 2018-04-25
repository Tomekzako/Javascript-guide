//////////////////////////////////////////////////////
/*--------------------> BASICS <--------------------*/
//////////////////////////////////////////////////////

function basics() {

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
                console.log(`Person ${index + 1} is ${el} years old, and is full of age.`);
                fullAge.push(true);
            } else {
                console.log(`Person ${index + 1} is ${el} years old, and is NOT full of age.`);
                fullAge.push(false);
            }
        });
        return fullAge;
    }
    const full_1 = printFullAge(years);
    const full_2 = printFullAge(['2012', '2015', '1920']);

    console.log(full_1);
    console.log(full_2);

};
basics();




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

        'Filozofia Asynchronous JS polega na tym, że nie czekamy aż funkcja skończy pracę i dopiero po tym robimy coś z rezultatem. Zamiast tego pozwalamy funkcji wykonywać jakąś pracę w "tle".'
        
        Przykładem może być ładowanie się obrazu. W trakcie pobierania, wyświetlamy informację że obrazek jest pobierany.
        
        > pozwala funkcjom na prace w 'tle'
        > pozwala przekazać callback funkcje, która zostanie wywołana jak tylko funkcja skończy prace
        > rusza natychmiast dalej. Kod nigdy nie jest blokowany.
    */

    //   Przykład:

    const second = () => {
        setTimeout(() => {
            console.log('Async hey There!');
        }, 2000); // setTimeout nie zatrzyma wywoływania kodu na 2000ms, będzie się wywoływał normalnie, a po upływnie 2s funkcja zwróci rezultat.  
    };

    const first = () => {
        console.log('Hey there!');
        second();
        console.log('The End!');
    };

    first();

    function getRecipe() {

        setTimeout(() => {
            const recipeID = [34, 654, 491, 23];
            console.log(recipeID);

            setTimeout(id => {
                const recipe = {
                    title: 'Fresh Tomato Pasta',
                    publisher: 'Tomek'
                };
                console.log(`${id}: ${recipe.title}`);

                setTimeout(publisher => {
                    const recipe2 = {
                        title: 'Italian Pizza',
                        publisher: 'Andrew'
                    };
                    console.log(recipe2);
                }, 1500, recipe.publisher);
            }, 1500, recipeID[1]);

        }, 1500);

    };
    //getRecipe();

};
//asynchronous();






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
            setTimeout(ID => {
                const recipe = {
                    title: 'Fresh Tomato Pasta',
                    publisher: 'Tomek'
                };
                resolve(`${ID}: ${recipe.title}`);

            }, 1500, recId);
        });
    };

    const getPublisher = publisher => {
        return new Promise((resolve, reject) => {
            setTimeout(pub => {
                const recipe2 = {
                    title: 'Italian Pizza',
                    publisher: 'Andrew'
                };
                resolve(`${pub}: ${recipe2.title}`);
            }, 1500, publisher);
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
            console.log('Error!');
        });


};
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
            setTimeout(ID => {
                const recipe = {
                    title: 'Fresh Tomato Pasta',
                    publisher: 'Tomek'
                };
                resolve(`${ID}: ${recipe.title}`);

            }, 1500, recId);
        });
    };

    const getPublisher = publisher => {
        return new Promise((resolve, reject) => {
            setTimeout(pub => {
                const recipe2 = {
                    title: 'Italian Pizza',
                    publisher: 'Andrew'
                };
                resolve(`${pub}: ${recipe2.title}`);
            }, 1500, publisher);
        });
    };



    async function getRecipeAW() {
        const IDs = await getIDs;
        console.log(IDs);
        const recipe = await getRecipe(IDs[2]);
        console.log(recipe);
        const publisher = await getPublisher("Tomek");
        console.log(publisher);

        return recipe;
    };

    getRecipeAW().then(rec => console.log(`${rec} is the best ever!`));

};
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
        fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
            .then(result => {
                console.log(result);
                return result.json();
            })
            .then(data => {
                console.log(data);
                const today = data.consolidated_weather[0];
                console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`)

            })
            .catch(error => console.log(error));
    };
    getWeather(2487956);
    getWeather(44418);



};
//ajax();