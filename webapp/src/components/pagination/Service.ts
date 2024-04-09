import { useState } from 'react';

export const useUrlState = () => {
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);

  return {
    nextUrl,
    setNextUrl,
    prevUrl,
    setPrevUrl,
  };
};