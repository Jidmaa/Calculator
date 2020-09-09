class Calculator {
    constructor (previousOperand, currentOperand,operation) {
        this.previousOperand=previousOperand.innerText;
        this.currentOperand=currentOperand.innerText;
        this.operation=operation.innerText;
    }
    clear () {
        this.previousOperand='';
        previousOperand.innerText='';
        this.currentOperand='';
        currentOperand.innerText='';
    }
    appendNumber(number) {
       
        
        if (number=='.' && this.currentOperand.includes('.')) {
            number='';
        }
        
        this.currentOperand=this.currentOperand.toString() + number.toString();
        currentOperand.innerText=this.currentOperand;
}
 operate (operation) {
     this.previousOperand=this.currentOperand;
     previousOperand.innerText=currentOperand.innerText;
     this.currentOperand='';
     currentOperand.innerText='';
     if(this.previousOperand==='') {
         previousOperand.innerText='';
         return;
     }
     else {
     if (operation==='+') {
         previousOperand.innerText+='+';
         this.operation='+';
       
     }
     if (operation ==='-') {
         previousOperand.innerText+='-';
         this.operation='-';
     }
     if (operation === '÷') {
         previousOperand.innerText+='÷';
         this.operation='÷';
     } 
     if (operation === '×') {
         previousOperand.innerText+='×';
         this.operation='×';
     }
     if (operation ==='%') {
         previousOperand.innerText+='%';
         this.operation='%';
     }
    }
 }
 result () {
        if (this.previousOperand===''){
            return;
        }
        if(this.operation==='+') {
        var result = parseFloat(this.currentOperand,10)+parseFloat(this.previousOperand,10);
        }
        if(this.operation==='-'){
            var result = parseFloat(this.previousOperand,10) - parseFloat(this.currentOperand,10);
        }
        if(this.operation==='÷'){
            var result = parseFloat(this.previousOperand,10) / parseFloat(this.currentOperand,10);
        }
        if(this.operation==='×'){
            var result = parseFloat(this.previousOperand,10) * parseFloat(this.currentOperand,10);
        }
        
        // result=parseFloat(result,10);
        previousOperand.innerText=previousOperand.innerText+currentOperand.innerText;
        currentOperand.innerText=result;
        this.currentOperand=result.toString();
        this.previousOperand=null;
        this.operation='';
 }
 negative () {
        if (parseFloat(this.currentOperand,10) >= 0) {
            this.currentOperand = -this.currentOperand;
            currentOperand.innerText=this.currentOperand;
        }
        else {
            this.currentOperand = Math.abs(this.currentOperand);
            currentOperand.innerText='+'+this.currentOperand;
        }
    
 }
 delete () {
     this.currentOperand= this.currentOperand.toString().slice(0,-1);;
     currentOperand.innerText=this.currentOperand;
 }
}
const number = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const equals = document.querySelector('[data-equals]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const allClear = document.querySelector('[data-all-clear]');
const negative =document.querySelector('[data-negative]');
const del = document.querySelector('[data-delete]');
const calc = new Calculator(previousOperand,currentOperand,'');
number.forEach(element => {
    element.addEventListener("click", () => {
        
      
        if (calc.operation==='' && calc.previousOperand===null) {
            calc.clear();
            calc.appendNumber(element.innerText);
        }
        else {
            calc.appendNumber(element.innerText);
        }
})
});
allClear.addEventListener("click" , () => {
    calc.clear();
});
operation.forEach(element => {
    element.addEventListener("click", () => {
        calc.operate(element.innerText);
    })
})
equals.addEventListener("click", ()=> {
    if (calc.operation==='' || calc.currentOperand===''){
        return;
    }
    calc.result();
})
negative.addEventListener("click", ()=> {
    calc.negative();
})
del.addEventListener("click", () => {
    calc.delete();
})