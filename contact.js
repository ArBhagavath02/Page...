const form = document.querySelector("#Myform");
form.addEventListener("submit",(Event)=>{
    event.preventDefault();

    const formData = new FormData(form);

    for(let entry of formData.entries()){
        console.log(entry[0]+':'+entry[1]);
    }
})