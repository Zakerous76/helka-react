import React from "react";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import { Star } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useFormLogic } from "../database/formLogic";

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function ContactForm() {
  const { formData, isSubmitting, submitStatus, handleChange, handleSubmit } =
    useFormLogic();

  const position = [39.9334, 32.8597]; // Ankara coordinates

  return (
    <div className="container mx-auto px-4 py-8 font-poppins">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Mesaj Gönderin</h1>
          <p className="text-gray-600 mb-8">
            Helka İnşaat'ın deneyimli ekibi, soru ve önerilerinize 7/24 destek
            için hazır!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-xs">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="İsim"
                required
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400 h-12"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400 h-12"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon"
                required
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400 h-12"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Konu"
                required
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400 h-12"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mesajını"
              required
              rows="6"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400 h-12"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#8B6D5C] text-white px-8 py-3 hover:bg-[#7A5E4D] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Gönderiliyor..." : "Gönder"}
            </button>

            {submitStatus === "success" && (
              <p className="text-green-600">Mesajınız başarıyla gönderildi!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600">
                Bir hata oluştu. Lütfen tekrar deneyin.
              </p>
            )}
          </form>
        </div>

        <div className="bg-white shadow-lg overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Ankara 123</h2>
            <p className="text-gray-600">Ankara/Çankaya Helka İnşaat</p>
            <div className="flex items-center mt-2">
              <span className="font-bold mr-2">5.0</span>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-2 text-gray-600">321 değerlendirme</span>
            </div>
          </div>

          <div className="h-[500px] relative">
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} />
              <ZoomControl position="bottomright" />
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
