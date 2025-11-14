import { swap } from "./swap.mjs";

// find me all the possible permutations of the given phone number
function permutations(array) {
    let permutations = [];
    getPermutations(0, array, permutations);
    return permutations;
}

function getPermutations(idx, array, permutations) {
    if (idx === array.length - 1) {
        permutations.push([...array]);
    } else {
        for (let j = idx; j <= array.length - 1; j ++) {
            swap(idx, j, array);
            getPermutations(idx + 1, array, permutations);
            swap(idx, j, array);
        }
    }
}

console.log(permutations([1, 2]));
