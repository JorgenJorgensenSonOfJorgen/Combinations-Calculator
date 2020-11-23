let rep = false


document.addEventListener("keyup", update)
document.getElementById("repetitions").addEventListener("click", updateR)
function updateR(){
    document.getElementById("repetitions").classList.toggle("on")
    rep =!rep
    update()
}
function update() {
let r = Number(document.getElementById("r").value)
let n = Number(document.getElementById("n").value)
let output = document.getElementById("output")
output.innerHTML = Math.round(calcCombs(n,r))
if (output.innerHTML == "NaN") {
    output.innerHTML = "stop yourself"
}
}

function calcCombs(n,r) {
    if (rep) {
        if (n ==0){
            return 1
        } else
            return  factorial(n+r-1)/factorial(r)/factorial(n-1);
    } else {
        if(r>n){
            r=n
            return factorial(n)/factorial(n-r)/factorial(r)
        } else {
            return factorial(n)/factorial(n-r)/factorial(r)
        }
    }
}

function factorial(x) {
    if (x < 0){
        return "sdasdsadas"
    } else if (x ==0) {
        return 1
    } else if (x > 0){
        return (x* factorial(x-1))
    } 
}
