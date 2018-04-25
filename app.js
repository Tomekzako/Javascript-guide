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
asyncAwait();