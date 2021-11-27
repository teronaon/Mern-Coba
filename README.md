# Catatan Pembuatan Web
- Menjalankan 2 fungsi CRUD menggunakan MERN

- API sudah ada tapi mohon dibantu jika terdapat kesalahan dalam API

- API Mahasiswa : sudah dapat berjalan menggunakan postman

- API Kontak Mahasiswa : kode dasarnya sudah ada, tapi masih belum bisa jalan, tolong perbaiki dan usahakan API dapat berjalan.

- Front-end: Bisa melakukan inputan untuk API Mahasiswa dan API Kontak Mahasiswa serta dapat menapilkannya dalam tabel. Dalam tabel cukup Nama, NIM, Prodi saja, terdapat kolom aksi yang berisi button Detail Mahasiswa, Kontak Mahasiswa, dan Update Data.

- **Sangat diutamakan yang bisa jadi paling lambat besok siang**.

# Penjelasan API Secara Umum
Pada tugas kali ini, diminta membuat 2 Restful API yang masing-masing dapat menjalankan fungsi-fungsi CRUD ( *Create, Read, Update, and Delate*). 2 API tersebut yakni API yang memuat data mahasiswa secara umum dan API yang satunya lagi memuat data kontak mahasiswa. Diharapkan dengan adanya API-API tersebut data-data mahasiswa dapat terintegrasi anatar data secara umum ataupun data kontak mahasiswa itu sendiri.

# API Mahasiswa
API Mahasiswa adalah API sederhana yang menyimpan pendataan mahasiswa untuk mengetahui mahasiswa tersebut merupakan mahasiswa aktif atau bukan. Pada kasus ini admin sebagai pengguna dapat meng-*create*, *read*, *updaete*, hingga menghapus/*delete* data. Dalam hal ini pengguna atau admin memiliki Nama (tipe data *String*), NIM (tipe data *String*), Program Studi (tipe data *String*), Tahun Angkatan (tipe data *Number*), dan status mahasiswa (tipe data *string*).

# API Kontak Mahasiswa
API Kontak Mahasiswa adalah sebuah API sederhana yang dapat memproses fungsi CRUD dalam hal Konatak Mahasiswa itu sendiri. Dalam hal ini, data mahasiswa pada API Mahasiswa dapat meng-*create*, *read*, *updaete*, hingga menghapus/*delete* kontak mahasiswa. Dalam hal ini API berisi data-data kontak seperti Nomor Whatsapp (tipe data *Number*), Nomor HP (tipe data *Number*), ID Line (tipe data *String*), Email (tipe data *String*), dan Alamat (tipe data *string*).
