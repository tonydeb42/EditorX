let html=document.getElementById("html");
let css=document.getElementById("css");
let js=document.getElementById("js");
let result=document.getElementById("result");
setInterval(run,1000);
function run(){
    result.contentDocument.body.innerHTML=html.value+(`<style>${css.value}</style>`);
    result.contentWindow.eval(js.value);
}