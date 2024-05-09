import { useMediaQuery } from '@uidotdev/usehooks';

export const useShortScreen = () => {
  const isShortScreen = useMediaQuery('(max-height: 800px)');
  return { isShortScreen };
};
