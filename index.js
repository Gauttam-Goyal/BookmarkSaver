let myleads = [];
let mynames = [];
let inputel = document.getElementById("input");
// let btn = document.getElementById('save');
let ulel = document.getElementById("ulel");
let del = document.getElementById("delete");
let tabbtn = document.getElementById("tab");
let del_el = document.getElementById("delete_el");
let rename_el = document.getElementById("rename");
let sele_all = document.getElementById("term");



let val = JSON.parse(localStorage.getItem("get items"));
let data = JSON.parse(localStorage.getItem("geter items"));
if (val) {
    myleads = val;
    mynames = data
    render();
}

del.addEventListener("click", function run() {
    localStorage.clear();
    myleads = [];
    mynames = [];
    ulel.style.display = "none";
})
// btn.addEventListener("click", function run() {
//     console.log("hello gauttam");
//     myleads.push(inputel.value);
//     inputel.value = "";
//     localStorage.setItem("get items", JSON.stringify(myleads));
//     // myleads = JSON.parse(myleads);
//     render();
//     console.log(localStorage.getItem("get items"));
//     // ulel.innerHTML += "<li>"+myleads[myleads.length-1]+ "</li> ";
//     // inputel.value.style.display="none";
// })
// const tabs = [
//     {url: "https://www.google.com"}
// ]
inputel.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        tabbtn.click();
    }
})
tabbtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        myleads.push(tabs[0].url);
        localStorage.setItem("get items", JSON.stringify(myleads));
        if (inputel.value == "") {
            mynames.push(tabs[0].url);
        }
        else {

            mynames.push(inputel.value);
        }
        inputel.value = "";
        localStorage.setItem("geter items", JSON.stringify(mynames));
        // myleads = JSON.parse(myleads);
        render();
        // console.log(localStorage.getItem("get items"));
        //     render();
    })
    // console.log(tabs[0].url);
})
del_el.addEventListener("click", function () {
    let boxes = document.getElementsByClassName('terms');
    console.log(`before deletion ${boxes.length}`);
    console.log(`before deletion ${myleads.length}`);
    console.log(`before deletion ${mynames.length}`);
    let se = 0;
    for (var j = 0; j < boxes.length; j = se) {

        console.log("hello");
        console.log(`before if jfd deletion ${boxes.length}`);
        console.log(`before if dg deletion ${myleads.length}`);
        console.log(`before if df deletion ${mynames.length}`);
        // box = boxes[j];
        if (boxes[se].checked) {
            boxes[se].parentNode.removeChild(boxes[j]);
            myleads.splice(se, 1);
            mynames.splice(se, 1);
            se = 0;
            localStorage.setItem("get items", JSON.stringify(myleads));
            localStorage.setItem("geter items", JSON.stringify(mynames));
            // boxes.length = boxes.length - 1;


        }
        else {
            se = se + 1;
        }
        console.log(`after deletion ${boxes.length}`);
        console.log(`after deletion ${myleads.length}`);
        console.log(`after deletion ${mynames.length}`);
    }


    let val = JSON.parse(localStorage.getItem("get items"));
    let data = JSON.parse(localStorage.getItem("geter items"));
    if (val) {
        myleads = val;
        mynames = data;
        render();
    }
})
rename_el.addEventListener('click', function () {
    let boxes = document.getElementsByClassName('terms');
    for (let i = 0; i < boxes.length; i++) {
        box = boxes[i];
        if (box.checked) {
            mynames[i] = inputel.value;
            inputel.value = "";
        }

    }
    // localStorage.setItem("get items", JSON.stringify(myleads));
    localStorage.setItem("geter items", JSON.stringify(mynames));
    let val = JSON.parse(localStorage.getItem("get items"));
    let data = JSON.parse(localStorage.getItem("geter items"));
    if (val) {
        myleads = val;
        mynames = data;
        render();
    }
})




function render() {
    let listitem = "";


    for (let i = 0; i < myleads.length; i++) {
        // listitem += "<li>" +"<a href='# target='_blank' >"+ myleads[i]+"</a>" +"</li>";
        listitem += ` <li> <input type="checkbox" name ="foo" class="terms" /> <a href='${myleads[i]}' target='_blank'> ${mynames[i]} </a> </li>`;
        // console.log(listitem);
    }


    ulel.style.display = "block";
    ulel.innerHTML = listitem;
}
sele_all.addEventListener('click', function () {

    if (sele_all.checked) {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;

        }
        // sele_all.checked = false
    }
    else {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }


})


// localStorage.clear();