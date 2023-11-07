let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
    
let name = window.prompt("What is your name?"," ");
let phone = prompt("What is your phone number?");
let email = prompt("What is your email?");
alert("Gracias por introducir los datos,");
let newContact = {name, phone, email};
contacts.push(newContact);

let last = contacts.length - 1;
console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);