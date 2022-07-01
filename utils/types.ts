export interface VerseProps {
  data: {
    data: {
      text: string;
      numberInSurah: number;
      surah: SurahProp;
    };
  };
}

interface SurahProp {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
}
