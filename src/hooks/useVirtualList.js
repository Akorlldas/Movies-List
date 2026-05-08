import { useMemo } from "react";

export function useVirtualList({
  items,
  itemHeight,
  containerHeight,
  scrollTop,
  overscan = 6,
}) {
  return useMemo(() => {
    const safeItems = items ?? [];
    const total = safeItems.length;

    if (!total) {
      return { visibleItems: [], topSpacerHeight: 0, bottomSpacerHeight: 0 };
    }

    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const visibleCount = Math.ceil(containerHeight / itemHeight) + overscan * 2;
    const endIndex = Math.min(total, startIndex + visibleCount);

    return {
      visibleItems: safeItems.slice(startIndex, endIndex),
      topSpacerHeight: startIndex * itemHeight,
      bottomSpacerHeight: Math.max(0, (total - endIndex) * itemHeight),
    };
  }, [items, itemHeight, containerHeight, scrollTop, overscan]);
}
