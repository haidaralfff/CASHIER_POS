export default function DataTransaksi() {
  const data = [
    {
      tanggal: "10 Okt 2025",
      total: "Rp 50.000",
      bayar: "Rp 50.000",
      kembali: "Rp 0",
    },
    {
      tanggal: "10 Okt 2025",
      total: "Rp 70.000",
      bayar: "Rp 100.000",
      kembali: "Rp 30.000",
    },
    {
      tanggal: "10 Okt 2025",
      total: "Rp 105.000",
      bayar: "Rp 110.000",
      kembali: "Rp 5.000",
    },
    {
      tanggal: "9 Okt 2025",
      total: "Rp 100.000",
      bayar: "Rp 100.000",
      kembali: "Rp 0",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold">Data Transaksi</h1>
      <p className="text-gray-500 mb-6">Riwayat transaksi penjualan</p>

      {/* Card */}
      <div className="bg-white rounded-xl shadow p-4">
        {/* Button */}
        <button className="mb-4 px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
          List Kode
        </button>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left rounded-l-lg">Tanggal</th>
                <th className="p-3 text-left">Total Harga</th>
                <th className="p-3 text-left">Bayar</th>
                <th className="p-3 text-left rounded-r-lg">Kembalian</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none"
                >
                  <td className="p-3">{item.tanggal}</td>
                  <td className="p-3 font-medium">{item.total}</td>
                  <td className="p-3">{item.bayar}</td>
                  <td className="p-3 font-medium">{item.kembali}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
