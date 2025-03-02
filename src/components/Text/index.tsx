
export const Text = (props: TextProps) => {

    const {
        fontSize = 12,
        fontWeight = '100',
        style,
        text,
        textAlign = 'right',
        type = 'p',
    } = props;

    const Type = type;

    return (
        <Type
            style={{
                ...style,
                fontSize,
                fontWeight,
                textAlign,
            }}
        >{text}</Type>
    )
}
