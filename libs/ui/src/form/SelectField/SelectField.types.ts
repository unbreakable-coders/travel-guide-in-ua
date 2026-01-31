import { FC, SVGProps } from 'react';

export type SelectValue = string | number;

export interface SelectOption {
  value: SelectValue;
  label: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
}
