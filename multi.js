
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


document.addEventListener("DOMContentLoaded", () => {
const steps = document.querySelectorAll('.step');
const detailBox = document.getElementById('detailBox');

const descriptions = {
  1: "<b>Collecting</b><br>Mengumpulkan energi matahari tanpa gangguan atmosfer, memungkinkan produksi energi konstan sepanjang waktu.",
  
  2: "<b>Conversion (Space)</b><br>Energi matahari diubah menjadi listrik DC lalu dikonversi menjadi gelombang mikro frekuensi tinggi.",
  
  3: "<b>Transmission</b><br>Energi dikirim ke Bumi menggunakan antena besar dengan teknologi beam fokus agar efisien dan aman.",
  
  4: "<b>Reception</b><br>Rectenna di Bumi menangkap gelombang mikro dan mengubahnya menjadi energi listrik.",
  
  5: "<b>Conversion (Earth)</b><br>Energi dikonversi kembali menjadi listrik DC lalu disesuaikan ke sistem listrik.",
  
  6: "<b>Distribution</b><br>Listrik didistribusikan ke rumah dan industri melalui jaringan listrik."
};

let activeStep = null;

steps.forEach(step => {
  step.addEventListener("click", () => {

    const stepNum = step.getAttribute("data-step");


    if (activeStep === stepNum) {
      detailBox.innerHTML = "Klik salah satu icon untuk melihat penjelasan";
      detailBox.classList.remove("show");

      step.classList.remove("active");
      activeStep = null;
      return;
    }


    const text = descriptions[stepNum] || "Data tidak ditemukan";

    detailBox.innerHTML = text;
    detailBox.classList.add("show");

    steps.forEach(s => s.classList.remove("active"));
    step.classList.add("active");

    activeStep = stepNum;
  });
});

});



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


