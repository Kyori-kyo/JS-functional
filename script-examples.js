// var variable 
// values: string ("abc"); number (123); boolean (t/false); undefined (func()); null (number=(A))

// let array = ['0',1,2,true]

// let objeto = {
//     ob1 = true,
//     ob2 = 1,
//     obj3 = "cavalo"
// }

//
document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll(".button").forEach(button => {
        button.onclick = () => {
            document.querySelector('h1').style.color = button.dataset.color;
        }; 
    });




    
});