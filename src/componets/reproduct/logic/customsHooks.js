import { useEffect, useState } from "react";

// Para la barra de progreso
export function useProgress(audio) {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audio) {
      const updateProgress = () => {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
        setProgress((currentTime / duration) * 100);
      };

      audio.addEventListener("timeupdate", updateProgress);

      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
      };
    }
  }, [audio, currentTime, duration]);
  return [progress, currentTime, duration];
}

export function useReproduct(isMusic) {
  // Muestra un text hasta que se cargue el audio
  const [loading, setLoading] = useState(true);
  // Estado para la reproduccion del audio
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    // Crear el objeto de audio
    const audioElement = new Audio(isMusic);
    audioElement.crossOrigin = "anonymous"; // Manejo de problemas de CORS
    setAudio(audioElement);

    // Cambiar el estado de carga cuando el audio esté listo para reproducirse
    audioElement.addEventListener("canplaythrough", () => {
      setLoading(false);
    });

    // Limpiar el objeto de audio cuando el componente se desmonte
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = "";
      }
    };
  }, [isMusic]);

  return [loading, audio];
}
//Para reproducir la musica
export function usePlaying(audio, isPlaying) {
  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play().catch((error) => {
          console.error("Playback failed:", error);
          alert("Playback failed. Please try again.");
        });
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, audio]);
}