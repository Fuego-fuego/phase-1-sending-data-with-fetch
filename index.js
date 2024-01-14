// Add your code here
function submitData(userName,userEmail){

const dataObj = {
    name : userName,
    email : userEmail
}

return  (fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'           

        },
        body:JSON.stringify(dataObj),    
    })
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        const id = data.id;
        const p = document.createElement('p');
        p.textContent = id;
        document.body.appendChild(p);
    }))
    .catch(function (error){
        const errorMessage = error.message;
        const p = document.createElement('p');
        p.textContent = errorMessage;

        document.body.appendChild(p);

    })
}
