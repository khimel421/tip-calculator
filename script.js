const bill = document.querySelector('.bill_amount');

const tip = document.querySelectorAll('.amount_box')

const person = document.querySelector('.person');
const text = document.querySelector('.text');
const text_top = document.querySelector('.top');
const text_bottom = document.querySelector('.bottom');
const reset_button = document.querySelector('.btn');
const person_bill = document.querySelector('.person_bill');
const person_tip = document.querySelector('.person_tip');
let box_value = -1;

let person_num = 0


function display_bill(y){
    let x = Number(bill.value);
    if (person.value === ""){
         person_num = 1;
    }
    else{
         person_num = Number(person.value);
    }
    
    //let y =tip.value;
    //console.log(y);
    //console.log(typeof(x));
    let tip_amount =( x*y) / person_num;
    let total_bill = ((x*y) + x) / person_num;

    let tip_amount_box = document.createElement('div');

    tip_amount_box.classList.add('tip_amount_box');

    let bill_amount_box = document.createElement('div');

    bill_amount_box.classList.add('bill_amount_box');

    tip_amount_box.textContent = tip_amount.toFixed(2);
    bill_amount_box.textContent = total_bill.toFixed(2);

    const tip_Nodes = text_top.childNodes;
    const bill_Nodes = text_bottom.childNodes;


    if(tip_Nodes.length > 5 && bill_Nodes.length > 5){
        text_top.removeChild(text_top.lastChild);    
        text_bottom.removeChild(text_bottom.lastChild);
        text_top.appendChild(tip_amount_box);
        text_bottom.appendChild(bill_amount_box);
        
    
    }
    else{
        text_top.appendChild(tip_amount_box);
        text_bottom.appendChild(bill_amount_box);
    }
}



for(i = 0; i < tip.length; i++){
    let index = tip[i].value;

    console.log(index);

    let color = 'red';
    let tip_num = tip[i];
    let num = i;
    
    
    
    tip_num.addEventListener('click', () => {
       window.bill_list =  display_bill(index);
       }
    )
    }






//reset___button___

reset_button.addEventListener('click' , () => {
    const tip_Nodes = text_top.childNodes;
    const bill_Nodes = text_bottom.childNodes;
    
    if(tip_Nodes.length > 5 && bill_Nodes.length > 5){
        text_top.removeChild(text_top.lastChild);    
        text_bottom.removeChild(text_bottom.lastChild);
        bill.value = '';
        person.value = '';
            
    }

    console.log(tip_Nodes);
    console.log(bill_Nodes);

})
