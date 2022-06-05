import {
  TableToolbarButton,
  insertTable,
  deleteTable,
  addRow,
  deleteRow,
  addColumn,
  deleteColumn,
} from "@udecode/plate";
import {
  BorderAll,
  BorderBottom,
  BorderTop,
  BorderLeft,
  BorderRight,
} from "styled-icons/bootstrap";
import { BorderClear } from "styled-icons/material";

export const TableToolbarButtons = () => (
  <>
    <TableToolbarButton icon={<BorderAll />} transform={insertTable} />
    <TableToolbarButton icon={<BorderClear />} transform={deleteTable} />
    <TableToolbarButton icon={<BorderBottom />} transform={addRow} />
    <TableToolbarButton icon={<BorderTop />} transform={deleteRow} />
    <TableToolbarButton icon={<BorderLeft />} transform={addColumn} />
    <TableToolbarButton icon={<BorderRight />} transform={deleteColumn} />
  </>
);
