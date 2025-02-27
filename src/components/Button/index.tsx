interface _ButtonProps {
    text: string;
    backgroundColor?: string;
    styles?: object;
    width?: number | string;
    heigth?: number | string;
    className: string;
    onClick: () => void;
}

export const Button = (propsButton: _ButtonProps) => {

    const {
        className,
        onClick,
        text = '',
        width = 120,
        styles = {},
    } = propsButton;

    return (
        <button
            className={className}
            onClick={onClick}
            style={{...styles, width}}
        >{text}</button>
    )
}
