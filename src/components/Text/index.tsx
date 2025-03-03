
export const Text = (props: _TextProps) => {

    const {
        color = 'rgba(0, 0, 0, .8)',
        children = '',
        fontSize = 12,
        fontWeight = '200',
        style,
        text,
        textAlign = 'left',
        type = 'p',
    } = props;

    const Type: TextType = type;

    return (
        <Type
            style={{
                ...style,
                color,
                fontSize,
                fontWeight,
                textAlign,
            }}
        >
            {text ? text : children}
        </Type>
    )
}
