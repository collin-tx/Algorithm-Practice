// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

const truthCheck = (collection, pre) => {
  if (collection.every(i => !!i[pre] === true)){
    return true;
  }
  return false;
}