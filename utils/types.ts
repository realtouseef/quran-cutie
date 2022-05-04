export interface VerseProps {
  text: string;
  numberInSurah: number;
  surah: SurahProp;
}

interface SurahProp {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
}