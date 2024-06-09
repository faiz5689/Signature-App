'use client';

import React, { forwardRef, useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

interface SignaturePadProps {
  penColor: string;
}

const SignaturePad = forwardRef<SignatureCanvas, SignaturePadProps>(({ penColor }, ref) => {
  const [canvasWidth, setCanvasWidth] = useState<number>(800);
  const [canvasHeight, setCanvasHeight] = useState<number>(500);

  useEffect(() => {
    const handleResize = () => {
      setCanvasWidth(window.innerWidth * 0.8); // Set canvas width to 80% of window width
      setCanvasHeight(window.innerHeight * 0.6); // Set canvas height to 60% of window height
    };

    // Call handleResize initially and on window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="border-2 border-dotted border-gray-400 rounded-lg p-4 bg-gray-100 shadow-md flex justify-center items-center max-w-5xl max-h-5xl mx-auto hover:cursor-crosshair">
      <SignatureCanvas 
        ref={ref}
        penColor={penColor}
        canvasProps={{ width: canvasWidth, height: canvasHeight, className: 'sigCanvas' }}
      />
    </div>
  );
});

SignaturePad.displayName = 'SignaturePad'; // Optional, for better debugging
export default SignaturePad;
