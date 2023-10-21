export default function Beranda() {
    return (
        <>

            <nav class="flex justify-between items-center p-4">
                <div class="text-2xl text-gray-800">
                    <i class="fas fa-bars">Menu</i>
                </div>
                <div class="text-3xl text-gray-800">Logo</div>
            </nav>


            <div class="container mx-auto p-4 sm:w-1/2">
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <h2 class="text-lg font-bold">Total Penjualan</h2>
                    <p class="text-gray-600">Bulan Penjualan: September 2023</p>
                    <p class="text-gray-800 font-bold">Rp 10.000.000</p>
                </div>
            </div>


            <div class="container mx-auto p-4 sm:w-1/2">
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <h2 class="text-lg font-bold">Penjualan Hari Ini</h2>
                    <p class="text-gray-600">Bulan Penjualan: Oktober 21, 2023</p>
                    <p class="text-gray-800 font-bold">Rp 1.000.000</p>
                </div>
            </div>


            <div class="container mx-auto p-4 flex flex-wrap justify-between">
                <a href="#" class="bg-white text-blue-500 p-4 rounded-full shadow-lg w-1/4 sm:w-1/2 md:w-1/4 text-center mb-4">Produk</a>
                <a href="#" class="bg-white text-blue-500 p-4 rounded-full shadow-lg w-1/4 sm:w-1/2 md:w-1/4 text-center mb-4">Pegawai</a>
                <a href="#" class="bg-white text-blue-500 p-4 rounded-full shadow-lg w-1/4 sm:w-1/2 md:w-1/4 text-center mb-4">Laporan</a>
                <a href="#" class="bg-white text-blue-500 p-4 rounded-full shadow-lg w-1/4 sm:w-1/2 md:w-1/4 text-center mb-4">Bantuan</a>
            </div>


            <div class="container mx-auto p-4">
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <h2 class="text-lg font-bold">Berita Inspirasi UMKM</h2>
                    
                </div>
            </div>


            <div class="fixed bottom-0 left-0 right-0 text-center p-4 bg-blue-200 shadow-lg">
                <a href="#" class="bg-blue-500 text-white p-4 rounded-lg w-2/3 mx-auto">Lakukan Transaksi</a>
            </div>
        </>
    )
}