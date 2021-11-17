
    function add(){
        const input1 = parseFloat(document.querySelector('#value1').value);
        const input2 = parseFloat(document.querySelector('#value2').value);
        const result = input1 + input2;
        document.querySelector('#result').innerHTML = result;
        }
    }
    document.querySelector('#ADD').addEventListener('click',add);
    
    function subtract(){
        const input1 = document.querySelector('#value1').value;
        const input2 = document.querySelector('#value2').value;
        const result = input1 - input2;
        document.querySelector('#result').innerHTML = result;
    }
    
    document.querySelector('#SUBTRACT').addEventListener('click',subtract);
    
    function multiply(){
        const input1 = parseFloat(document.querySelector('#value1').value);
        const input2 = parseFloat(document.querySelector('#value2').value);
        const result = input1 * input2;
        document.querySelector('#result').innerHTML = result;
    }
    document.querySelector('#MULTIPLY').addEventListener('click',multiply);

    function divide(){
        const input1 = document.querySelector('#value1').value;
        const input2 = document.querySelector('#value2').value;
        const result = input1 / input2;
        document.querySelector('#result').innerHTML = result;
    }
    document.querySelector('#DIVIDE').addEventListener('click',divide);
