
export const Icon = (props: _IconProps) => {

    const {
        alt = '',
        className = '',
        onClick = () => {},
        src = '',
        styles,
        width = 24,
    } = props;

    return (
        <img
            alt={alt}
            className={className}
            onClick={onClick}
            src={src === '' ? '' : src}
            style={{
                ...styles,
                width,
            }}
        />
    )
}
