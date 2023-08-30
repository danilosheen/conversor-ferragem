const btn = document.querySelector("#send");

btn.addEventListener("click", function(event){
    event.preventDefault();

    let name = document.querySelector("#text-name");

    let value = name.value;

    console.log(value)
})

// document.getElementById("demo").innerHTML = "Hello JavaScript!";