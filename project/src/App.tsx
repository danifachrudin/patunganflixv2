import React, { useEffect, useState } from 'react';
import { 
  Play, 
  Users, 
  DollarSign, 
  Smartphone, 
  CheckCircle, 
  MessageCircle,
  Star,
  Shield,
  Clock,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Halo! Saya tertarik bergabung dengan PatunganFlix. Bisa info lebih lanjut?');
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-red-600">
              PatunganFlix.com
            </div>
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Lihat Harga
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-red-50 to-red-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-20 h-20 bg-red-200/30 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-10 w-32 h-32 bg-red-300/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-red-400/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
                <Star className="w-4 h-4 mr-2" />
                Terpercaya & Legal
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Netflix 4K <span className="text-red-600">Lebih Hemat</span>,<br />
                Bareng PatunganFlix!
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Cukup mulai dari <span className="font-bold text-red-600">21 ribu-an</span> aja!<br />
                Nonton puas, tanpa ribet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center">
                    Gabung Sekarang
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                
                <button
                  onClick={openWhatsApp}
                  className="group border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat WhatsApp
                  </span>
                </button>
              </div>

              <div className="animate-bounce">
                <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Pilih PatunganFlix?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi legal dan praktis untuk menikmati Netflix 4K dengan harga terjangkau
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Harga Terjangkau</h3>
              <p className="text-gray-600">
                Hemat hingga 80% dari harga langganan individu. Mulai dari 21rb/bulan!
              </p>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aman & Terpercaya</h3>
              <p className="text-gray-600">
                Admin berpengalaman, sistem pembayaran aman, dan garansi penggantian akun.
              </p>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jangka Panjang</h3>
              <p className="text-gray-600">
                Langganan stabil untuk jangka panjang dengan support 24/7 dari admin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Paket Patungan Netflix 4K
            </h2>
            <p className="text-xl text-gray-600">
              Pilih paket yang sesuai dengan kebutuhan dan budget kamu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 5 Orang Package */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-red-200">
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">5 Orang</h3>
                <div className="text-3xl font-bold text-red-600 mb-1">Rp 39.500</div>
                <div className="text-gray-500 mb-6">/orang/bulan</div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-gray-600 mb-2">Rincian:</div>
                  <div className="text-sm text-gray-800">
                    Netflix 4K: Rp 186.000<br />
                    Admin fee: Rp 12.500<br />
                    <strong>Total: Rp 197.500 ÷ 5</strong>
                  </div>
                </div>

                <ul className="text-left text-sm text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Netflix 4K Ultra HD
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    5 Profile Terpisah
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Support Admin 24/7
                  </li>
                </ul>

                <button
                  onClick={openWhatsApp}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Pilih Paket Ini
                </button>
              </div>
            </div>

            {/* 7 Orang Package - Most Popular */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-red-500 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  TERPOPULER
                </span>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">7 Orang</h3>
                <div className="text-3xl font-bold text-red-600 mb-1">Rp 29.500</div>
                <div className="text-gray-500 mb-6">/orang/bulan</div>
                
                <div className="bg-red-50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-red-600 mb-2">Rincian:</div>
                  <div className="text-sm text-gray-800">
                    Netflix 4K: Rp 186.000<br />
                    Admin fee: Rp 17.500<br />
                    <strong>Total: Rp 206.500 ÷ 7</strong>
                  </div>
                </div>

                <ul className="text-left text-sm text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Netflix 4K Ultra HD
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    7 Profile Terpisah
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Support Admin 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Hemat 25% lebih banyak
                  </li>
                </ul>

                <button
                  onClick={openWhatsApp}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Pilih Paket Ini
                </button>
              </div>
            </div>

            {/* 10 Orang Package */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-red-200">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10 Orang</h3>
                <div className="text-3xl font-bold text-red-600 mb-1">Rp 21.500</div>
                <div className="text-gray-500 mb-6">/orang/bulan</div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-gray-600 mb-2">Rincian:</div>
                  <div className="text-sm text-gray-800">
                    Netflix 4K: Rp 186.000<br />
                    Admin fee: Rp 25.000<br />
                    <strong>Total: Rp 215.000 ÷ 10</strong>
                  </div>
                </div>

                <ul className="text-left text-sm text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Netflix 4K Ultra HD
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    10 Profile Terpisah
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Support Admin 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Harga Termurah!
                  </li>
                </ul>

                <button
                  onClick={openWhatsApp}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Pilih Paket Ini
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-sm">
              * Semua paket sudah termasuk Netflix 4K Ultra HD dengan kualitas terbaik
            </p>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="steps" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara Bergabung
            </h2>
            <p className="text-xl text-gray-600">
              Hanya 3 langkah mudah untuk mulai nonton Netflix 4K
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-200 transition-all duration-300 transform group-hover:scale-110">
                  <Users className="w-10 h-10 text-red-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pilih Paket</h3>
              <p className="text-grey-600">
                Tentukan paket yang sesuai dengan kebutuhan dan budget kamu
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-200 transition-all duration-300 transform group-hover:scale-110">
                  <MessageCircle className="w-10 h-10 text-red-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hubungi Admin</h3>
              <p className="text-gray-600">
                Chat WhatsApp untuk konfirmasi paket dan informasi pembayaran
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-200 transition-all duration-300 transform group-hover:scale-110">
                  <Play className="w-10 h-10 text-red-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mulai Nonton</h3>
              <p className="text-gray-600">
                Dapatkan akses akun Netflix 4K dan mulai streaming favorit kamu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Nonton Netflix 4K dengan Harga Hemat?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Langganan Netflix jadi ringan dan seru bareng teman!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="group bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center">
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat WhatsApp Sekarang
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-75">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              100% Legal & Aman
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Admin Terpercaya
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Support 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500 mb-4">
              PatunganFlix.com
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Layanan patungan Netflix 4K terpercaya dengan harga terjangkau. 
              Nonton puas, hemat maksimal!
            </p>
            
            <div className="flex justify-center mb-8">
              <button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hubungi Admin WhatsApp
              </button>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                <strong>Disclaimer:</strong> PatunganFlix bukan afiliasi resmi Netflix. 
                Kami hanya membantu berbagi langganan legal sesuai Terms of Service Netflix.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                © 2024 PatunganFlix.com - All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App;