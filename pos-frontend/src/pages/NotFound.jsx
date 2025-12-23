import { Link } from "react-router-dom";
import {AlertTriangle, ArrowLeft} from "lucide-react";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Icon */}
      <AlertTriangle className="w-20 h-20 text-yellow-500 mb-4" />

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        404 | Page Not Found
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-6 max-w-md">
        Halaman yang kamu cari tidak ditemukan atau sudah dipindahkan.
        Silakan kembali ke halaman utama.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-600 transition"
      >
        <ArrowLeft size={18} />
        Kembali ke Beranda
      </Link>
    </div>
  );
}
