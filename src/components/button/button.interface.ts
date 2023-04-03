import { ButtonHTMLAttributes } from "react";


export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
    color?: 'primary' | 'secondary';
    variant?: 'filled' | 'reversed' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    loaderDot?: number;
    loaderSize?: 'mini' | 'small' | 'medium' | 'large';
  }