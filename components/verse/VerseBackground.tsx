import {useState} from 'react'
// import Verse from "./Verse";
import Download from "../../public/icons/download.svg";
import Copy from "../../public/icons/copy.svg";
import Next from "../../public/icons/next.svg";
// import useFetch from "../../hooks/useFetch";

const VerseBackground: React.FC = () => {
  const [showColors, setShowColors] = useState<boolean>(false)
  const width = 20;

  // const {getVerse, storeVerse} = useFetch();

  // use window.outerHeight and outerWidth to resize the window 
  // with useRef and reference it to the "gradient bg" to resize it.

  return (
    <>
      {/* TODO: fix the width and height  */}
      <main className='mt-40'>
        <article className={`relative gradient-bg content-shadow mx-auto h-44 w-44 max-h-[443px] max-w-[700px] rounded-md p-10`}
        >
          <button className='resizeCircle cursor-w-resize top-1/2 right-[-5px]'></button>
              <button className='resizeCircle cursor-s-resize right-1/2 bottom-[-5px]'></button>
          {/* <Verse /> */}
          
        </article>
      </main>

      {/* FLOATING BAR  */}

      <article className="floating-bar float-shadow fixed bottom-[10%] left-0 right-0 z-20 mx-auto max-w-sm rounded-lg p-1 text-gray-500">
        <div className="flex items-center justify-between divide-x divide-gray-300 text-[12px]">
          <div className="flex items-center justify-center">
            <div className="relativefloating-btn-center floatHover cursor-pointer">
              <button className="floating-btn-center floatHover"
              onClick={()=> setShowColors(!showColors)}
              >
              <div className="gradient-bg relative h-6 w-6 rounded-full"></div>
              <span className="floatMarginTrack">Color</span>
              </button>
            </div>
              {showColors && <Colors />}
            <button className="floating-btn-center floatHover"
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

const gradientPallete = [
  {
    id: 1,
    color: ''
  },
  {
    id: 2,
    color: ''
  },
  {
    id: 3,
    color: ''
  },
]

export function Colors(){
  return (
// map through the gradientColors
  <main className='absolute right-0 left-0 bottom-20 bg-gray-200 max-w-max py-2 px-3 rounded-md'>
    <div className='grid grid-cols-3 gap-4'>
    <div className='circle bg-purple-500'></div>
    <div className='circle bg-pink-500'></div>
    <div className='circle bg-fuchsia-500'></div>
    <div className='circle bg-violet-500'></div>
    <div className='circle bg-yellow-500'></div>
    <div className='circle bg-amber-500'></div>
    </div>
    </main>
  )
} 