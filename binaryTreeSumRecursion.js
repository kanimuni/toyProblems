// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!
// you'll need to create a binary tree constructor!

function BinaryTree(value, left, right) {
  this.value = value || null;
  this.left = left || null;
  this.right = right || null;
}

var binaryTreeSum = function(tree){
  var sum = tree.value || 0;
  if (tree.left) sum += binaryTreeSum(tree.left);
  if (tree.right) sum += binaryTreeSum(tree.right);
  return sum;
};

var tree = new BinaryTree(100);
tree.left = new BinaryTree(100);
tree.right = new BinaryTree(100);
tree.right.left = new BinaryTree(200);
tree.right.right = new BinaryTree(200);
tree.left.left = new BinaryTree(200);
tree.left.right = new BinaryTree(200);

console.log(binaryTreeSum(tree));