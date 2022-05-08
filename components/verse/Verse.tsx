// import {VerseProps } from '../../utils/types'
import useFetch from "../../hooks/useFetch";

const Verse: React.FC = () => {
  const { storeVerse, isLoading } = useFetch();

  return (
    // TODO: change bg-color
    <main className="verse-bg mx-auto flex min-h-[250px] min-w-[200px] max-w-[650px] flex-col justify-between rounded-md py-8 px-8 text-center text-sm text-gray-500 drop-shadow-2xl">
      {isLoading && <p>Loading, please wait...</p>}
      <div>
        <p className="text-2xl">{storeVerse?.surah.name}</p>
      </div>
      <article className="mt-8 mb-10 text-right  text-2xl leading-loose text-black">
        {storeVerse?.text}
      </article>
      <p className="text-xl">
        {storeVerse?.surah.number}:{storeVerse?.numberInSurah}
      </p>
      <p>Revelation Type: {storeVerse?.surah.revelationType}</p>
    </main>
  );
};

export default Verse;
