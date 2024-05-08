import { Button } from '@/components/Button';
import { NavRail } from '@/components/NavRail';
import { useVoice } from '@humeai/voice-react';
import { motion } from 'framer-motion';
import type { Dispatch, FC, SetStateAction } from 'react';
import Balancer from 'react-wrap-balancer';

type HomeViewProps = {
  setActiveView: Dispatch<SetStateAction<'home' | 'error' | 'conversation'>>;
};

export const HomeView: FC<HomeViewProps> = ({ setActiveView }) => {
  const { connect, status } = useVoice();

  return (
    <div className="flex h-svh w-screen flex-col items-center gap-4 bg-tan-300 md:gap-6">
      <NavRail />
      <motion.h1
        className="mx-auto mt-40 text-7xl md:text-[7em] lg:mt-72"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.3 }}
      >
        Chatter
      </motion.h1>
      <motion.div
        className="z-10 flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1 }}
      >
        <Button
          className="shrink"
          onClick={() => {
            void connect()
              .then(() => {
                setActiveView('conversation');
              })
              .catch(() => {
                setActiveView('error');
              });
          }}
          disabled={status.value === 'connecting'}
        >
          {status.value === 'connecting' ? 'Connecting...' : 'Start'}
        </Button>
        <Balancer className="max-w-sm text-center text-sm">
          By starting a conversation, I accept Hume&apos;s{' '}
          <a
            className="cursor-pointer underline"
            href="https://beta.hume.ai/policies/terms-of-use"
            target="_blank"
            rel="noreferrer noopener"
          >
            Terms of Use
          </a>{' '}
          and acknowledge the{' '}
          <a
            className="cursor-pointer underline"
            href="https://www.hume.ai/privacy-policy"
            target="_blank"
            rel="noreferrer noopener"
          >
            Privacy Policy
          </a>
        </Balancer>
      </motion.div>

      <motion.svg
        className="fixed bottom-[-200px] left-0 h-svh w-screen md:bottom-[-120px] md:left-[-50px] lg:bottom-0 lg:left-[-160px]"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 3000 2200"
        fill="none"
      >
        <rect
          className="fill-transparent stroke-0"
          width="3000"
          height="2200"
        />
        <motion.path
          d="M235.31,1932.27h606.57s158.3-4.52,201.29-12.06c43-7.54,93.56-15.08,95.82-41.49,2.27-26.39-4.53-61.85-4.53-61.85,0,0-80.31,65.39-306.66,55.32-226.34-10.05-309.83-48.28-309.83-48.28,0,0-1.51,9.56-1.01,42.76.51,33.19-15.09,20.62-13.08-22.13,2.01-42.76-12.58-47.29,61.87-65.9,74.44-18.6,164.98-22.13,188.12-16.6,23.14,5.54-6.04,22.64,52.81,20.63,58.85-2.01,67.91,4.02,75.95-7.55,8.05-11.56,10.06,17.1,4.52,31.69-5.53,14.59-19.11,28.17-75.95,22.13-56.83-6.04-64.38-18.61-53.32-68.4,11.07-49.8,9.05-45.27,11.07-59.86,2-14.59,58.76,16.51,77.61,3.53,18.85-12.99,12.98-4.19,14.24-64.5,1.25-60.29-1.57-374.49-1.57-374.49,0,0,48.01,1.82,75.96,2.43,27.95.61,106.34-4.86,112.4-69.28,6.07-64.4,4.86-114.23,4.86-114.23,0,0-29.17,25.52-40.1,36.45-10.94,10.95,30.71,106.09-94.24,105.63-124.95-.47-182.73-1.41-182.73-1.41,0,0-54.02,1.41-57.78-51.2-3.75-52.62-1.67-377.26-1.67-377.26,0,0-.47-40.33-42.62-38.47-42.15,1.88-42.41,22.89-42.41,22.89,0,0,32.7-31.24,35.51,8.82,2.8,40.05,6.24,254.83,2.9,311.41-3.34,56.57-4.93,123.09,32.29,144.76,37.21,21.66-75.39,17.96-79.44-62.98-4.06-80.93,3.18-205.47,4.43-247.79,1.24-42.33,1.75-132.3,1.75-132.3,0,0,33.2-39.7,29.2,23.41-3.99,63.11-2.06,124.24-2.06,124.24,0,0-30.64,19.47-40.17,34.67-9.52,15.18-9.01-18.99-9.01-18.99,0,0-11.93-12.51-16.47-28.24-4.54-15.73-10.98-22.95,1.53-31.09,12.51-8.15,20.29-21.03,20.29-21.03,0,0,5.89-18.57-16.87-4.37-22.75,14.2-21.98.56-26.72-15.55-4.73-16.12,38.7-50.58,38.7-50.58,0,0-.95-3.81-4.73-17.08-3.78-13.26-29.02,22.55-37.17,30.88-8.15,8.34-15.73-9.68-15.91-26.15-.18-16.49,48.94-58.54,48.94-58.54,0,0,4.36-14.98-12.32-7.6-16.68,7.39-40.58,38.26-40.58,38.26,0,0-14.21-11.38-12.87-32.41,1.34-21.04,46.46-49.26,46.46-49.26,0,0,9.11-13.07-2.65-14.78-11.75-1.72-49.87,32-51.76,37.68-1.9,5.69-17.06-5.69-10.6-24.07,6.45-18.38,50.64-49.45,50.64-49.45,0,0,10.43-12.31-1.7-14.78-12.13-2.48-57.84,46.41-57.84,46.41,0,0-18.38-5.51-6.62-23.7,11.76-18.19,54.62-46.22,54.62-46.22,0,0-61.63,53.98-63.51,22.7-1.88-31.27-10.38-72.97,43.86-128.48,54.24-55.5,82.11-67.05,82.11-67.05,0,0-49.49,27.07-40.81,95.69,8.68,68.63,69.82,223.33,69.82,223.33,0,0-66.04-191.1-58.63-236.02,7.42-44.93,23.36-75.62,44.02-90.2,20.67-14.59,62.02-30.15,85.02-5.38,23,24.77,43.42,48.61,43.42,48.61,0,0,11.95,7.24,23.02-1.66,11.06-8.88-52.4-63.27-52.4-63.27,0,0,13.97-10.19,31.26,4.1,17.28,14.29,59.16,56.08,59.16,56.08,0,0,14.66,12.58,24.08,5.05,9.43-7.54,5.46-17.82-17.01-36.8-22.47-18.98-41.97-33.62-41.97-33.62,0,0,22.6-3.04,34.48,5.48,11.87,8.51,64.75,62.16,64.75,62.16,0,0,11.05,12.65,22.45,4.36,11.42-8.29,1.74-19.3-13.4-32-15.15-12.7-41.17-35.7-41.17-35.7,0,0,14.73,1.57,31.66,10.38,16.92,8.81,37.27,29.03,48.79,41.8,11.54,12.78,24.95,23.23,32.15,15.38,7.21-7.86-20.08-42.74-35.74-51.48-15.66-8.73-17.51-10.49-17.51-10.49,0,0,34.9,11.73,49.6,20.2,14.71,8.49,40.87,38.77,50.76,65.63,9.89,26.86-6.52,16.49-29.89,17.38-23.37.89-50.98-2.91-50.46,14.17.52,17.06,45.52,17.2,67.98,16.6,22.45-.59,27.68,10.21,33.04,14.2,5.37,3.99-63.09,2.41-63.09,2.41,0,0-25.92,1.38-22.17,21.11,3.76,19.74,21.46,16.98,37.3,17.88,15.83.9,56.58,1.42,56.58,1.42,0,0,4.44,5.31,9.28,12.85,4.83,7.55-68.09,4.72-68.09,4.72,0,0-18.6,2.03-14.54,21.67,4.06,19.63,24.34,11.03,45.3,10.45,20.97-.59,44.3-1.1,44.3-1.1,0,0,1.54,12.08,7.13,17.89,5.6,5.82-63.31,7-63.31,7,0,0-20.27,4.31-16.28,20.76,3.98,16.45,76.8,12.57,76.8,12.57,0,0,13.38-1.14,17.18,10.67,3.81,11.81-6.25,13.55-25.24,12.79-19-.75-33.81.8-33.81.8,0,0-15,3.56-11.28,20.48,3.73,16.92,23.96,13.81,42.53,13.12,18.59-.69,38.98-.32,38.98-.32,0,0,9.47,2.92,10.36,13.62.9,10.71-55.62,9.9-55.62,9.9,0,0-24.73,6.57-18.86,25.69,5.87,19.12,37.86,12.72,52.98,13.91,15.11,1.19,37.49-6.38,40.54,4.69,3.06,11.06-60.54,16.2-60.54,16.2,0,0-22.46,7.24-16.85,24.38,5.61,17.14,65.37,2.9,79.33,4.79,13.96,1.89,28.26,10.86,29.85,48.33,1.59,37.46-20.74,113.6-38.89,130.6-18.13,17,22.87-65.36,20.57-97.05-2.32-31.7-30.55-48.33-37.77-15.12-7.21,33.21.66,85.47-27.82,121.39-28.48,35.93-56.9,44.47-56.9,44.47,0,0,49.24-56.18,57.17-86.54,7.92-30.37,9.66-63.08,5.42-85.26-4.22-22.18-20.54-18.54-31.89-7.11-11.34,11.44,4.21,70.38-9.18,108.13-13.39,37.77-39.63,61.96-39.63,61.96,0,0-63.92,31.84-25.72-6.51,38.2-38.35,40.77-72.98,45.85-100.93,5.06-27.94-1.89-64.51-1.89-64.51,0,0-22.26-25.43-33.53,8.8-11.25,34.21,4.01,73-15.46,107.12-19.46,34.11-38.22,57.29-38.22,57.29,0,0-44.16,16.17-15.78-18.45,28.38-34.61,35.18-57.38,39.35-82.09,4.17-24.71,2.27-57.01,2.27-57.01,0,0-.18-20.8-15.86-19.22-15.66,1.58-22.31,13.88-22.89,38.69-.58,24.82-11.03,81.81-26.46,98.8-15.43,16.99-19.6,37.15-8.92,44.08,10.67,6.92,22.87,16.54,63.13,16.95,40.27.41,73.53,3.93,73.53,3.93,0,0-98.72,20.49-168.63-7.53-69.9-28.03-109.4-94.31-115.61-124.55-6.21-30.24,16.19,67.78,61.54,71.73,45.37,3.96,58.79-15.6,65.58-57.66,6.8-42.06-26.35-111.74-26.35-111.74,0,0-45.91,15.21-68.54,39.23-22.63,24.02-30.92-.04-27.92-18.48,2.99-18.45,60.67-54.78,90.31-59.7,29.65-4.9,114.67-9.53,144.98-8.18,30.31,1.35,20.66-14.63,9.33-21.85-11.33-7.23-141.17.83-152.25,1.64-11.08.82-60.65,17.9-76.51,36.73-15.86,18.82-19.34-11.34-17.08-27.34,2.26-16.02,45.59-36.79,61-43.53,15.42-6.74,120.55-6.82,134.2-8.02,13.65-1.21,46.4.87,46.4.87,0,0-1.36-18.47-14.1-19.22-12.74-.75-150.26-1.79-150.26-1.79,0,0-50.06,11.32-66.25,35.14-16.19,23.82-15.61-15.96-11.87-30.89,3.74-14.91,52.3-33.27,52.3-33.27,0,0,136.8-6.81,151.51-5.16,14.69,1.64,16.26-.01,16.26-.01,0,0,3.75-25.22-13.89-23.09-17.65,2.13-137.6,1.69-137.6,1.69,0,0-75.8,28.35-81.04,36.23-5.24,7.88-26.82-14.02-40.19-9.11-13.38,4.9-6.07-9.16,24.62-27.46,30.69-18.3,44.03-35.13,92.33-34.96,48.31.17,134.87-1.77,134.87-1.77,0,0,8.13-13.28-6.54-19.29-14.67-6-144.13-1.33-144.13-1.33,0,0-25.81-6.79-54.13,14.98-28.33,21.78-47.48,33.14-47.48,33.14,0,0-26.77,3.85-26.56-16.27.2-20.14,20.39-28.62,42.43-45.39,22.04-16.75,49.18-29.96,95.83-31.35,46.64-1.4,112.18-1.01,112.18-1.01,0,0,16.39-31.03-6.06-41.78-22.45-10.74-167.67-2.94-167.67-2.94,0,0-61.82,26.15-77.5,42.95-15.67,16.81-47.08-11.63-25.21-40.84,21.86-29.21,57.78-49.14,76.2-59.55,18.42-10.41,56.55-7.34,86.11-6.28,29.56,1.05,95.97-5.94,99.46,20.87,3.49,26.82-46.88,18.11-46.88,18.11l-117.5-.25s59.11,174.91,82.7,241.85c23.61,66.92,57.64,163.23,63.87,176.36,6.2,13.13,24.52,80.61-34.02,105.66-58.54,25.05-83.03-15.42-89.97-21.61-6.94-6.2,64.65,62.33,29.1,87-35.55,24.67-39.76,27.28-39.76,27.28,0,0,9.85,26.92,56.91,34.06,47.07,7.12,98.86,8.47,143.28-12.11,44.41-20.58,101.61-51.64,101.61-51.64,0,0-40.52,15.88-45.65,47.44-5.12,31.56-31.87,65.51-132.41,63.4-100.55-2.1-148.37,38.12-97.95,36.69,50.43-1.44,66.29-16.88,63.27,35.73-3,52.62,2.15,443.73,2.15,443.73,0,0-10.04,15.26,50.53,9.12,60.56-6.16,262.82,8.78,282.98,31.48,12.29,13.84-2.46,23.03-53.58,38.17-51.11,15.14-61.36,12.12-81.93,16.48-20.56,4.36-7.19,74.7-7.19,74.7l1294.87-8.78"
          stroke="#000"
          strokeWidth={'5px'}
          strokeDasharray="0 1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: 0.1,
            duration: 1.5,
            ease: 'easeIn',
          }}
        />
      </motion.svg>
    </div>
  );
};
