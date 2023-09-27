function submitButton(){
    alert("Az űrlap elküldésre került!")
}

function changeText(text){
    console.log("Szöveg cserélő függvény lefut");
    let extra = " + extra szöveg";
    text.innerHTML = `<div class=\'d-flex w-100 justify-content-between\'><h5>Első esemény</h5>`
    + '<small> Ez itt: </small></div>'
    + '<p class="mb-1">egy szöveg csere</p>'
    /**Template literal: amikor változó nevét szeretnék hozzá adni a html
     * kódhoz, akkor első lépés, hogy backtick-et használunk,
     * azaz altgr+7 
     * a változót : ${változó neve} szintaxissal adhatjuk meg
     */
    + `<small> egér eseményre ${extra}</small>  `
    /**a plusz jel nemcsak az összeadásra szolgál, hanem az összefűzésre is */
}

//2.) feladat

/**Az addEventListener, ahogyan a nevében is benne van, egy esemény figyelő
 * metódus, amely két paramétert vár, az első paraméter, az az, hogy milyen eseményt kell figyelnie, a második, az az, hogy mi történjen.
 */
/*document.getElementById('secondPost').addEventListener('dblclick', function(){
    let second = document.getElementById('secondPost');
    second.textContent = "második függvény lefut"
});*/
let anchorSecondPost = document.getElementById('secondPost');
//console.log("A második post html elem vizsgálata, sikerült e eltárolni:")
//console.log(anchorSecondPost);
/*
anchorSecondPost.addEventListener('dblclick', function(){
    anchorSecondPost.textContent = "második függvény lefut!"
});
*/
//Szervezzük ki a függvényt, és hívjuk meg második paraméterként
anchorSecondPost.addEventListener('dblclick', changedblClick);

function changedblClick(){
    anchorSecondPost.textContent = "második függvény dupla kattintásra lefut"
}
//3.) feladat

let tPost = document.getElementById("thirdPost")
console.log(tPost)
tPost.addEventListener('mouseenter', changeOnMouseEnter);

