import Verse from "./Verse";
import Download from "../../public/icons/download.svg";
import Copy from "../../public/icons/copy.svg";
import Next from "../../public/icons/next.svg";

const VerseBackground: React.FC = () => {
  const width = 20;

  return (
    <>
      {/* TODO: fix the width and height  */}
      <main className="gradient-bg content-shadow mx-auto flex h-[443px] w-[820px] items-center justify-center rounded-md p-10">
        <article>
          <Verse />
        </article>
      </main>

      {/* FLOATING BAR  */}

      <article className="floating-bar fixed bottom-[10%] left-0 right-0 z-20 mx-auto  max-w-xs rounded-lg p-1 text-gray-500">
        <div className="flex items-center justify-between space-x-5 text-[12px]">
          <button className="floating-btn-center floatHover">
            <Next width={width} />
            <span className="mt-2 tracking-wide">Next Verse</span>
          </button>
          <button className="floating-btn-center floatHover">
            <Copy width={width} />{" "}
            <span className="mt-2 tracking-wide">Copy</span>
          </button>
          <button className="floating-btn-center floatHover floatBtnDownload">
            <Download width={width} />
            <span className="mt-2 tracking-wide">Download</span>
          </button>
        </div>
      </article>
    </>
  );
};

export default VerseBackground;
