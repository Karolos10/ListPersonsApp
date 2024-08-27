
const persons = [
    new Person('John', 'Doe'),
    new Person('Jane', 'Doe'),
    new Person('Jim', 'Doe'),
];

function showPerson() {
    let text = '';
    for (const person of persons) {
        console.log(person);
        text += `<li>${person.name} ${person.lastname}</li>`; 
    }
    document.getElementById('person').innerHTML = text;
}

function addPerson() {
    const forma = document.forms['forma'];
    const name = forma['name'];
    const lastName = forma['lastName'];

    if (name.value != '' && lastName.value != '') {
        const person = new Person(name.value, lastName.value);
        persons.push(person);
        showPerson();
    } else {
        alert('Please fill in the fields');
    }
}