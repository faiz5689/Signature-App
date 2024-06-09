'use client';

import { handleClear, handleDownload, handleUndo, handleViewPNG } from "@/utils/util";
import SignaturePad from "@/components/signature_pad";
import SignatureCanvas from 'react-signature-canvas';
import Image from "next/image";
import { useRef, useState } from "react";
import ControlButtons from "@/components/control_buttons";
import DownloadButton from "@/components/download_button";

export default function Home() {

  const sigCanvas = useRef<SignatureCanvas>(null);
  const [penColor, setPenColor] = useState('black');

  const handleChangeColor = () => {
    const nextColor = '#' + Math.random().toString(16).slice(-6);
    setPenColor(nextColor); 
  };

  return (
    <main className="flex flex-col items-center px-4">
      <ControlButtons 
      sigCanvas={sigCanvas}
      onClear={() => handleClear({ sigCanvas })}
      onUndo={() => handleUndo({ sigCanvas })}
      onViewPNG={() => handleViewPNG({ sigCanvas })}
      onChangeColor={() => handleChangeColor()}
      />
      <SignaturePad ref={sigCanvas} penColor={penColor}/>
      <DownloadButton 
      onDownload={() => handleDownload({ sigCanvas })}/>
    </main>
  );
}
