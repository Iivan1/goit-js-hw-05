const sortByDescendingFriendCount = (users) => {
  const sortValue = users.toSorted(
    (a, b) => b.friends.length - a.friends.length
  );
  return sortValue;
};
