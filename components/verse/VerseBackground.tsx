import Verse from "./Verse";

const VerseBackground: React.FC = () => {
  return (
    <>
      <main className="mx-auto flex max-w-2xl items-center justify-center rounded-md bg-gradient-to-br from-pink-200 to-purple-200 p-10">
        <article>
          <Verse />
        </article>
      </main>
    </>
  );
};

export default VerseBackground;
