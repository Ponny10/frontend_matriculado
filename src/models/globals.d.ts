/* Tipado de las props para realizar cualquier petición a la API */
interface _RequestProps {
    data?: object;
    isLoading?: boolean;
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
    target: string;
    token?: string;
}

/* Tipado para todas las respuestas de API */
interface _ResponseApi<T = null> {
    data: T;
    error?: boolean;
    ok: boolean;
    message?: string;
    status?: number;
}

type Dispatch = typeof import('_store').Store.dispatch;

interface _RouteState {
    auth: _AuthState;
    home: _HomeState;
    web: _GeneralRoot
}

/* Tipos generales compartidos */

type BorderStyle = 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';
type TypeStyle = React.CSSProperties;