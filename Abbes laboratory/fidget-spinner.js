
let looper;
let degrees = 0;

const spinner = (elementInput, speedInput) => {
    const element = document.getElementById(elementInput);
    element.style.transform = "rotate("+degrees+"deg)";
    looper = setTimeout('spinner(\''+elementInput+'\','+speedInput+')', speedInput);
    degrees++;
    if (degrees > 359){
        degrees = 1;
    }
    document
};