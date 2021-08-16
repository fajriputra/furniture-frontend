import { useMemo } from "react";
import { range } from "helpers/rangePagination";

export const DOTS = "...";

export const usePagination = ({
  totalItems,
  perPage,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPages = Math.ceil(totalItems / perPage);

    // jumlah page ditentukan sbg sibling, first, last, current page
    const totalPageNumbers = siblingCount + 5;

    // case 1, jika jumlah halaman kurang dari jumlah yang ingin ditampilkan
    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    // hitung indeks kiri & kanan, pastikan berada dalam range 1
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    // hide dots ketika hanya 1 nomor halaman
    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // case 2, dots kiri tidak ditampilkan, melainkan dots kanan
    if (!showLeftDots && showRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPages];
    }

    // case 3, dots kanan tidak ditampilkan, melainkan dots kiri
    if (showLeftDots && !showRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPages - rightItemCount + 1, totalPages);

      return [firstPageIndex, DOTS, ...rightRange];
    }

    // case 4, dots dari kedua sisi ditampilkan
    if (showLeftDots && showRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalItems, perPage, siblingCount, currentPage]);

  return paginationRange;
};
