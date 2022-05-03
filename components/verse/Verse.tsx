import { useState, useEffect } from "react";
const randomNumber = Math.floor(Math.random() * 6236);

interface VerseProps {
  number: number;
  text: string;
  surah: SurahProp;
}

interface SurahProp {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
}

const Verse: React.FC = () => {
  const [storeVerse, setStoreVerse] = useState<VerseProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getVerse() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERSE_URL}/${randomNumber}`
    );
    const fetchedVerse = await response.json();
    setStoreVerse(fetchedVerse.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getVerse();
  }, []);

  return (
    // TODO: change bg-color
    <main className="min-h-[250px] min-w-[200px] rounded-md bg-white/90 py-10 px-8 text-center  drop-shadow-2xl">
      {isLoading && <p>Loading, please wait...</p>}
      <p>
        {storeVerse?.surah.name} — {storeVerse?.surah.englishName}
      </p>
      <p>{storeVerse?.surah.englishNameTranslation}</p>
      <article className="text-right text-2xl leading-loose">
        {storeVerse?.text}
      </article>
      <p>
        {storeVerse?.surah.number} : {storeVerse?.number}
      </p>
    </main>
  );
};

export default Verse;
