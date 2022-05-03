import Verse from "./Verse";
import Download from "../../public/icons/download.svg";
import Copy from "../../public/icons/copy.svg";
import Next from "../../public/icons/next.svg";

const VerseBackground: React.FC = () => {
  return (
    <>
      {/* TODO: fix the width and height  */}
      <main className="gradient-bg content-shadow mx-auto flex h-[443px] w-[820px] items-center justify-center rounded-md p-10">
        <article>
          <Verse />
        </article>
      </main>

      {/* FLOATING BAR  */}

      <article className="floating-bar fixed bottom-16 left-0 right-0 z-20 mx-auto max-w-xs bg-pink-100">
        <div className="flex items-center justify-between space-x-5 rounded-xl py-1 px-2 text-xl">
          <button>
            <Next />
            <span>Next Verse</span>
          </button>
          <button>
            <Copy /> <span>Copy</span>
          </button>
          <button>
            <Download />
            <span>Download</span>
          </button>
        </div>
      </article>
    </>
  );
};

export default VerseBackground;
