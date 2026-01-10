import { useEffect, useRef, useState, type RefObject } from "react";

interface UseElementOnScreenOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

export default function useElementOnScreen(
  options: UseElementOnScreenOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  }
): [RefObject<HTMLDivElement | null>, boolean] {
  const contRef = useRef<HTMLDivElement>(null); // ref for the element to observe
  const [isVisible, setIsVisible] = useState(false); // state for visibility

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (contRef.current) {
      observer.observe(contRef.current);
    }

    return () => {
      if (contRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(contRef.current);
      }
    };
  }, [contRef, options]);

  return [contRef, isVisible];
}
