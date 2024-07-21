const findTheOldest = function(people) {
    ageArray = []
    people.forEach((person) => {const hasDied = person.hasOwnProperty('yearOfDeath');
    if(!hasDied){
        var thisYear = new Date().getFullYear(0)
        person.age = (thisYear - person.yearOfBirth);
    } else {
        person.age = (person.yearOfDeath - person.yearOfBirth)
    }
    });
    console.log(`people unsorted: ${JSON.stringify(people)}`)
    people.sort((a,b) => b.age - a.age)
    console.log(`people sorted: ${JSON.stringify(people)}`)
    return people[0]
};


// Do not edit below this line
module.exports = findTheOldest;
