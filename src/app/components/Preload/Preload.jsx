import React, { useState, useEffect } from 'react';
import styles from './Preload.css';

// Funktion zum Vorab-Laden von Bildern
const preloadImages = (images) => {
  return Promise.all(
    images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
};

const Preload = ({ onLoaded, enablePreloader = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!enablePreloader) {
      // Wenn der Preloader deaktiviert ist, setze sofort den Zustand auf 'geladen'
      setIsLoaded(true);
      return;
    }

    // Wenn der Preloader aktiviert ist, lade die Bilder
    const images = [
      "/src/assets/img/reduced_images/New3.jpeg",
      "/src/assets/gifs/RedSamurai.gif",
      "/src/assets/gifs/Dragon.gif",
      "/src/assets/gifs/natureworld.gif",
      "/src/assets/img/reduced_images/New5.jpeg",
      "/src/assets/img/reduced_images/New6.jpeg",
    ];

    // Vorab-Laden der Bilder
    preloadImages(images)
      .then(() => {
        console.log("Alle Bilder wurden vorab geladen.");
      })
      .catch((err) => {
        console.error("Fehler beim Vorab-Laden der Bilder:", err);
      });

    // Setze eine Verzögerung von 5 Sekunden, bevor der Preloader verschwindet
    const timeout = setTimeout(() => {
      setIsLoaded(true);  // Dieser Zustand stellt sicher, dass der Preloader nach 5 Sekunden verschwindet
    }, 1000); // 5 Sekunden

    // Bereinigung, um den Timeout beim Verlassen der Komponente zu löschen
    return () => clearTimeout(timeout);
  }, [enablePreloader]);

  useEffect(() => {
    if (isLoaded) {
      onLoaded();  // Wenn der Zustand auf 'geladen' gesetzt wird, rufe den Callback auf
    }
  }, [isLoaded, onLoaded]);

  if (!isLoaded) {
    return (
      <div className="loading-animation">
        <div className="spinner"></div> {/* Ladeanimation */}
      </div>
    );
  }

  return null; // Wenn der Preloader nicht mehr benötigt wird, rendere nichts mehr
};

export default Preload;
