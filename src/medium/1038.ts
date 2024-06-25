{
  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  function bstToGst(root: TreeNode | null): TreeNode | null {
    let sum = 0;

    dfs(root);
    return root;

    function dfs(node: TreeNode | null) {
      if (!node) return;
      dfs(node.right);
      sum += node.val;
      node.val = sum;
      dfs(node.left);
    }
  }
}
