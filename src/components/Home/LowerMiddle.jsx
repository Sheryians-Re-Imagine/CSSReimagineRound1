import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

function LowerMiddle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/qkXK-WIemSKLclsq/scene.splinecode');
  }, []);

  return (
    <div className='border-2 border-black relative top-40 h-60vh bottom-10'>
      <canvas ref={canvasRef} className='w-full h-full' />
    </div>
  );
}

export default LowerMiddle;
