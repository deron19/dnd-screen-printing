// Validasi Formulir Kontak  
document.querySelector('.contact-form form').addEventListener('submit', function(event) {  
    event.preventDefault(); // Mencegah pengiriman formulir default  

    // Mengambil nilai dari input dan menghilangkan spasi yang tidak perlu  
    const name = document.querySelector('input[name="name"]').value.trim();  
    const email = document.querySelector('input[name="email"]').value.trim();  
    const message = document.querySelector('textarea[name="message"]').value.trim();  

    // Validasi apakah semua kolom sudah diisi  
    if (!name || !email || !message) {  
        alert('Semua kolom harus diisi!');  
        return; // Hentikan eksekusi jika ada kolom yang kosong  
    }  

    // Validasi format email menggunakan regular expression  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    if (!emailRegex.test(email)) {  
        alert('Masukkan alamat email yang valid!');  
        return; // Hentikan eksekusi  
    }  

    // Jika semua validasi lulus, tampilkan pesan sukses (tambahkan di sini jika diinginkan)  
    alert('Pesan Anda telah terkirim!');  
});