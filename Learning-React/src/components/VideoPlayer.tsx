import React, { useRef } from 'react';
import * as THREE from 'three';

interface Props
{
    videoUrl : string;
}

function VideoPlayer({videoUrl}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  async function WebGLVideoPlayer(videoUrl: string) {

   


    if (!videoRef.current) {
      console.error('Video element is not available');
      return;
    }

    const video = videoRef.current;
    video.src = videoUrl;

    function handleMetadataLoaded() {



      const width = video.videoWidth;
      const height = video.videoHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 1);

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      document.body.appendChild(renderer.domElement);

      const texture = new THREE.VideoTexture(video);
      const geometry = new THREE.PlaneGeometry(1, 1);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }

      video.play();
      animate();
    }

    video.addEventListener('loadedmetadata', handleMetadataLoaded);
  }

  function pauseVideo() {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }} />
      <button onClick={() => WebGLVideoPlayer('Videos/video1.mp4')}>Play Video 1</button>
      <button onClick={() => WebGLVideoPlayer('Videos/video2.webm')}>Play Video 2</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
}

export default VideoPlayer;