import { Text } from 'components';

export const Button = (propsButton: _ButtonProps) => {

    const {
        backgroundColor,
        borderRadius,
        borderStyle,
        children,
        className = '',
        color,
        cursor = 'pointer',
        fontSize,
        height = 44,
        margin,
        marginTop,
        onClick,
        styles,
        text,
        textAlign,
        width = 120,
    } = propsButton;

    return (
        <button
            className={className}
            onClick={onClick}
            style={{
                ...styles,
                backgroundColor,
                borderRadius,
                borderStyle,
                color,
                cursor,
                height,
                margin,
                marginTop,
                width
            }}
        >
            {
                text
                    ? <Text
                        color={color}
                        fontSize={fontSize}
                        textAlign={textAlign}
                    >{text}</Text>
                    : children
            }
        </button>
    )
}
