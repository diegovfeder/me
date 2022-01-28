// BinaryGap
// Find longest sequence of zeros in binary representation of an integer.

const findLongestSequenceOfZeros = (n) => {
  let binary = findBinaryRepresentation(n);
  let binaryAsArray = binary.split('');
  // console.log(binaryAsArray);
  let longestSequence = 0;
  let currentSequence = 0;

  for (let i = 0; i < binaryAsArray.length; i++) {
    if (binaryAsArray[i] === '0') {
      currentSequence++;
    } 
    if (binaryAsArray[i] === '1') {
      currentSequence = 0;
    }
    if (currentSequence >= longestSequence) {
      longestSequence = currentSequence;
    }
    
  }
  // console.log({ currentSequence });
  // console.log({ longestSequence });
  return longestSequence;
}

const findBinaryRepresentation = (n) => {
  let binary = n.toString(2);
  let result = '';
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0') {
      result += '0';
    } else {
      result += '1';
    }
  }
  return result;
}

console.log({binary: findBinaryRepresentation(32)})
console.log({longestSequenceOfZeros: findLongestSequenceOfZeros(32)})
