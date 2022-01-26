// TS IMPORTS
import { Order } from "../types/MUITypes";

// Table Interfaces

export interface IData {
  index: number;
  name: string;
  change: number;
  price: number;
  priceInBtc: number;
  marketCap: number;
  volume: number;
  priceGraph: any;
}

export interface IHeadCell {
  disablePadding: boolean;
  id: keyof IData;
  label: string;
  numeric: boolean;
}

export interface IEnhancedTableToolbarProps {
  numSelected: number;
}

export interface IEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
