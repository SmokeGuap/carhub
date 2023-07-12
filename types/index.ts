import { MouseEventHandler } from 'react';

export interface CustomButton {
  title: string;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
