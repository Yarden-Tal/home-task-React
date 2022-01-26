// TS
import { IData, IHeadCell } from "../ts/interfaces/MUIInterfaces";
import { Order } from "../ts/types/MUITypes";
import { coinType } from "../ts/types/types";

export const headCells: readonly IHeadCell[] = [
  {
    id: "index",
    numeric: false,
    disablePadding: true,
    label: "#",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "NAME",
  },
  {
    id: "change",
    numeric: true,
    disablePadding: false,
    label: "24H CHANGE",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "PRICE",
  },
  {
    id: "priceInBtc",
    numeric: true,
    disablePadding: false,
    label: "PRICE IN BTC",
  },
  {
    id: "marketCap",
    numeric: true,
    disablePadding: false,
    label: "MARKET CAP",
  },
  {
    id: "volume",
    numeric: true,
    disablePadding: false,
    label: "VOLUME 24H",
  },
  {
    id: "priceGraph",
    numeric: true,
    disablePadding: false,
    label: "PRICE GRAPH (7D)",
  },
];

function createData(
  index: number,
  name: string,
  change: number,
  price: number,
  priceInBtc: number,
  marketCap: number,
  volume: number,
  priceGraph?: any
): IData {
  return {
    index,
    name,
    change,
    price,
    priceInBtc,
    marketCap,
    volume,
    priceGraph,
  };
}

export const fillRows = (rows: coinType[]): IData[] => {
  let rowData: IData[] = [];
  let i: number = 1;
  rows.forEach((row) => {
    const newRow: IData = createData(
      i++,
      row.name,
      row.priceChange1d,
      row.price,
      row.priceBtc,
      row.marketCap,
      row.volume,
      ""
    );
    rowData.push(newRow);
  });
  return rowData;
};

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
