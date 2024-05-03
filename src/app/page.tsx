import { ScreenSize } from '@/components/ScreenSize';
import { Voice } from '@/components/Voice';

export default function Home() {
  return (
    <>
      <Voice />
      {process.env.NODE_ENV !== 'production' && (
        <div className="fixed top-2 left-2 bg-white">
          <ScreenSize />
        </div>
      )}
    </>
  );
}
