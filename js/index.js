const sideMenu = document.querySelector("aside");
const menuBtn  = document.querySelector("#menu_btn");
const closeBtn = document.querySelector("#close_btn");
const themeToggler = document.querySelector(".theme_toggler");
var sideBar = document.getElementById("sideBar");
var link = sideBar.getElementsByClassName("link");

// Show Side bar
menuBtn.addEventListener("click", ()=>{
    sideMenu.style.display = "block";
});

// Close Side bar
closeBtn.addEventListener("click", ()=>{
    sideMenu.style.display = "none";
});

// Change Theme
themeToggler.addEventListener("click", ()=>{
        document.body.classList.toggle("dark_theme_variable");

        themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
        themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  // script dropdwon months

const wrapper_101 = document.querySelector(".wrapper_101"),
selectBtn = wrapper_101.querySelector(".select_btn"),
searchInpt = wrapper_101.querySelector("input"),
options_101 = wrapper_101.querySelector(".options_101");
// array of some months
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function addMonths(){
    options_101.innerHTML = "";
    months.forEach(month =>{
        let li = `<li onclick="updateName(this)">${month}</li>`;
        options_101.insertAdjacentHTML("beforeend", li);
    });
}

addMonths();

function updateName(selectLi)
{
    searchInpt.value = "";
    addMonths();
    wrapper_101.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectLi.innerText;
}

searchInpt.addEventListener("keyup", () =>{
    let arr = [];
    let searchVal = searchInpt.value.toLowerCase();
    arr = months.filter(data =>{
        return data.toLowerCase().startsWith(searchVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options_101.innerHTML = arr ? arr : `<p>Oops! Month not found`;
});

selectBtn.addEventListener("click", () =>{
    wrapper_101.classList.toggle("active");
});

// script dropdwon date

const wrapper_101_date = document.querySelector(".wrapper_date"),
selectBtn_date = wrapper_101_date.querySelector(".select_btn_date"),
searchInpt_date = wrapper_101_date.querySelector("input"),
options_101_date = wrapper_101_date.querySelector(".options_101_date");
// array of some months
let dates = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function addDate(){
    options_101_date.innerHTML = "";
    dates.forEach(date =>{
        let li = `<li onclick="updateNameDate(this)">${date}</li>`;
        options_101_date.insertAdjacentHTML("beforeend", li);
    });
}

addDate();

function updateNameDate(selecedtLi)
{
    searchInpt_date.value = "";
    addDate();
    wrapper_101_date.classList.remove("active");
    selectBtn_date.firstElementChild.innerText = selecedtLi.innerText;
}

searchInpt_date.addEventListener("keyup", () =>{
    let arr = [];
    let searchVal = searchInpt_date.value.toLowerCase();
    arr = dates.filter(data =>{
        return data.toLowerCase().startsWith(searchVal);
    }).map(data => `<li onclick="updateNameDate(this)">${data}</li>`).join("");
    options_101_date.innerHTML = arr ? arr : `<p>Oops! Date not found</p>`;
});

selectBtn_date.addEventListener("click", () =>{
    wrapper_101_date.classList.toggle("active");
});

// script dropdwon Calls & Puts

const wrapper_101_calls_puts = document.querySelector(".wrapper_calls_puts"),
selectBtn_calls_puts = wrapper_101_calls_puts.querySelector(".select_btn_calls_puts"),
searchInpt_calls_puts = wrapper_101_calls_puts.querySelector("input"),
options_101_calls_puts = wrapper_101_calls_puts.querySelector(".options_101_calls_puts");
// array of some months
let calls_puts = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function addCalls_puts(){
    options_101_calls_puts.innerHTML = "";
    calls_puts.forEach(call_put =>{
        let li = `<li onclick="updateNameCalls_puts(this)">${call_put}</li>`;
        options_101_calls_puts.insertAdjacentHTML("beforeend", li);
    });
}

addCalls_puts();

function updateNameCalls_puts(selectLi)
{
    searchInpt_calls_puts.value = "";
    addCalls_puts();
    wrapper_101_calls_puts.classList.remove("active");
    selectBtn_calls_puts.firstElementChild.innerText = selectLi.innerText;
}

searchInpt_calls_puts.addEventListener("keyup", () =>{
    let arr = [];
    let searchVal = searchInpt_calls_puts.value.toLowerCase();
    arr = calls_puts.filter(data =>{
        return data.toLowerCase().startsWith(searchVal);
    }).map(data => `<li onclick="updateNameCalls_puts(this)">${data}</li>`).join("");
    options_101_calls_puts.innerHTML = arr ? arr : `<p>Oops! Calls & puts not found</p>`;
});

selectBtn_calls_puts.addEventListener("click", () =>{
    wrapper_101_calls_puts.classList.toggle("active");
});