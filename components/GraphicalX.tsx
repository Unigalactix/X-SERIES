import React, { useEffect } from 'react';

const playClashSound = () => {
  // Guard against non-browser environments
  if (typeof window === 'undefined') return;
  
  // Cross-browser support for AudioContext
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) {
    console.warn("Web Audio API is not supported in this browser.");
    return;
  }

  const audioContext = new AudioContext();

  const play = () => {
    // Prevent errors if context is closed prematurely
    if (audioContext.state === 'closed') return;

    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.0);
    gainNode.connect(audioContext.destination);

    // Use inharmonic frequencies to create a metallic, clashing sound
    const freqs = [293.66, 466.16, 587.33, 783.99, 932.33];
    freqs.forEach((baseFreq) => {
      const osc = audioContext.createOscillator();
      osc.type = 'sawtooth';
      // Slightly detune each oscillator for a richer, more complex sound
      osc.frequency.setValueAtTime(baseFreq * (1 + (Math.random() - 0.5) * 0.05), audioContext.currentTime);
      
      osc.connect(gainNode);
      osc.start(audioContext.currentTime);
      osc.stop(audioContext.currentTime + 1.0);
    });

    // Clean up the AudioContext after the sound has finished playing
    setTimeout(() => {
      if (audioContext.state !== 'closed') {
        audioContext.close();
      }
    }, 1500);
  };
  
  // AudioContext often starts in a 'suspended' state and needs to be resumed.
  if (audioContext.state === 'suspended') {
    audioContext.resume().then(play).catch(err => console.error("Could not resume audio context:", err));
  } else {
    play();
  }
};

export const GraphicalX: React.FC = () => {
    useEffect(() => {
        // Play sound slightly before animation ends for a satisfying "impact" feel
        const soundTimer = setTimeout(() => {
            playClashSound();
        }, 900); // Animation is 1s long

        return () => {
            clearTimeout(soundTimer);
        };
    }, []);

    return (
        <div className="x-container" aria-label="An animated graphic of two metallic bars clashing to form an X">
            <div className="bar bar-1" />
            <div className="bar bar-2" />
        </div>
    );
};
