import React from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'clear' | 'gradient' | 'noShadow' | 'link' | 'radial' | 'close';
  fullwidth?: boolean;
  className?: string;
  size?: 'small' | 'normal',
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    fullwidth,
    className,
    size = 'normal',
    ...props
}) => {
    const rootClasses = [
        cls.Button,
        cls[variant],
        fullwidth && cls.fullwidth,
        cls[size],
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return <button type="button" className={rootClasses} {...props} />;
};

export default Button;
