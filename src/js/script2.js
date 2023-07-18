allexpences = [];
budget = 0;
id = 1;
let editExpenseId = -1;
const inputBudget = document.getElementById("input-budget");
const inputExpense = document.getElementById("input-cost-expense");
const titleExpense = document.getElementById("input-title-expense");
const setBudget = document.getElementById("set-budget");
const checkAmount = document.getElementById("check-amount");
const totalBudget = document.getElementById("total-budget");
const calcExpenses = document.getElementById("expences");
const calcBalances = document.getElementById("balances");
//const ul=document.getElementById('ul')

//---------------------------------for create elements-------------------------------------------------

let div = document.createElement("div");
let h1 = document.createElement("h1");
let ul = document.createElement("ul");

//--------------------class list-----------------------------------------------------------------------
div.classList.add("rounded", "p-4", "shadow", "mt-8");
h1.classList.add("font-bold", "mb-2");
h1.innerText = "Expense List";

//---------------------------appends-------------------------------------------------------------------
let parentDiv = document.documentElement.lastElementChild.firstElementChild;
parentDiv.appendChild(div);
div.appendChild(h1);
div.appendChild(ul);

//--------------------------local storage------------------------------------------------------------------------------
let localArray = JSON.parse(localStorage.getItem("ExpensesList"));
let localBudget = JSON.parse(localStorage.getItem("budget"));
budget = localBudget;
if (localArray.length >= 1) {
  allexpences = localArray;
} else {
  allexpences = [];
  div.style.display = "none";
}

//-------------------------window loading  -----------------------------------------------------------------
window.onload = showExpenses();
window.onload = showBalance();
window.onload = showExpenseList();

//---------------------------------------------------------------------------------------------------------

setBudget.addEventListener("click", addBudget);
checkAmount.addEventListener("click", addExpense);

//----------------------------------------------------------------------------------------------------------
function addBudget(e) {
  e.preventDefault();
  let newBudget = +inputBudget.value.trim();
  budget = newBudget;
  localStorage.setItem("budget", JSON.stringify(budget));
  showBalance();
  inputBudget.value = "";
}
function showExpenseList() {
  ul.innerHTML = "";
  //if(allexpences.length <1){
  // div.style.display = "none";
  //}
  //else{

  allexpences.forEach((element) => {
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    let span = document.createElement("span");
    let divIcons = document.createElement("div");

    li.classList.add(
      "flex",
      "justify-between",
      "p-4",
      "border-l-4",
      "border-blue-700",
      "mb-2"
    );
    divIcons.classList.add("flex", "gap-12");
    //----------------------------------------------------

    li.appendChild(h2);
    li.appendChild(span);
    li.appendChild(divIcons);
    h2.innerText = `${element.title}`;
    span.innerText = `${element.cost}`;
    divIcons.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                           class="w-6 h-6 text-blue-500"
                           id="icon-edit"
                           onclick="editExpense(${element.id})"
                           >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                           
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="w-5 h-5 text-blue-500 mr-4 "
                            id="icon-trash"
                            onclick="deleteExpense(${element.id})"
                           
                        >
                            <path
                            fill-rule="evenodd"
                            d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                            clip-rule="evenodd"
                            />
                        </svg>`;

    ul.appendChild(li);
  });
  //}
}

function addExpense(e) {
  console.log(e);
  e.preventDefault();
  let newTitleExpense = titleExpense.value.trim();
  let newInputExpense = +inputExpense.value.trim();

  if (editExpenseId > 0) {
    let editExpense = allexpences.find((t) => t.id === editExpenseId);
    editExpense.title = newTitleExpense;
    editExpense.cost = newInputExpense;
    editExpenseId = -1;
    localStorage.setItem("ExpensesList", JSON.stringify(allexpences));
  } else {
    let newExpense = {
      id: id++,
      title: newTitleExpense,
      cost: newInputExpense,
    };

    allexpences.push(newExpense);
    localStorage.setItem("ExpensesList", JSON.stringify(allexpences));
  }

  console.log(allexpences);

  titleExpense.value = "";
  inputExpense.value = "";

  //---------------------
  showExpenses();
  showBalance();
  showExpenseList();
}

function sumExpenses() {
  let sum = 0;
  return allexpences.reduce((sum, t) => t.cost + sum, 0);
}
function calcFinalBalances() {
  return budget - sumExpenses();
}
function showExpenses() {
  calcExpenses.innerText = sumExpenses();
}
function showBalance() {
  totalBudget.innerText = `${budget}`;
  let finalBalance = calcFinalBalances();
  if (calcBalances.value === 0) {
    calcBalances.innerHTML = budget;
  } else {
    calcBalances.innerHTML = `${finalBalance}`;
  }
}
function editExpense(id) {
  let editExpense = allexpences.find((t) => t.id === id);
  titleExpense.value = editExpense.title;
  inputExpense.value = editExpense.cost;
  editExpenseId = id;
  localStorage.setItem("ExpensesList", JSON.stringify(allexpences));
  //localStorage.setItem("ToDoList", JSON.stringify(alltasks));
  //showExpenseList()
}
function deleteExpense(id) {
  allexpences.forEach((item, index, allexpences) => {
    if (item.id === id) {
      allexpences.splice(index, 1);
    }
  });
  localStorage.setItem("ExpensesList", JSON.stringify(allexpences));
  showExpenses();
  showBalance();
  showExpenseList();
}
