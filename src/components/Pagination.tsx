"use client";
import { PageInfo } from "@/types";
import { Button, Flex } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
  pageInfo: PageInfo;
};

// range pages
function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

// generate pagination
function pagination(currentPage: number, totalPages: number) {
  const leftSiblingIndex = Math.max(currentPage - 1, 1);
  const rightSiblingIndex = Math.min(currentPage + 1, totalPages);

  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftItemCount = 3;
    const leftRange = range(1, leftItemCount + 2);

    return [...leftRange, "...", totalPages];
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightItemCount = 3;
    const rightRange = range(totalPages - rightItemCount - 1, totalPages);

    return [firstPageIndex, "...", ...rightRange];
  }

  if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);

    return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
  }

  return range(1, totalPages);
}

export default function Pagination({ pageInfo }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("page");

  // Go to prev page handler
  const handlePageChangePrev = () => {
    router.push(
      `/info?page=${pageInfo.currentPage - 1}&per_page=${pageInfo.perPage}`
    );
  };

  // Go to next page handler
  const handlePageChangeNext = () => {
    router.push(
      `/info?page=${pageInfo.currentPage + 1}&per_page=${pageInfo.perPage}`
    );
  };

  // Go to page with number handler
  const handlePageChangeNum = (pageNum: number | string) => {
    if (pageNum === "...") {
      handlePageChangeNext();
      return;
    }

    router.push(`/info?page=${pageNum}&per_page=${pageInfo.perPage}`);
  };

  return (
    <div>
      {pageInfo.total > 0 && (
        <Flex className="pagination" gap={2} justifyContent="center">
          {/* Arrow left */}
          <Button size="xs" onClick={handlePageChangePrev} disabled={pageInfo.currentPage === 1}>
            <FaChevronLeft />
          </Button>

        {/* Padination numbers and dots */}
          <Flex gap={1} flexWrap="wrap">
            {pagination(
              pageInfo.currentPage,
              100
            ).map((el, i) => (
              <Button
                key={i}
                size="xs"
                variant="unstyled"
                onClick={() => handlePageChangeNum(el)}
                border="1px solid transparent"
                borderColor={
                  search && +search === el ? "blue.400" : "transparent"
                }
              >
                {el}
              </Button>
            ))}
          </Flex>

          {/* Arrow right */}
          <Button size="xs" onClick={handlePageChangeNext} disabled={pageInfo.currentPage === 100}>
            <FaChevronRight />
          </Button>
        </Flex>
      )}
    </div>
  );
}
