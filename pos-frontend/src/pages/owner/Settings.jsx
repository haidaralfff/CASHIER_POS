import { Save, Lock, Bell, Shield } from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    namaTokoDisplay: "POS Warung Saya",
    alamat: "Jalan Merdeka No. 123",
    telepon: "0812-3456-7890",
    notifikasiStok: true,
    notifikasiTransaksi: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Pengaturan</h1>
        <p className="text-gray-600">Kelola pengaturan toko dan akun Anda</p>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Informasi Toko */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-600" />
              Informasi Toko
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nama Toko</label>
                <input
                  type="text"
                  name="namaTokoDisplay"
                  value={settings.namaTokoDisplay}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Alamat</label>
                <textarea
                  name="alamat"
                  value={settings.alamat}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Telepon</label>
                <input
                  type="tel"
                  name="telepon"
                  value={settings.telepon}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
                />
              </div>
            </div>
          </div>

          {/* Notifikasi */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Bell className="h-5 w-5 text-red-600" />
              Notifikasi
            </h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="notifikasiStok"
                  checked={settings.notifikasiStok}
                  onChange={handleChange}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm text-gray-700">Aktifkan notifikasi stok barang</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="notifikasiTransaksi"
                  checked={settings.notifikasiTransaksi}
                  onChange={handleChange}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm text-gray-700">Aktifkan notifikasi transaksi</span>
              </label>
            </div>
          </div>

          {/* Keamanan */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Lock className="h-5 w-5 text-red-600" />
              Keamanan
            </h2>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700">
              Ubah Password
            </button>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Save Button */}
          <button className="w-full bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-red-700 flex items-center justify-center gap-2">
            <Save className="h-5 w-5" />
            Simpan Perubahan
          </button>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              ℹ️ Semua perubahan yang Anda lakukan akan disimpan secara otomatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
