import { Search, Download } from "lucide-react";
import { useState } from "react";

export default function DataTransaksi() {
  const [searchTerm, setSearchTerm] = useState("");

  const transaksiList = [
    { id: 1, tanggal: "2024-01-07", waktu: "10:30", kasir: "Budi", total: "Rp 45.000", status: "Selesai" },
    { id: 2, tanggal: "2024-01-07", waktu: "11:15", kasir: "Eka", total: "Rp 62.000", status: "Selesai" },
    { id: 3, tanggal: "2024-01-07", waktu: "12:45", kasir: "Budi", total: "Rp 38.500", status: "Selesai" },
    { id: 4, tanggal: "2024-01-07", waktu: "13:20", kasir: "Rini", total: "Rp 155.000", status: "Selesai" },
  ];

  const filteredTransaksi = transaksiList.filter((t) =>
    t.kasir.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.tanggal.includes(searchTerm)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Data Transaksi</h1>
        <p className="text-gray-600">Lihat riwayat semua transaksi yang telah dilakukan</p>
      </div>

      {/* Search & Export */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Cari kasir atau tanggal..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 flex items-center gap-2">
          <Download className="h-5 w-5" />
          Export
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-red-50 border-b">
              <th className="p-4 text-left font-semibold text-gray-700">No</th>
              <th className="p-4 text-left font-semibold text-gray-700">Tanggal</th>
              <th className="p-4 text-left font-semibold text-gray-700">Waktu</th>
              <th className="p-4 text-left font-semibold text-gray-700">Kasir</th>
              <th className="p-4 text-left font-semibold text-gray-700">Total</th>
              <th className="p-4 text-left font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransaksi.length > 0 ? (
              filteredTransaksi.map((transaksi, index) => (
                <tr key={transaksi.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 text-gray-700">{index + 1}</td>
                  <td className="p-4 text-gray-700">{transaksi.tanggal}</td>
                  <td className="p-4 text-gray-700">{transaksi.waktu}</td>
                  <td className="p-4 font-medium text-gray-900">{transaksi.kasir}</td>
                  <td className="p-4 text-gray-700 font-semibold">{transaksi.total}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {transaksi.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-8 text-center text-gray-500">
                  Data transaksi tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-600">Total Transaksi</p>
          <p className="text-2xl font-bold text-red-600">{filteredTransaksi.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-600">Total Pendapatan</p>
          <p className="text-2xl font-bold text-green-600">Rp 300.500</p>
        </div>
      </div>
    </div>
  );
}
