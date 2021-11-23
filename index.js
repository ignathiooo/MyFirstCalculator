
    function getData(){
        const input1 = parseFloat(document.querySelector('#value1').value);
        const input2 = parseFloat(document.querySelector('#value2').value);

        return{
            first: input1,
            second: input2,
            firstValue: input1,
            secondValue: input2,
            isValid: input1 !== '' && input2 !== '',
        };
    }
    function add(){
        const data = getData()
        if (data.isValid) {
        const result = data.firstValue + data.secondValue;
        document.querySelector('#result').innerHTML = result;
        }
    }
    document.querySelector('#ADD').addEventListener('click',add);
    
    function subtract(){
        const data = getData()
        if (data.isValid) {
        const result = data.firstValue - data.secondValue;
        document.querySelector('#result').innerHTML = result;
        }
    }
    document.querySelector('#SUBTRACT').addEventListener('click',subtract);
    
    function multiply(){
        const data = getData()
        if (data.isValid) {
        const result = data.firstValue * data.secondValue;
        document.querySelector('#result').innerHTML = result;
    }
    }
    document.querySelector('#MULTIPLY').addEventListener('click',multiply);

    function divide(){
        const data = getData()
        if (data.isValid) {
            const result = data.firstValue / data.secondValue; 
        document.querySelector('#result').innerHTML = result;
    }
}
    document.querySelector('#DIVIDE').addEventListener('click',divide);
