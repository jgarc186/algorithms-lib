function powerset(array) {
  const subset = [[]];

  array.forEach(element => {
    subset.forEach(value => {
      subset.push([...value, element])
    })
  });

  return subset;
}
