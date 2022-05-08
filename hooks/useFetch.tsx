import { useState, useEffect } from "react";
import { VerseProps } from "../utils/types";

const randomNumber = Math.floor(Math.random() * 6236);

const useFetch = () => {
  const [storeVerse, setStoreVerse] = useState<VerseProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getVerse = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERSE_URL}/${randomNumber}`
    );
    const fetchedVerse = await response.json();
    setStoreVerse(fetchedVerse.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getVerse();
  }, []);

  return { storeVerse, isLoading, getVerse };
};

export default useFetch;
