import { ScreenSize } from '@/components/ScreenSize';
import { Voice } from '@/components/Voice';

export default function Home() {
  return (
    <>
      <Voice />
      {process.env.NODE_ENV !== 'production' && (
        <div className="fixed left-2 top-2 bg-white">
          <ScreenSize />
        </div>
      )}
    </>
  );
}
