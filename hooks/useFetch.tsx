import { useState, useEffect } from "react";
import { VerseProps } from "../utils/types";
import axios from "axios";

const useFetch = () => {
  const [surahData, setSurahData] = useState<VerseProps | string[]>([""]);
  const [arabicData, setArabicData] = useState<VerseProps | string[]>([""]);
  const [englishData, setEnglishData] = useState<VerseProps | string[]>([""]);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  const randomNumber = Math.floor(Math.random() * 6236) + 1;
  const arabicDataUrl = `${process.env.NEXT_PUBLIC_VERSE_URL}/${randomNumber}`;
  const englishDataUrl = `${process.env.NEXT_PUBLIC_VERSE_URL}/${randomNumber}/en.sahih`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .all([axios.get(arabicDataUrl), axios.get(englishDataUrl)])
      .then(
        axios.spread((arabicDataUrl, englishDataUrl) => {
          setSurahData(arabicDataUrl.data.data.surah);
          setArabicData(arabicDataUrl.data.data);
          setEnglishData(englishDataUrl.data.data);
        })
      )
      .finally(() => setIsLoading(false));
  }, []);

  const refetch = () => {
    setIsLoading(true);
    axios
      .all([axios.get(arabicDataUrl), axios.get(englishDataUrl)])
      .then(
        axios.spread((arabicDataUrl, englishDataUrl) => {
          setArabicData(arabicDataUrl.data.data);
          setEnglishData(englishDataUrl.data.data);
        })
      )
      .finally(() => setIsLoading(false));
  };

  return { isLoading, arabicData, englishData, surahData, refetch };
};

export default useFetch;
