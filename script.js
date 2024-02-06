let numbers = Array.from(document.getElementsByClassName("num"));
let op = Array.from(document.getElementsByClassName("op"));
let output = document.querySelector(".output");
let dot = document.querySelector(".dot");
let CE = document.querySelector(".CE");
let del = document.querySelector(".backspace");
let equal = document.querySelector(".equal");
let xsq = document.querySelector(".xsq");

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        // console.log(num.innerText);
        output.innerText += num.innerText;
    })
})

op.forEach((op) => {
    op.addEventListener("click", () => {
        if (output.innerText[output.innerText.length - 1] >= '0' && output.innerText[output.innerText.length - 1] <= '9')
            output.innerText += op.innerText;
    })
})

dot.addEventListener("click", () => {
    if (output.innerText[output.innerText.length - 1] >= '0' && output.innerText[output.innerText.length - 1] <= '9')
        output.innerText += dot.innerText;
})

CE.addEventListener("click", () => {
    output.innerText = "";
})

del.addEventListener("click", () => {
    output.innerText = output.innerText.substr(0, output.innerText.length - 1);
})

equal.addEventListener("click", () => {
    let s = output.innerText;
    let n = s.length;
    let temp = "";
    let temp2 = "";
    let op = 0;
    let ans = 0;
    let operator;

    for (let i = 0; i < n; i++) {
        if ((s[i] >= '0' && s[i] <= '9') || (s[i] === '.')) {
            temp += s[i];
        } else {
            operator=s[i];
            op++;
            if (op !== 1) {
                // Move these lines outside of the condition
                if (s[i] === '+')
                    ans += (parseFloat(temp) + parseFloat(temp2));

                if (s[i] === '-')
                    ans += (parseFloat(temp2) - parseFloat(temp));

                if (s[i] === '/')
                    ans += (parseFloat(temp2) / parseFloat(temp));
                if (s[i] === 'X')  // Make sure it's 'X', not 'x'
                    ans += (parseFloat(temp) * parseFloat(temp2));

                if (s[i] === '%')
                    ans += (parseFloat(temp) % parseFloat(temp2));
            }

            // Update temp2 after the condition
            temp2 = temp;
            temp = "";
        }
    }
    // Add the last operation outside the loop
    if(op==1)
    {
        if ('+' === operator)
        ans += (parseFloat(temp) + parseFloat(temp2));

    if ('-' === operator)
        ans += (parseFloat(temp2) - parseFloat(temp));

    if ('/' === operator)
        ans += (parseFloat(temp2) / parseFloat(temp));
    if ('X' === operator)  
        ans += (parseFloat(temp) * parseFloat(temp2));

    if ('%' === operator)
        ans += (parseFloat(temp) % parseFloat(temp2));
    }
    else
    ans += parseFloat(temp);
    output.innerText = ans;
});

xsq.addEventListener("click", ()=>{
    if (output.innerText[output.innerText.length - 1] >= '0' && output.innerText[output.innerText.length - 1] <= '9')
        output.innerText= Math.pow(parseFloat(output.innerText), 2);
})