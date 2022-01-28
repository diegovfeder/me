// Given a binary tree root, check if it's symmetrical around its center (a mirror of itself).
const binaryTree = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 1,
    }
  },
  right: {
    value: 3,
    right: {
      value: 1,
    }
  }
}

const isBinaryTreeSymmetricHelper = (left, right) => {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.value !== right.value) return false;
  return isBinaryTreeSymmetricHelper(left.left, right.right) && isBinaryTreeSymmetricHelper(left.right, right.left);
}

const isBinaryTreeSymmetric = (root) => {
  if (!root) return true;
  return isBinaryTreeSymmetricHelper(root.left, root.right);
}

console.log(isBinaryTreeSymmetric(binaryTree))

