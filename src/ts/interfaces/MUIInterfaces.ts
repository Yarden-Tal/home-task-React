// TS IMPORTS
import { Order } from "../types/MUITypes";

// Table Interfaces

export interface Data {
  index: number;
  name: string;
  change: string;
  price: number;
  priceInBtc: number;
  marketCap: number;
  volume: number;
  priceGraph: any;
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

export interface IEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
