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
     
let menu = "Seleccione una opción:\n" +
            "1. Mostrar el primer contacto\n" +
            "2. Mostrar el último contacto\n" +
            "3. Añadir un nuevo contacto";
    
let opcion = prompt(menu);
    
switch (opcion) {
    case "1":
        if (contacts.length > 0) {
            alert(`Primer contacto:\n${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
        } else {
            alert("No hay contactos disponibles.");
        }
    break;
    case "2":
        if (contacts.length > 0) {
            let lastContact = contacts[contacts.length - 1];
            alert(`Último contacto:\n${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`);
        } else {
            alert("No hay contactos disponibles.");
        }
    break;
    case "3":
        let name = prompt("Nombre del nuevo contacto:");
        let phone = prompt("Número de teléfono del nuevo contacto:");
        let email = prompt("Correo electrónico del nuevo contacto:");
        if (name && phone && email) {
            let newContact = { name, phone, email };
            contacts.push(newContact);
            alert("Nuevo contacto añadido correctamente.");
        } else {
            alert("Todos los datos son necesarios. El contacto no se ha añadido.");
        }
    break;
    default:
        alert("Opción no válida.");
    break;
}