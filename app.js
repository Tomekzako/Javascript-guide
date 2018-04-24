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
asynchronous();