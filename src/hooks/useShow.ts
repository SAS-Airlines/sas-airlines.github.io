import { useState, useEffect } from "react";

const useShow = <T>(items: T[]): [T[], boolean, () => void] => {
  const [showed, setShowed] = useState(5);
  const [showAll, setShowAll] = useState(showed >= items.length);
  const [showedItems, setShowedItems] = useState(items.slice(0, showed));

  const addItems = () => {
    if (showed + 5 > items.length) {
      setShowed(items.length);
      setShowAll(true);
    } else {
      setShowed(showed + 5);
    }
  };

  useEffect(() => {
    setShowedItems(items.slice(0, showed));
    setShowAll(showed >= items.length);
  }, [showed]);

  useEffect(() => {
    setShowed(5);
    setShowAll(false);
    setShowedItems(items.slice(0, 5));
  }, [items]);

  return [showedItems, showAll, addItems];
};

export default useShow;
