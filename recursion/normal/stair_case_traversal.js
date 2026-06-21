function staircaseTraversal(height, maxSteps) {
    let current = 0;
    let waysToTop = [1];

    for (let i = 1; i <= height + 1; i++) {
        const start = i - maxSteps - 1;
        const end = i - 1;

        if (start >= 0) {
            current -= waysToTop[start];
        }

        current += waysToTop[end];
        waysToTop.push(current);
    }

    return waysToTop[height];
}
