export const range = (start, end) => {
  let length = end - start + 1;
  // mengembalikan array dengan elemen dari awal hingga akhir
  return Array.from({ length }, (_, idx) => idx + start);
};
