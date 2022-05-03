import Verse from "./Verse";
import Download from "../../public/icons/download.svg";
import Copy from "../../public/icons/copy.svg";
import Next from "../../public/icons/next.svg";

const VerseBackground: React.FC = () => {
  const width = 20;

  return (
    <>
      {/* TODO: fix the width and height  */}
      <main className="gradient-bg content-shadow max=w-[820px] mx-auto max-h-[443px] rounded-md p-10">
        <article>
          <Verse />
        </article>
      </main>

      {/* FLOATING BAR  */}

      <article className="floating-bar fixed bottom-[10%] left-0 right-0 z-20 mx-auto max-w-sm rounded-lg p-1 text-gray-500">
        <div className="flex items-center justify-between divide-x divide-gray-300 text-[12px]">
          <div className="flex items-center justify-center">
            <div className="floating-btn-center floatHover cursor-pointer">
              <button className="gradient-bg relative h-6 w-6 rounded-full border-2 border-white"></button>
              <span className="floatMarginTrack">Color</span>
            </div>
            <button className="floating-btn-center floatHover">
              <Next width={width} />
              <span className="floatMarginTrack">Next Verse</span>
            </button>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <button className="floating-btn-center floatHover ml-2">
              <Copy width={width} />{" "}
              <span className="floatMarginTrack">Copy</span>
            </button>
            <button className="floating-btn-center floatHover floatBtnDownload">
              <Download width={width} />
              <span className="floatMarginTrack">Download</span>
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default VerseBackground;
