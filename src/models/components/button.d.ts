

interface _ButtonProps extends _TextProps {
    backgroundColor?: string;
    borderRadius?: number | string;
    borderStyle?: BorderStyle;
    children?: React.ReactNode;
    className?: string;
    cursor?: string;
    height?: number | string;
    margin?: number | string;
    marginTop?: number | string;
    onClick: (e) => void;
    styles?: object;
    text?: string;
    width?: number | string;
}