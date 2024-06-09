import React from 'react';
import SignatureCanvas from 'react-signature-canvas';

type SigCanvas = React.RefObject<SignatureCanvas>;

type ControlButtonsProps = {
  sigCanvas: SigCanvas;
  onClear: () => void;
  onUndo: () => void;
  onViewPNG: () => void;
  onChangeColor: () => void;
};

export default function ControlButtons({
  onClear,
  onUndo,
  onViewPNG,
  onChangeColor,
}: ControlButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 my-5 items-center justify-center gap-2 px-4 text-lg font-medium">
      <button
        onClick={onClear}
        className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded border border-gray-400 hover:bg-gray-300 hover:scale-[1.15] mb-3 sm:mb-0"
      >
        Clear
      </button>
      <button
        onClick={onUndo}
        className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded border border-gray-400 hover:bg-gray-300 hover:scale-[1.15] mb-3 sm:mb-0"
      >
        Undo
      </button>
      <button
        onClick={onViewPNG}
        className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded border border-gray-400 hover:bg-gray-300 hover:scale-[1.15] mb-3 sm:mb-0"
      >
        View PNG
      </button>
      <button
        onClick={onChangeColor}
        className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded border border-gray-400 hover:bg-gray-300 hover:scale-[1.15] mb-3 sm:mb-0"
      >
        Change Color
      </button>
    </div>
  );
}
