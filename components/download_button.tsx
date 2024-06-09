import React from 'react'
import { HiDownload } from 'react-icons/hi';

type DownloadButtonProps = {
  onDownload: () => void;
}

export default function DownloadButton({
  onDownload,
}: DownloadButtonProps) {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
      <button
        onClick={onDownload}
        className="group flex items-center w-full sm:w-auto px-4 py-2 bg-gray-200 rounded border border-gray-400 hover:bg-gray-300 hover:scale-[1.15] my-5 sm:mb-0"
      >
        Download&nbsp; <HiDownload className="opacity-70 group-hover:translate-x-1 transition"/>
      </button>
    </div>
  )
}
