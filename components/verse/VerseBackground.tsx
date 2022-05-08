import { useState, useRef, useCallback } from "react";
import Verse from "./Verse";
import Download from "../../public/icons/download.svg";
import Copy from "../../public/icons/copy.svg";
import Next from "../../public/icons/next.svg";
import { toPng } from "html-to-image";
// import useFetch from "../../hooks/useFetch";
// import useWindowResize from '../../hooks/useWindowResize';

const VerseBackground: React.FC = () => {
  const [showColors, setShowColors] = useState<boolean>(false);
  const width = 20;
  const downloadRef = useRef<HTMLDivElement>(null);
  // const windowSize = useWindowResize();
  // const {getVerse, storeVerse} = useFetch();

  // use window.outerHeight and outerWidth to resize the window
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
      <main className="mt-10">
        <article
          className={`gradient-bg content-shadow relative mx-auto  h-[443px] max-w-[900px] rounded-md p-10`}
          ref={downloadRef}
        >
          {/* <button className='resizeCircle cursor-w-resize top-1/2 right-[-5px]'></button>
          <button className='resizeCircle cursor-s-resize right-1/2 bottom-[-5px]'></button> */}
          <Verse />
        </article>
      </main>

      {/* FLOATING BAR  */}

      <article className="floating-bar float-shadow fixed bottom-[10%] left-0 right-0 z-20 mx-auto max-w-sm rounded-lg p-1 text-gray-500">
        <div className="flex items-center justify-between divide-x divide-gray-300 text-[12px]">
          <div className="flex items-center justify-center">
            <div className="floating-btn-center floatHover relative cursor-pointer">
              <button onClick={() => setShowColors(!showColors)}>
                <div className="gradient-bg relative mb-1 h-6 w-6 rounded-full border-2 border-white"></div>
                <span className="floatMarginTrack">Color</span>
              </button>
            </div>
            {showColors && <Colors />}
            <button
              className="floating-btn-center floatHover"
              // onClick={()=> getVerse()}
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
              onClick={onDownload}
              className="floating-btn-center floatHover floatBtnDownload"
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
    color:
      "backgroundImage: linear-gradient(160deg, rgb(204, 251, 252), rgb(197, 234, 254), rgb(189, 211, 255))",
  },
  {
    id: 2,
    color:
      "backgroundImage: linear-gradient(345deg, rgb(211, 89, 255), rgb(228, 99, 255), rgb(255, 123, 247), rgb(255, 154, 218), rgb(255, 185, 208), rgb(255, 209, 214), rgb(255, 219, 219))",
  },
];

export function Colors() {
  return (
    // map through the gradientColors
    <main className="absolute right-0 left-0 bottom-20 max-w-max rounded-md bg-gray-200 py-2 px-3">
      <div className="grid grid-cols-3 gap-4">
        {gradientPallete.map((grad) => {
          return (
            <div key={grad.id} className="circle" style={grad.color}></div>
          );
        })}
      </div>
    </main>
  );
}
