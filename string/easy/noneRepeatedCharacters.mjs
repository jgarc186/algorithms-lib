function nonRepeatedCharacters(strings) {
    const smallestString = getSmallest(strings);
    const pontetial = new Set(smallestString);
    strings.forEach(string => {
        removeNonDuplicate(string, pontetial);
    });
    return pontetial.values();
}

function getSmallest(array) {
    let smallest = array[0];
    array.forEach(element => {
        if (element.length < smallest.length) {
            smallest = element;
        }
    });
    return smallest;
}

function removeNonDuplicate(string, pontetial) {
    const unique = new Set(string);
    pontetial.forEach(character => {
        if (!unique.has(character)) {
            pontetial.delete(character);
        }
    });
}

const strings = [
    "hello world",
    "this is hello world",
    "this"
];

console.log(nonRepeatedCharacters(strings));
