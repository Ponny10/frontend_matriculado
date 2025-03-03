type TextAlign = 'right' | 'left' | 'center';
type TextType = 'p' | 'h1' | 'h2' | 'h3' | 'h4';
type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'bold' | 'normal';

interface _TextProps {
    children?: string;
    color?: string;
    fontSize?: number;
    fontWeight?: FontWeight;
    style?: TypeStyle,
    text?: string;
    textAlign?: TextAlign;
    type?: TextType;
}