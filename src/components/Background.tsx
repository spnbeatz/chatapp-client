import React, {useRef, useEffect} from 'react';
import "@/components/background.css";

export const Background = ({children}: {children: React.ReactNode}) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.5;
      }
    }, []);
    return (
        <div className="video-background">
            <video autoPlay muted loop id="bgVideo" ref={videoRef}>
            <source src="/background-login9.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <div className="content">
            {children}
            </div>
        </div>
    )
}