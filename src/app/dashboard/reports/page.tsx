"use client";

import React, { useEffect } from "react";
import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { fechtLalin } from "@/api/index";

// Define the data type for your rows
type DataRow = {
  no: number;
  ruas: string;
  gerbang: string;
  gardu: string;
  hari: string;
  tanggal: string;
  metodePembayaran: string;
  gol1: number;
  gol2: number;
  gol3: number;
  gol4: number;
  gol5: number;
  totalLalin: number;
};

// Define sample data
const data: DataRow[] = [
  {
    no: 1,
    ruas: "Ruas 1",
    gerbang: "Gerbang 1",
    gardu: "01",
    hari: "Senin",
    tanggal: "30-05-2024",
    metodePembayaran: "E-Toll",
    gol1: 567,
    gol2: 234,
    gol3: 12,
    gol4: 10,
    gol5: 8,
    totalLalin: 831,
  },
  // Add more rows as needed
];

// Define columns
const columns: ColumnDef<DataRow>[] = [
  { accessorKey: "no", header: "No." },
  { accessorKey: "ruas", header: "Ruas" },
  { accessorKey: "gerbang", header: "Gerbang" },
  { accessorKey: "gardu", header: "Gardu" },
  { accessorKey: "hari", header: "Hari" },
  { accessorKey: "tanggal", header: "Tanggal" },
  { accessorKey: "metodePembayaran", header: "Metode Pembayaran" },
  { accessorKey: "gol1", header: "Gol I" },
  { accessorKey: "gol2", header: "Gol II" },
  { accessorKey: "gol3", header: "Gol III" },
  { accessorKey: "gol4", header: "Gol IV" },
  { accessorKey: "gol5", header: "Gol V" },
  { accessorKey: "totalLalin", header: "Total Lalin" },
];

const DataTable: React.FC = () => {
  // Initialize table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    fechtLalin()
      .then((res) => console.log({ res }))
      .catch((err) => console.log({ err }));
  }, []);

  return (
    <div className="overflow-auto">
      <table className="min-w-full bg-white border text-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2 border">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 border text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex float-end p-4 space-x-2">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-2 py-1 border rounded"
        >
          Previous
        </button>
        <label className="pt-1">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </label>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-2 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
