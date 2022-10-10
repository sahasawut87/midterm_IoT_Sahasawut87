document.addEventListener('DOMContentLoaded',function(){
    fetch('https://api.exchangerate.host/lastest?base=USD')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
});
