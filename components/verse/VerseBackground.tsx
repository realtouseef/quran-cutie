import { toPng } from "html-to-image";
import { useRef, useCallback, useState } from "react";
import Download from "../../public/icons/download.svg";
import Copy from "../../public/icons/copy.svg";
import Next from "../../public/icons/next.svg";
import useFetch from "../../hooks/useFetch";

const VerseBackground: React.FunctionComponent = () => {
  const downloadRef = useRef<HTMLDivElement>(null);
  const [showColors, setShowColors] = useState<boolean>(false);
  const { refetch, isLoading, arabicData, englishData, surahData } = useFetch();
  const width = 20;
  // use window.innerHeight and innerWidth to resize the window
  // with useRef and reference it to the "gradient bg" to resize it.

  const onDownload = useCallback(() => {
    if (downloadRef.current === null) {
      return;
    }

    toPng(downloadRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "quran-cutie.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [downloadRef]);

  return (
    <>
      {/* TODO: fix the width and height  */}
      <main ref={downloadRef}>
        <article
          className={`gradient-bg content-shadow relative mx-auto my-10 max-h-[443px] max-w-[700px] rounded-md p-10`}
        >
          {/* <button className='resizeCircle cursor-w-resize top-1/2 right-[-5px]'></button>
          <button className='resizeCircle cursor-s-resize right-1/2 bottom-[-5px]'></button> */}

          {/* Verses are printed from here */}
          <main className="flex min-h-max min-w-[200px] flex-col justify-between rounded-md bg-white/60 py-4 px-8 text-center text-sm text-gray-500 drop-shadow-2xl">
            {isLoading ? (
              <p>Loading, please wait...</p>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <p className="text-lg">{surahData.englishNameTranslation}</p>
                  <p className="text-2xl">{surahData.name}</p>
                </div>
                <hr />
                <article className="my-6 leading-loose text-black">
                  <p className="text-right text-2xl">{arabicData.text}</p>
                  <p className="text-left">{englishData.text}</p>
                </article>
                <p className="text-xl">
                  {surahData.number}:{arabicData.numberInSurah}
                </p>
              </>
            )}
          </main>
        </article>
      </main>
      {/* FLOATING BAR  */}
      <article className="floating-bar float-shadow fixed bottom-[10%] left-0 right-0 z-20 mx-auto max-w-sm rounded-lg p-1 text-gray-500">
        <div className="flex items-center justify-between divide-x divide-gray-300 text-[12px]">
          <div className="flex items-center justify-center">
            <button
              className="floating-btn-center floatHover relative cursor-pointer"
              onClick={() => setShowColors(!showColors)}
            >
              <div className="gradient-bg relative h-6 w-6 rounded-full border-2 border-white"></div>
              <span className="floatMarginTrack">Color</span>
            </button>
            {showColors && <Colors />}
            <button
              className="floating-btn-center floatHover"
              onClick={refetch}
            >
              <Next width={width} />
              <span className="floatMarginTrack">Next Verse</span>
            </button>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <button className="floating-btn-center floatHover ml-2">
              <Copy width={width} />{" "}
              <span className="floatMarginTrack">Copy</span>
            </button>
            <button
              className="floating-btn-center floatHover floatBtnDownload"
              onClick={onDownload}
            >
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

const gradientPallete = [
  {
    id: 1,
    color: "",
  },
  {
    id: 2,
    color: "",
  },
  {
    id: 3,
    color: "",
  },
];

export function Colors() {
  return (
    // map through the gradientColors
    <main className="absolute right-0 left-0 bottom-20 max-w-max rounded-md bg-gray-200 py-2 px-3">
      <div className="grid grid-cols-3 gap-4">
        <div className="circle bg-purple-500"></div>
        <div className="circle bg-pink-500"></div>
        <div className="circle bg-fuchsia-500"></div>
        <div className="circle bg-violet-500"></div>
        <div className="circle bg-yellow-500"></div>
        <div className="circle bg-amber-500"></div>
      </div>
    </main>
  );
}
