import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

export function useShakeDetector(onShake) {
  useEffect(() => {
    let lastShakeTimestamp = 0;
    const shakeThreshold = 1000;
    const accelerationThreshold = 3.5; // Ajusta este valor según la sensibilidad deseada.

    const handleShake = () => {
      const currentTime = new Date().getTime();
      if (currentTime - lastShakeTimestamp < shakeThreshold) {
        return;
      }

      lastShakeTimestamp = currentTime;
      onShake();
    };

    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const acceleration = Math.sqrt(x * x + y * y + z * z);
      if (acceleration > accelerationThreshold) {
        handleShake();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [onShake]);
}
