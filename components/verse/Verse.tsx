import { useState, useEffect } from "react";

const Verse = () => {
  const [storeVerse, setStoreVerse] = useState<string>("");

  useEffect(() => {
    async function getVerse() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_VERSE_URL}/13`);
      const verse = await res.json();
      // console.log("verse.data", verse.data.text);
      //TODO: set this to "data" only
      //TODO: fix the type err
      setStoreVerse(verse.data.text);
    }
    getVerse();
  }, []);

  return (
    // TODO: change bg-color
    <div className="min-h-[250px] min-w-[200px] max-w-2xl rounded-md bg-white/90 py-10 px-8 text-right text-xl drop-shadow-2xl">
      {/* {storeVerse} */}
      hello
    </div>
  );
};

export default Verse;
