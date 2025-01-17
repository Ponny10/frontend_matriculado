import environment from "./environment/environment";

/* Función que retorna todas las peticiones al API */
export const request = async (props: _RequestProps) => {

    const {method, target, data} = props;

    /* Endpoint a consumir */
    const apiUrl = `${environment.url}${target}`;

    /* isLoading === undefined || null ? ------ : undefined; */

    /* const token = 'getToken()'; */

    /* Configurar Headers de la petición */
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const responseRequest: _ResponseApi<unknown> = await fetch(apiUrl, {
        body: data !== undefined ? JSON.stringify(data) : undefined,
        headers: headers ? headers : undefined,
        method,
    }).then(async(response: Response) => {
        /* isLoading === undefined ? Loading(false) : undefined; */

        switch (response.status) {
            case 200:
                try {
                    return {
                        data: await response.json(),
                        ok: response.ok,
                    }
                } catch {
                    return {
                        data: undefined,
                        ok: response.ok,
                        error: !response.ok
                    }
                }
            default:
                return {
                    data: undefined,
                    ok: response.ok,
                    error: !response.ok
                }
        }
    }).catch(() => ({
        data: undefined,
        ok: false,
        error: true,
    }));

    return responseRequest;
}