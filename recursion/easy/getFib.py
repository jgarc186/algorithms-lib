def getFib(n, memoize = {1: 0, 2: 1}):
    if n not in memoize:
        memoize[n] = getFib(n - 1, memoize) + getFib(n - 2, memoize)
    return memoize[n]
