// TS
import { IData, IHeadCell } from "../ts/interfaces/MUIInterfaces";
import { Order } from "../ts/types/MUITypes";

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
  change: string,
  price: number,
  priceInBtc: number,
  marketCap: number,
  volume: number,
  priceGraph: any
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

export const rows: IData[] = [
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Donut", 452, 25.0, 51, 4.9),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
  // createData("Honeycomb", 408, 3.2, 87, 6.5),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Jelly Bean", 375, 0.0, 94, 0.0),
  // createData("KitKat", 518, 26.0, 65, 7.0),
  // createData("Lollipop", 392, 0.2, 98, 0.0),
  // createData("Marshmallow", 318, 0, 81, 2.0),
  // createData("Nougat", 360, 19.0, 9, 37.0),
  // createData("Oreo", 437, 18.0, 63, 4.0),
];

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
