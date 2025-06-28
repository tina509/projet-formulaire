const form = document.createElement('form');
const labelnom = document.createElement('label');
labelnom.textContent = 'nom';
labelnom.className = 'firstname';

const inputnom = document.createElement('input');
inputnom.setAttribute('type', 'text');
inputnom.setAttribute('id', 'firstname');

const labelprenom = document.createElement('label');
labelprenom.textContent = 'prenom';
labelprenom.className = 'lastname';

const inputprenom = document.createElement('input');
inputprenom.setAttribute('type', 'text');
inputprenom.setAttribute('id', 'lastname');

const labelemail = document.createElement('label');
labelemail.textContent = 'email';
labelemail.className = 'email';

const inputemail = document.createElement('input');
inputemail.setAttribute('type', 'email');
inputemail.setAttribute('id', 'email');

const button = document.createElement('input');
button.setAttribute('type', 'submit');
button.setAttribute('value', 'Envoyer');

form.appendChild(labelnom);
form.appendChild(inputnom);
form.appendChild(labelprenom);
form.appendChild(inputprenom);
form.appendChild(labelemail);
form.appendChild(inputemail);
form.appendChild(button);


form.style.display = "flex";
form.style.justifyContent = "center";
form.style.flexDirection = "column";
form.style.width = "20%";
form.style.position = "absolute";
form.style.top = "50%";
form.style.left = "50%";
form.style.transform = "translate(-50%, -50%)";


document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.position = "relative";


button.style.marginTop = "10px";
button.style.height = "30px";
button.style.fontWeight = "bold";
button.style.backgroundColor = "green";
button.style.border = "none";
button.style.color = "white";
button.style.borderRadius = "50px";


document.body.appendChild(form);
