import { useEffect } from "react";

function useDocumentTitle(title) {
  useEffect(() => {
    if (!title) return;
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;
