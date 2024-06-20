'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function DownloadAppBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('download-app-banner-dismissed');

    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    localStorage.setItem('download-app-banner-dismissed', 'true');
  };

  return (
    <AnimatePresence mode={'popLayout'}>
      {isVisible ? (
        <motion.div
          key={'download-app-banner'}
          className="isolate z-50 hidden h-12 w-full items-center gap-x-6 overflow-hidden border-b border-black bg-white px-6 py-2.5 text-black sm:px-3.5 sm:before:flex-1 lg:flex"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6">
              <strong className="font-semibold">
                EVI: Your personal AI with emotional intelligence
              </strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline size-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              Now available on iOS
            </p>
            <Link
              href="https://link.hume.ai/app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none rounded-full bg-black px-3.5 py-1 text-sm font-medium text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Download <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
              onClick={() => {
                dismiss();
              }}
            >
              <span className="sr-only">Dismiss</span>
              <X className="size-5 text-black/80" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
