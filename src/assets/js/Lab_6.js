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
     
function showContact(contactList, index){
    if (contactList instanceof Array && index >= 0 && index < contactList.length){
        let contact = contactList[index];
        console.log(`Contacto ${index + 1}:\n${contact.name} / ${contact.phone} / ${contact.email}`);
    } else{
        console.log("Error: Argumentos incorrectos para mostrar un contacto.");
    }
}
      
function showAllContacts(contactList){
    if (contactList instanceof Array){
        if (contactList.length > 0) {
            console.log("Todos los contactos:");
            for (let i = 0; i < contactList.length; i++) {
                console.log(`${i + 1}. ${contactList[i].name} / ${contactList[i].phone} / ${contactList[i].email}`);
            }
        } else{
            console.log("No hay contactos disponibles.");
        }
        } else{
            console.log("Error: Argumento incorrecto para mostrar todos los contactos.");
        }
}
function addNewContact(contactList, name, phone, email) {
    if (contactList instanceof Array && name && phone && email) {
        let newContact = { name, phone, email };
        contactList.push(newContact);
        console.log("Nuevo contacto añadido correctamente.");
    } else{
        console.log("Error: Argumentos incorrectos para añadir un nuevo contacto.");
    }
}
let menu = "Seleccione una opción:\n" +
            "1. Visualizar un contacto específico\n" +
            "2. Visualizar todos los contactos\n" +
            "3. Añadir un nuevo contacto\n" +
            "4. Salir del programa";
      
while (true) {
    let opcion = prompt(menu);
    switch (opcion) {
        case "1":
            let indexToShow = prompt("Ingrese el índice del contacto a mostrar:");
            showContact(contacts, parseInt(indexToShow) - 1);
        break;
        case "2":
            showAllContacts(contacts);
        break;
        case "3":
            let newName = prompt("Nombre del nuevo contacto:");
            let newPhone = prompt("Número de teléfono del nuevo contacto:");
            let newEmail = prompt("Correo electrónico del nuevo contacto:");
            addNewContact(contacts, newName, newPhone, newEmail);
        break;
        case "4":
            alert("Saliendo del programa.");
        break;
        default:
            alert("Opción no válida.");
        break;
    }
        
    if (opcion === "4") {
        break;
    }
}