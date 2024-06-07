import { useCallback, useEffect } from "react";

export const useClickOutside = (ref, callback, outerRef) => {
  const handleClick = useCallback(
    (event) => {
      if (
        outerRef &&
        outerRef.current &&
        !outerRef.current.contains(event.target)
      )
        return;
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    },
    [callback, outerRef, ref]
  );
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  });
};
