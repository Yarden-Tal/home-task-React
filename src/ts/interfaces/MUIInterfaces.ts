// Table Interfaces

export interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

export interface IHeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
}