{
  class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
  ): ListNode | null {
    const result = new ListNode();
    let current = result;
    while (list1 && list2) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
    current.next = list1 || list2;
    return result.next;
  }

  console.log(
    mergeTwoLists(
      new ListNode(1, new ListNode(2, new ListNode(4))),
      new ListNode(1, new ListNode(3, new ListNode(4)))
    )
  );
}
