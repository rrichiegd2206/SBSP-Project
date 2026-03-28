
document.querySelectorAll('.dropdown > a').forEach(menu => {
  menu.addEventListener('click', function (e) {
    e.preventDefault();

    const parent = this.parentElement;

    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== parent) d.classList.remove('active');
    });

    parent.classList.toggle('active');
  });
});


document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach(d => {
      d.classList.remove("active");
    });
  }
});



const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});



const steps = document.querySelectorAll('.step');
const detailBox = document.getElementById('detailBox');

const descriptions = {
  1: "<b>Collecting</b><br>Fungsi utama sistem Tenaga Surya Berbasis Luar Angkasa adalah mengumpulkan energi matahari secara terus-menerus di orbit tanpa gangguan atmosfer, cuaca, maupun siklus siang-malam.",
  
  2: "<b>Conversion (In Space)</b><br>Energi matahari diubah menjadi listrik arus searah (DC), lalu dikonversi menjadi gelombang mikro frekuensi tinggi menggunakan perangkat elektronik khusus.",
  
  3: "<b>Transmission</b><br>Energi dikirim ke Bumi melalui antena raksasa dengan teknologi phased-array agar tetap fokus, aman, dan presisi.",
  
  4: "<b>Reception</b><br>Gelombang mikro diterima oleh rectenna, yaitu antena penyearah besar yang menangkap energi dengan efisien.",
  
  5: "<b>Conversion (On Earth)</b><br>Energi gelombang mikro dikonversi kembali menjadi listrik DC menggunakan dioda dalam rectenna.",
  
  6: "<b>Distribution</b><br>Listrik diubah menjadi AC dan disalurkan ke jaringan listrik untuk digunakan secara stabil 24/7."
};



if (steps.length > 0 && detailBox) {

  steps.forEach(step => {
    step.addEventListener('click', () => {
      const id = step.getAttribute('data-step');


      steps.forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
      });


      step.classList.remove('hidden');
      step.classList.add('active');

      detailBox.innerHTML = descriptions[id];
    });
  });


  document.querySelector('.flow')?.addEventListener('dblclick', () => {
    steps.forEach(s => {
      s.classList.remove('hidden', 'active');
    });

    detailBox.innerHTML = "Klik salah satu icon untuk melihat penjelasan";
  });
}

detailBox.classList.add("show");

