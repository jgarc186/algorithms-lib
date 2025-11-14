function getFib(n, memo = {1: 0, 2: 1}) {
    if (!memo[n]) {
        memo[n] = getFib(n - 1, memo) + getFib(n - 2, memo);
    }
    return memo[n];
}
