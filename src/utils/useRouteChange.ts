import { useEffect } from 'react';
import { useLocation, Location } from 'react-router-dom';

// Tipado para la función onRouteChange
type RouteChangeCallback = (location: Location) => void;

const useRouteChangeEffect = (onRouteChange: RouteChangeCallback) => {
  const location = useLocation();

  useEffect(() => {
    // Ejecuta la función cuando cambia la ubicación
    if (onRouteChange) onRouteChange(location);
  }, [location, onRouteChange]); // Se ejecuta cada vez que cambia la ruta
};

export default useRouteChangeEffect;