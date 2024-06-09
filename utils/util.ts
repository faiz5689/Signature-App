import Viewer from 'viewerjs';
import SignatureCanvas from 'react-signature-canvas';
import 'viewerjs/dist/viewer.css';

// Define the function on the window object with the correct type
declare global {
  interface Window {
    previewImage: (url: string, degree?: number) => void;
  }
}

export const previewImage = function (url: string, degree?: number) {
  const img = document.createElement('img');
  img.src = url;
  const viewer = new Viewer(img, {
    title: 0,
    navbar: 0,
    toolbar: {
      zoomIn: 1,
      zoomOut: 1,
      oneToOne: 1,
      reset: 1,
      rotateLeft: 1,
      rotateRight: 1,
      flipHorizontal: 1,
      flipVertical: 1,
    },
    viewed() {
      if (degree) {
        viewer.zoomTo(0.8).rotateTo(degree);
      }
    }
  });
  img.onload = function() {
    viewer.show();
  };
};



type SigCanvas = React.RefObject<SignatureCanvas>;

export const handleClear = ({ sigCanvas }: { sigCanvas: SigCanvas }) => {
  sigCanvas.current?.clear();
};

export const handleUndo = ({ sigCanvas }: { sigCanvas: SigCanvas }) => {
  const canvas = sigCanvas.current;
  if (canvas) {
    const data = canvas.toData();
    if (data) {
      data.pop();
      canvas.fromData(data);
    }
  }
};

export const handleViewPNG = ({ sigCanvas }: { sigCanvas: SigCanvas }) => {
  const canvas = sigCanvas.current;
  if (canvas && !canvas.isEmpty()) {
    const dataURL = canvas.toDataURL('image/png');
    previewImage(dataURL);
  } else {
    alert('No Data to show.');
  }
};


export const handleDownload = ({ sigCanvas }: { sigCanvas: SigCanvas }) => {
  const canvas = sigCanvas.current;
  if (canvas && !canvas.isEmpty()) {
    const dataURL = canvas.toDataURL('image/png');

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'signature.png'; // Set the filename for the downloaded file
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Cleanup
    document.body.removeChild(link);
  } else {
    alert('No signature to download.');
  }
};
