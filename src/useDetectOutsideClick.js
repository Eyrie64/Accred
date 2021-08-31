import { useState, useEffect } from "react";

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
  const [isAct, setIsAct] = useState(initialState);

  useEffect(() => {
    const onClick = e => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  useEffect(() => {
    const onPress = e => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsAct(!isAct);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isAct) {
      window.addEventListener("click", onPress);
    }

    return () => {
      window.removeEventListener("click", onPress);
    };
  }, [isAct, el]);


  return [isActive, setIsActive, isAct, setIsAct];

  
};