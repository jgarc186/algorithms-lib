function blackjackProbability(target, startingHand) {
    const memo = {};
    return Number(getProbability(startingHand, target, memo)).toFixed(3);
}

function getProbability(current, target, memo) {
    if (memo[current]) {
        return memo[current];
    }

    if (current > target) {
        return 1;
    }

    if (current + 4 >= target) {
        return 0;
    }

    let prob = 0;
    for (let i = 1; i < 11; i++) {
        prob += 0.1 * getProbability(i + current, target, memo);
    }

    memo[current] = prob;
    return prob;
}
