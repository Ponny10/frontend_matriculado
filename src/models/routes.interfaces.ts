import { LazyExoticComponent } from 'react';

/* Crear una firma para el tipo de Component, permitiendo ser de tipo estático o LazyLoad */
type JSXComponent = () => JSX.Element;

export interface _Routes {
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    path: string;
    to: string;
}