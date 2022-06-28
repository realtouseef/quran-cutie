import { useState, useEffect } from "react";
import { VerseProps } from "../utils/types";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState<VerseProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean | null>(null);

  const randomNumber = Math.floor(Math.random() * 6236) + 1;
  const url = `${process.env.NEXT_PUBLIC_VERSE_URL}/${randomNumber}`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  const refetch = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
