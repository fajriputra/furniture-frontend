export const sumQty = (items) => {
  return items.reduce((acc, curr) => acc + curr.qty, 0);
};
