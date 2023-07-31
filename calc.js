function add(){
    let a=parseInt(document.getElementById('n1').value);
    let b=parseInt(document.getElementById('n2').value);
    let c=a+b;
    document.getElementById('button1').innerHTML="Addition of the given number is" +c;
}
function sub(){
    a=parseInt(document.getElementById('n1').value);
    b=parseInt(document.getElementById('n2').value);
    c=a-b;
    document.getElementById('button2').innerHTML="Difference of the given number is" +c;
}
function mul(){
    a=parseInt(document.getElementById('n1').value);
    b=parseInt(document.getElementById('n2').value);
    c=a*b;
    document.getElementById('button3').innerHTML="Product of the given number is" +c;
}
function divi(){
    a=parseInt(document.getElementById('n1').value);
    b=parseInt(document.getElementById('n2').value);
    c=a/b;
    document.getElementById('button4').innerHTML="Division of the given number is" +c;
}
function mod(){
    a=parseInt(document.getElementById('n1').value);
    b=parseInt(document.getElementById('n2').value);
    c=a%b;
    document.getElementById('button5').innerHTML="Remainder of the given number is" +c;
}