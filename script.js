
const balance = document.getElementById("balance");

const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById("list");
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');


let transactions = [];

// add transactions

function addTransaction(e){
    e.preventDefault();
    if(text.value.trim()==="" || amount.value.trim()==="" ){
        alert("please enter text and value")
    }
    else{
        const transaction ={
            id:generateId(),
            text:text.value,
            amount:+amount.value,
        };
        transactions.push(transaction);
        addTransactionsDOM(transaction);
        updatevalue();
        text.value="";
        amount.value="";
    }
}

// generate id

function generateId(){
    return Math.floor(Math.random()*100000000);
}



function addTransactionsDOM(trans) {
    const sign = trans.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(trans.amount < 0 ? "minus" : "plus");
    item.innerHTML = `${trans.text}<span>${sign}${Math.abs(trans.amount)}</span>
        <button class="delete-btn">x</button>`;
    list.appendChild(item);
}
function updatevalue(){
    const amounts=transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);

    const income = amounts.filter(item => item>0).reduce((acc,item) => (acc += item),0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0)*-1).toFixed(2);

    balance.innerText= `$${total}`
    money_plus.innerText= `$${income}`
    money_minus.innerText= `$${expense}`
}

function init(){
list.innerHTML="";
//transactions.forEach(addTransactionsDOM)
//console.log(transactions)
// updatevalue();
}


//addTransactionsDOM(transactions);
init()

form.addEventListener("submit",addTransaction)







