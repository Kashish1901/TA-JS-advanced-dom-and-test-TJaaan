let form = document.querySelector("form");
let ul = document.querySelector("ul");

let cardsData =JSON.parse(localStorage.getItem("cards")) || [] ;


form.addEventListener("submit" , (event) => {
    event.preventDefault();
let title = event.target.elements.title.value;
let category = event.target.elements.category.value;
cardsData.push({title , category});
localStorage.setItem("cards" , JSON.stringify(cardsData));
createUI(cardsData , ul)
});

function handleEdit(event , info , id ,label){
    let elm = event.target;
    let input = document.createElement("input");
    let parent = event.target.parentElement;
    input.value = info;
    input.addEventListener("keyup" , (e) => {
        if (e.keyCode === 13){
            let updateValue = e.target.value;
            cardsData[id][label]= updateValue;
            createUI();
            localStorage.setItem("cards" , JSON.stringify(cardsData));
        }
    })
    input.addEventListener("blur" , (e) => {
            let updateValue = e.target.value;
            cardsData[id][label]= updateValue;
            createUI();
            localStorage.setItem("cards" , JSON.stringify(cardsData));
        })
    parent.replaceChild(input , elm);
}
function createUI(data = cardsData , root = ul){
    root.innerHTML = " ";
    let fragment = new DocumentFragment();
    data.forEach((cardsInfo , index) => {
        let li = document.createElement("li");
        let h2 = document.createElement("h2");
        h2.innerText = cardsInfo.category;
        h2.addEventListener("dblclick" , (event) => handleEdit(event , cardsInfo.category , index , "category"));
        let p = document.createElement("p");
        p.innerText = cardsInfo.title;
        p.addEventListener("dblclick" , (event) => handleEdit(event , cardsInfo.title , index , "title"));
        li.append(h2 , p);
        fragment.appendChild(li);
    })
    root.append(fragment)
}

createUI(cardsData , ul);