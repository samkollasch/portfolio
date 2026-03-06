import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";

/**
 * Hook for detecting when window width crosses a threshold
 * Optimized with debouncing and passive event listeners
 *
 * @param threshold - The width threshold in pixels
 * @returns boolean indicating if current width is <= threshold
 */
const useWindowResizeThreshold = (
  threshold: number,
  debounceTime: number = 300,
) => {
  // Fix for SSR/hydration mismatch and linter warning: Initialize state safely
  const [isMobile, setIsMobile] = useState(() => {
    // This function only runs once during initial render.
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(`(max-width: ${threshold}px)`);
      return mediaQuery.matches;
    }
    // Default to false for SSR
    return false;
  });

  const prevWidth = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // useLayoutEffect is used for synchronous DOM reads (ref update) after the initial render.
  useLayoutEffect(() => {
    // Only update the ref for subsequent calculations.
    if (typeof window !== "undefined") {
      // Set the initial width for the 'prevWidth' ref
      prevWidth.current = window.innerWidth;
    }
  }, [threshold]);

  const debouncedHandleResize = useCallback(() => {
    const currWidth = window.innerWidth;
    // Update state only when the threshold is crossed to prevent unnecessary renders
    if (currWidth <= threshold && prevWidth.current > threshold) {
      setIsMobile(true);
    } else if (currWidth > threshold && prevWidth.current <= threshold) {
      setIsMobile(false);
    }
    prevWidth.current = currWidth;
  }, [threshold]);

  // The main effect handles setting up and tearing down the side effect (event listener).
  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Set a new timeout for debounced execution
      timeoutRef.current = setTimeout(debouncedHandleResize, debounceTime);
    };

    // Use passive event listener for better performance
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [debouncedHandleResize, debounceTime]); // Includes required dependencies

  return isMobile;
};

/**
 * Optimized hook for mobile detection with 768px breakpoint
 *
 * @returns boolean indicating if current width is <= 768px
 */
export const useIsMobile = () => useWindowResizeThreshold(768);

/**
 * Optimized hook for tablet detection with 1081px breakpoint
 *
 * @returns boolean indicating if current width is <= 1081px
 */
export const useIsTablet = () => useWindowResizeThreshold(1081);

// Default export for the generic hook
export default useWindowResizeThreshold;
