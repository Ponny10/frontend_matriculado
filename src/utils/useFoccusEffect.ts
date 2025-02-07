import { useEffect } from 'react';

const useFocusEffect = (onFocus?: () => void, onBlur?: () => void) => {
  useEffect(() => {
    // Función para manejar el enfoque
    const handleFocus = () => {
      if (onFocus) onFocus();
    };

    // Función para manejar la pérdida de enfoque
    const handleBlur = () => {
      if (onBlur) onBlur();
    };

    // Añadir los listeners para los eventos focus y blur
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [onFocus, onBlur]);
};

export default useFocusEffect;
