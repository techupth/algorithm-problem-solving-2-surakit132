function findBookIndex(books, searchTitle) {
  let left = 0;
  let right = books.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (books[mid].title === searchTitle) {
      return mid;
  } else if (books[mid].title < searchTitle) {
      left = mid + 1;
  } else {
      right = mid - 1;
  }
}
return -1;
}

