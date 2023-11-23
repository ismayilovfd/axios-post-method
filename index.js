// const name = document.getElementById("inpName");
// const surname = document.getElementById("inpSurname");
// const age = document.getElementById("inpAge");
// const email = document.getElementById("inpEmail");
// const submit = document.getElementById("formOne");


//     function fetchPost (event) {
//         event.preventDefault(axios.post("https://northwind.vercel.app/api/customers", {
//             name: name.value,
//             surname: surname.value,
//             age: age.value,
//             email: email.value,
            
//         }).then(res => {
//                 console.log(res);

//                 submit.reset();

//             }));
            
//                 }
                
//                 submit.addEventListener('submit', fetchPost)


                


const username = document.getElementById("inpUsername");
const email = document.getElementById("inpEmail");
const password = document.getElementById("inpPassword");
const address = document.getElementById("inpAddress");
const country = document.getElementById("inpCountry");
const submit = document.getElementById("formTwo");

function PostData (event) {

            event.preventDefault(axios.post("https://northwind.vercel.app/api/customers", {
                
                username: username.value,
                email: email.value,
                password: password.value,
                address: address.value,
                country: country.value,
                
            }).then(res => {
                    console.log(res);
    
                    submit.reset();
    
                }));
                
                    }
                    
                    submit.addEventListener('submit', PostData)




// const name = document.getElementById("inpName");
// const surname = document.getElementById("inpSurname");
// const fathername = document.getElementById("inpFathername");
// const fin = document.getElementById("inpFin");
// const email = document.getElementById("inpEmail");
// const submit = document.getElementById("form-data");

// function Datapost (event) {

//                 event.preventDefault(axios.post("https://northwind.vercel.app/api/customers", {
                    
//                     name: name.value,
//                     surname: surname.value,
//                     fathername: fathername.value,
//                     fin: fin.value,
//                     email: email.value,
                    
//                 }).then(res => {
//                         console.log(res);
        
//                         submit.reset();
        
//                     }));
                    
//                         }
                        
//                         submit.addEventListener('submit', Datapost)