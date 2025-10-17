import { useState } from 'react';

const CacinganEducationWebsite = () => {
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">CacinganPedia</h1>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => setActiveTab('intro')} className={`hover:underline ${activeTab === 'intro' ? 'font-bold' : ''}`}>Pengenalan</button>
            <button onClick={() => setActiveTab('types')} className={`hover:underline ${activeTab === 'types' ? 'font-bold' : ''}`}>Jenis Cacing</button>
            <button onClick={() => setActiveTab('symptoms')} className={`hover:underline ${activeTab === 'symptoms' ? 'font-bold' : ''}`}>Gejala</button>
            <button onClick={() => setActiveTab('prevention')} className={`hover:underline ${activeTab === 'prevention' ? 'font-bold' : ''}`}>Pencegahan</button>
          </nav>
          <button className="md:hidden">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Mengenal dan Mencegah Cacingan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Website edukasi komprehensif tentang penyakit cacingan, gejala, pencegahan, dan pengobatannya.
          </p>
          <div className="mt-8">
            <img 
  src="https://placeholder-image-service.onrender.com/image/600x400?prompt=Colorful educational illustration showing various intestinal worms and parasites with labels and descriptions&id=ed8a9b7c-6d5e-4f3a-9c2b-1d0e7f8a6b5c" 
  alt="Ilustrasi edukatif berwarna menunjukkan berbagai jenis cacing usus dan parasit dengan label dan penjelasan" 
  className="rounded-lg shadow-lg mx-auto"
/>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        {/* Introduction Section */}
        {activeTab === 'intro' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Apa Itu Cacingan?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  Cacingan adalah infeksi yang disebabkan oleh parasit cacing yang hidup di dalam tubuh manusia, terutama di saluran pencernaan. Penyakit ini umum terjadi di daerah dengan sanitasi kurang baik dan dapat menyerang semua usia, terutama anak-anak.
                </p>
                <p className="text-lg mb-4">
                  Cacingan dapat menyebabkan berbagai masalah kesehatan seperti anemia, gizi buruk, dan gangguan pertumbuhan pada anak. Penting untuk memahami cara mencegah dan mengobati infeksi cacingan secara tepat.
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Fakta Penting:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Lebih dari 1.5 miliar orang terinfeksi cacingan secara global</li>
                    <li>Anak-anak usia sekolah paling rentan terhadap infeksi</li>
                    <li>Cacingan dapat mempengaruhi kemampuan belajar anak</li>
                    <li>Pengobatan yang tepat sangat efektif mengatasi cacingan</li>
                  </ul>
                </div>
              </div>
              <div>
                <img 
  src="https://placeholder-image-service.onrender.com/image/500x350?prompt=Detailed cross-sectional medical illustration of human digestive system with visible intestinal worms and parasites&id=f2e3d4c5-b6a7-8c9d-0e1f-2a3b4c5d6e7f" 
  alt="Ilustrasi medis detail sistem pencernaan manusia dengan tampilan potongan melintang menunjukkan cacing usus dan parasit" 
  className="rounded-lg shadow-md"
/>
              </div>
            </div>
          </section>
        )}

        {/* Types of Worms Section */}
        {activeTab === 'types' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Jenis-Jenis Cacing Parasit</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Worm Type 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-3 text-destructive">Cacing Gelang (Ascaris lumbricoides)</h3>
                <img 
  src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Detailed scientific illustration of Ascaris lumbricoides roundworm showing its cylindrical body and anatomical features&id=a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6" 
  alt="Ilustrasi ilmiah detail cacing gelang Ascaris lumbricoides menunjukkan tubuh silindris dan fitur anatominya" 
  className="mb-4 rounded"
/>
                <p className="mb-3">Cacing parasit paling umum dengan panjang 15-35 cm. Menyebabkan ascariasis.</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Ditularkan melalui tanah terkontaminasi</li>
                  <li>Dapat bermigrasi ke berbagai organ</li>
                  <li>Menyebabkan gangguan penyerapan nutrisi</li>
                </ul>
              </div>

              {/* Worm Type 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-3 text-destructive">Cacing Tambang (Necator americanus)</h3>
                <img 
  src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Microscopic illustration of Necator americanus hookworm showing its hooked mouthparts and slender body structure&id=b7c8d9e0-f1a2-3b4c-5d6e-7f8g9h0i1j2k" 
  alt="Ilustrasi mikroskopis cacing tambang Necator americanus menunjukkan bagian mulut berkait dan struktur tubuh ramping" 
  className="mb-4 rounded"
/>
                <p className="mb-3">Cacing kecil dengan pengait di mulut untuk menempel pada usus dan menghisap darah.</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Menembus kulit dari tanah terkontaminasi</li>
                  <li>Menyebabkan anemia berat</li>
                  <li>Gejala termasuk lemas dan sesak napas</li>
                </ul>
              </div>

              {/* Worm Type 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-3 text-destructive">Cacing Kremi (Enterobius vermicularis)</h3>
                <img 
  src="https://placeholder-image-service.onrender.com/image/300x200?prompt=Scientific illustration of Enterobius vermicularis pinworm showing its small slender body and pointed tail&id=c3d4e5f6-g7h8-9i0j-1k2l-3m4n5o6p7q8r" 
  alt="Ilustrasi ilmiah cacing kremi Enterobius vermicularis menunjukkan tubuh kecil ramping dan ekor runcing" 
  className="mb-4 rounded"
/>
                <p className="mb-3">Cacing kecil dan tipis yang menyebabkan gatal hebat di area anus, terutama malam hari.</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Ditularkan melalui kontak langsung</li>
                  <li>Sangat menular dalam keluarga</li>
                  <li>Diagnosis dengan tes selotip anal</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Symptoms Section */}
        {activeTab === 'symptoms' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Gejala dan Tanda Cacingan</h2>
            <div className="bg-muted p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-destructive">Gejala Umum:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <span>Nyeri perut dan diare</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <span>Mual dan muntah</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <span>Penurunan berat badan tanpa sebab</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <span>Gatal di area anus (khusus cacing kremi)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-destructive">Gejala pada Anak:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <span>Gangguan pertumbuhan dan perkembangan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <span>Anemia dan lemas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <span>Gangguan konsentrasi belajar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <span>Nafsu makan menurun</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">Kapan Harus Ke Dokter?</h3>
                <p className="mb-4">Segera konsultasi ke dokter jika mengalami:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Gejala berat yang tidak membaik dalam beberapa hari</li>
                  <li>Muntah atau tinja mengandung cacing</li>
                  <li>Gejala anemia seperti lemas, pucat, sesak napas</li>
                  <li>Demam tinggi disertai gejala cacingan</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Prevention Section */}
        {activeTab === 'prevention' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Pencegahan dan Pengobatan</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Cara Mencegah Cacingan</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold">Cuci Tangan Teratur</h4>
                      <p className="text-muted-foreground">Cuci tangan dengan sabun sebelum makan dan setelah dari toilet</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold">Konsumsi Makanan Matang</h4>
                      <p className="text-muted-foreground">Masak daging dan sayuran hingga matang sempurna</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold">Minum Air Bersih</h4>
                      <p className="text-muted-foreground">Hindari air mentah, minum air yang telah dimasak atau disaring</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold">Gunakan Alas Kaki</h4>
                      <p className="text-muted-foreground">Selalu pakai alas kaki saat keluar rumah</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Pengobatan Cacingan</h3>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="mb-4">Pengobatan cacingan biasanya menggunakan obat cacing yang diresepkan dokter. Beberapa jenis obat yang umum digunakan:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Albendazole</li>
                    <li>Mebendazole</li>
                    <li>Pyrantel pamoate</li>
                    <li>Ivermectin (untuk jenis cacing tertentu)</li>
                  </ul>
                  <div className="mt-4 p-4 bg-accent text-accent-foreground rounded">
                    <strong>Penting:</strong> Selalu konsultasi dengan dokter sebelum mengonsumsi obat cacing. Dosis dan jenis obat disesuaikan dengan usia, berat badan, dan jenis cacing.
                  </div>
                </div>
                
                <img 
  src="https://placeholder-image-service.onrender.com/image/400x250?prompt=Step-by-step hygiene illustration showing hand washing, food preparation, and environmental cleanliness to prevent worm infections&id=d5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0" 
  alt="Ilustrasi langkah demi langkah praktik kebersihan menunjukkan cuci tangan, persiapan makanan, dan kebersihan lingkungan untuk mencegah infeksi cacing" 
  className="mt-6 rounded-lg shadow-md"
/>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CacinganPedia</h3>
              <p>Website edukasi tentang penyakit cacingan dan pencegahannya.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <p>Email: info@cacinganpedia.id</p>
              <p>Telepon: (021) 1234-5678</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
              <p className="text-sm">Informasi di website ini hanya untuk tujuan edukasi. Konsultasikan dengan dokter untuk diagnosis dan pengobatan.</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
            <p>© 2023 CacinganPedia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CacinganEducationWebsite;
