import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Indonesiaparticipants() {
  const [selectedMaxNamaLengkap, setselectedMaxNamaLengkap] = useState("");
  const maxNameChars = 180; // batasan maksimal karakter
  const [selectedMaxProject, setselectedMaxProject] = useState("");
  const maxProjectChars = 160; // batasan maksimal karakter

  const handleInputNameChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxNameChars) {
      setselectedMaxNamaLengkap(value);
    }
  };

  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx6GTx2q6AMYbzU7F0D5bVS1Ovx52BTmaiiHXruHiXldkPsdmAHsMcgFuuoITZCrxZUWg/exec";

    const form = document.forms["regist-form"];
    var buttonCounter = 0;

    if (form) {
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (buttonCounter == 0) {
          try {
            buttonCounter++;
            await fetch(scriptURL, {
              method: "POST",
              body: new FormData(form),
            });
            // Setelah berhasil mengirim data, arahkan pengguna ke halaman lain
            window.location.href = "/"; // Gantikan dengan URL halaman sukses Anda
          } catch (error) {
            console.error("Error saat mengirim data:", error);
            // Handle error jika diperlukan
          }
        }
        form.reset();
      };

      form.addEventListener("submit", handleSubmit);

      // Membersihkan event listener saat komponen dilepas
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  return (
    <>
      <section className="registration-section">
        <div className="container">
          <div className="content">
            <div className="sub">FORMULIR PENDAFTARAN</div>
            <h1 className="garis-bawah"></h1>
            <br />
            <br />
            <h4>
              HALLO PESERTA IYPO 2025, Mohon perhatikan informasi berikut ini
              sebelum mengisi formulir pendaftaran :
            </h4>
            <br />
            <p>
              1. Mohon mengisi data yang diperlukan dengan benar dan memastikan
              tidak ada kesalahan penulisan. Pastikan juga bahwa data yang
              dikirim sudah final dan tidak mengalami perubahan.
            </p>
            <p>
              2. Setelah memastikan data sudah benar, Anda dapat mengklik tombol
              <span className="fw-bold"> &quot;KIRIM&quot;</span> cukup sekali
              saja. Jika data telah berhasil dikirimkan, Anda akan dipindahkan
              ke halaman lain.
            </p>
            <p>
              3. Akan ada email informasi bahwa pendaftaran telah diterima yang
              dikirimkan ke alamat email ketua tim, dan berkas akan divalidasi
              oleh tim kami. Mohon bersabar dan tunggu maksimal 3 hari setelah
              waktu pendaftaran, Letter of Acceptance (LOA) akan dikirimkan ke
              alamat email team leader.
            </p>
            <br />

            <form name="regist-form">
              <h1>BIODATA</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label className="form-label" value="Peserta Indonesia">
                    Kategori Peserta
                  </label>
                  <input
                    type="text"
                    id="KATEGORI_PESERTA"
                    name="KATEGORI_PESERTA"
                    className="form-control"
                    placeholder="Choose Categories Participant"
                    value="PESERTA INDONESIA"
                    readOnly
                  />
                </div>
                <div className="input-box">
                  <label for="KATEGORI_KOMPETISI" className="form-label">
                    Kategori Kompetisi
                  </label>
                  <select
                    type="text"
                    id="KATEGORI_KOMPETISI"
                    name="KATEGORI_KOMPETISI"
                    className="form-control"
                    placeholder="Choose Category Competition "
                    required
                  >
                    <option value="">--Pilih Kategori Kompetisi--</option>
                    <option value="Online Competition">
                      Online Competition
                    </option>
                    <option value="Offline Competition">
                      Offline Competition
                    </option>
                  </select>
                </div>
              </div>

              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_LENGKAP" className="form-label">
                    Nama Ketua & Anggota Tim
                  </label>
                  <label>
                    <p>
                      Masukan nama ketua dan anggota tim dengan nama ketua tim
                      diawal, dengan format seperti berikut :
                    </p>
                    <p>Note : maksimal 1 anggota + 1 ketua tim</p>
                    <h6>Kamal Putra</h6>
                    <h6>Ranu Ramadhan</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NAMA_LENGKAP"
                    name="NAMA_LENGKAP"
                    className="form-control"
                    placeholder="Masukan Nama Ketua & Anggota"
                    required
                    value={selectedMaxNamaLengkap}
                    onChange={handleInputNameChange}
                  ></textarea>
                  <p>
                    {selectedMaxNamaLengkap.length} / {maxNameChars} character
                  </p>
                </div>
                <div className="input-box">
                  <label for="NISN_NIM" className="form-label">
                    NISN / NIM Ketua & Anggota Tim
                  </label>
                  <label>
                    <p>
                      Notes : Masukan NISN / NIM dengan sesuai urutan nama ketua
                      dan anggota tim, dengan format seperti berikut :
                    </p>
                    <h6>231700</h6>
                    <h6>241700</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NISN_NIM"
                    name="NISN_NIM"
                    className="form-control"
                    placeholder="Masukan NISN / NIM Ketua & Anggota Tim"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label htmlFor="WHATSAPP_KETUA" className="form-label">
                    Nomor WhatsApp Ketua Tim
                  </label>
                  <label>
                    <p>
                      Harap tulis dengan kode telepon, contoh : (kode negara)
                      (nomor telepon) +62 81770914xxxx
                    </p>
                    <p>
                      Notes : Dimohon untuk mengisi nomor ketua tim dengan
                      benar, untuk dimasukan kedalam group
                    </p>
                  </label>
                  <input
                    type="number"
                    id="WHATSAPP_KETUA"
                    name="WHATSAPP_KETUA"
                    className="form-control"
                    placeholder="Masukan Nomor WhatsApp Ketua Tim"
                    required
                  />
                </div>
                <div className="input-box">
                  <label for="EMAIL_KETUA" className="form-label">
                    Alamat Email Ketua Tim
                  </label>
                  <label>
                    <p>
                      Notes : Dimohon untuk mengisi email dengan benar,
                      pengiriman LOA akan dikirim melalui email address ketua
                      tim yang di isi.
                    </p>
                  </label>
                  <input
                    type="email"
                    id="EMAIL_KETUA"
                    name="EMAIL_KETUA"
                    className="form-control"
                    placeholder="Masukan Email Ketua Tim"
                    required
                  />
                </div>
              </div>

              {/* DATA SEKOLAH START */}
              {/* DATA SEKOLAH START */}
              <h1>DATA SEKOLAH</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_SEKOLAH" className="form-label">
                    Nama Sekolah/Universitas
                  </label>
                  <label>
                    <p>
                      Notes : Masukan nama sekolah dengan format sesuai urutan
                      nama ketua dan anggota tim asal sekolah masing - masing,
                      dengan format seperti berikut :
                    </p>
                    <h6>SMA CERIA</h6>
                    <h6>SMA BAHAGIA</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NAMA_SEKOLAH"
                    name="NAMA_SEKOLAH"
                    className="form-control"
                    placeholder="Masukan Nama Sekolah/Universitas Anda"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="NPSN" className="form-label">
                    Nomor Pokok Sekolah Nasional (NPSN)
                  </label>
                  <label>
                    <p>
                      Notes : Masukan NPSN jika masi bersekolah dengan sesuai
                      urutan nama ketua dan anggota tim, dengan format seperti
                      berikut :
                    </p>
                    <h6>1201301</h6>
                    <h6>1302402</h6>
                  </label>
                  <textarea
                    type="number"
                    id="NPSN"
                    name="NPSN"
                    className="form-control"
                    placeholder="Masukan Nomor Pokok Sekolah Nasional (NPSN)"
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="JENJANG_PENDIDIKAN" className="form-label">
                    Jenjang Pendidikan{" "}
                  </label>
                  <select
                    type="text"
                    id="JENJANG_PENDIDIKAN"
                    name="JENJANG_PENDIDIKAN"
                    className="form-control"
                    placeholder="Pilih Jenjang Pendidikan"
                    required
                  >
                    <option value="">--Pilih Jenjang Pendidikan Anda--</option>
                    <option value="Sekolah Menengah Atas">
                      Sekolah Menengah Atas
                    </option>
                    <option value="Universitas">
                      Universitas
                    </option>
                  </select>
                </div>
                <div className="input-box">
                  <label for="PROVINSI" className="form-label">
                    Provinsi
                  </label>
                  <input
                    type="text"
                    id="PROVINSI"
                    name="PROVINSI"
                    className="form-control"
                    placeholder="Masukan Provinsi Anda"
                    required
                  />
                </div>
              </div>
              {/* DATA SEKOLAH END */}
              {/* DATA SEKOLAH END */}

              {/* DATA PEMBIMBING START */}
              {/* DATA PEMBIMBING START */}
              <h1>DATA PEMBIMBING</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label for="NAMA_PEMBIMBING" className="form-label">
                    Nama Guru/Pembimbing
                  </label>
                  <textarea
                    type="text"
                    id="NAMA_PEMBIMBING"
                    name="NAMA_PEMBIMBING"
                    className="form-control"
                    placeholder="Masukan Nama Guru/Pembimbing"
                    required
                  ></textarea>
                </div>

                <div className="input-box">
                  <label
                    for="WHATSAPP_PEMBIMBING"
                    className="form-label"
                  >
                    Nomor WhatsApp Guru/Pembimbing
                  </label>
                  <label>
                    <p>
                      Harap tulis dengan kode telepon, contoh : (kode negara)
                      (nomor telepon) +62 81770914xxx
                    </p>
                  </label>
                  <input
                    type="number"
                    id="WHATSAPP_PEMBIMBING"
                    name="WHATSAPP_PEMBIMBING"
                    className="form-control"
                    placeholder="Masukan Nomor WhatsApp Guru/Pembimbing"
                    required
                  />
                </div>

                <div className="input-box">
                  <label for="EMAIL_PEMBIMBING" className="form-label">
                    Alamat Email Guru/Pembimbing
                  </label>
                  <input
                    type="email"
                    id="EMAIL_PEMBIMBING"
                    name="EMAIL_PEMBIMBING"
                    className="form-control"
                    placeholder="Alamat Email Guru/Pembimbing"
                    required
                  />
                </div>
              </div>
              {/* DATA PEMBIMBING END */}
              {/* DATA PEMBIMBING END */}


              {/* GENERAL INFORMATION START */}
              {/* GENERAL INFORMATION START */}
              <div className="">
                <h1>INFORMASI UMUM</h1>
                <h1 className="garis-bawah"></h1>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label for="ALAMAT" className="form-label">
                    Alamat Lengkap
                  </label>
                  <label>
                    <p>
                      Mohon tuliskan alamat lengkap (Nama Jalan, Nomor Rumah,
                      RT & RW, Kecamatan, Kabupaten, Kota, Provinsi, Kode Pos)
                    </p>
                  </label>
                  <textarea
                    type="text"
                    id="ALAMAT"
                    name="ALAMAT"
                    className="form-control"
                    placeholder="Masukan Alamat Lengkap Anda"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label for="SUMBER_INFORMASI" className="form-label">
                    Sumber Informasi Kompetisi IYPO 2025
                  </label>
                  <select
                    type="text"
                    id="SUMBER_INFORMASI"
                    name="SUMBER_INFORMASI"
                    className="form-control"
                    placeholder="--Choose Information Resources-- "
                    required
                  >
                    <option value="">--Pilih Sumber Informasi--</option>
                    <option value="IYSA Instagram">IYSA Instagram</option>
                    <option value="IYPO Instagram">IYPO Instagram</option>
                    <option value="Pembimbing/Sekolah">
                      Pembimbing/Sekolah
                    </option>
                    <option value="IYSA FaceBook">IYSA FaceBook</option>
                    <option value="IYSA Linkedin">IYSA Linkedin</option>
                    <option value="IYSA Website">IYSA Website</option>
                    <option value="IYPO Website">IYPO Website</option>
                    <option value="IYSA Email">IYSA Email</option>
                    <option value="IYPO Email">IYPO Email</option>
                    <option value="Acara Sebelumnya">Acara Sebelumnya</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="input-box">
                  <label for="FILE" className="form-label">
                    Jika Anda mendapatkan pendaftaran gratis dari acara
                    sebelumnya atau kegiatan kunjungan sekolah sebelumnya, harap
                    lampirkan bukti dokumentasi{" "}
                  </label>
                  <input
                    type="url"
                    id="FILE"
                    name="FILE"
                    className="form-control"
                    placeholder="Upload Link File Drive"
                  />
                </div>
              </div>
              {/* GENERAL INFORMATION END */}
              {/* GENERAL INFORMATION END */}

              <div className="button">
                <input type="submit" value="KIRIM" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
