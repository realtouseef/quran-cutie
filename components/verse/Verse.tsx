import { useState, useEffect } from "react";

type VerseProps = {
  data: {
    text: string;
  };
};

const Verse: VerseProps = () => {
  const [storeVerse, setStoreVerse] = useState<string>("");

  useEffect(() => {
    async function getVerse() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_VERSE_URL}/13`);
      const data = await res.json();
      console.log(data);
      setStoreVerse(data);
    }
    getVerse();
  }, []);

  let mainVerse = storeVerse.data.text;

  return (
    <div className="h-48 w-96 max-w-xl rounded-md bg-white/80 py-10 px-8 drop-shadow-2xl">
      {mainVerse}
    </div>
  );
};

export default Verse;
