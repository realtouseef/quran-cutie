// import {VerseProps } from '../../utils/types'
import useFetch from '../../hooks/useFetch'

const Verse: React.FC = () => {
  const {storeVerse, isLoading} = useFetch()

  return (
    // TODO: change bg-color
    <main className="flex min-h-[250px] min-w-[200px] flex-col justify-between rounded-md bg-white/90 py-8 px-8 text-center text-sm text-gray-500  drop-shadow-2xl">
      {isLoading && <p>Loading, please wait...</p>}
      <div>
        <p>
          <span className="text-2xl">{storeVerse?.surah.name}</span> —{" "}
          {storeVerse?.surah.englishName}
        </p>
        <p className="mt-2">{storeVerse?.surah.englishNameTranslation}</p>
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
