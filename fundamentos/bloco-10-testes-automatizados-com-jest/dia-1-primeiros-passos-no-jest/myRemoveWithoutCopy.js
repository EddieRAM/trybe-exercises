function myRemoveWithoutCopy(arr, item) {
  // a func declara a variável len dentro do próprio for( não sabia que dava)
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) { // se o item passado for igual ao index
      arr.splice(index, 1); // coloca 1 na posição do index 
      index -= 1; // remove o 1
      len -= 1; // e diminui o length em 1
    }
  }

  return arr;
}

module.exports = myRemoveWithoutCopy;