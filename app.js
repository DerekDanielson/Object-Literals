const person = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 31,
    email: 'bob@bob.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2023 - this.age;
    }
}

let val;

val = person;
//Get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'john', age: 31},
    {name: 'sue', age: 32}
];
