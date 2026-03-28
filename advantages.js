
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

document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach(d => {
      d.classList.remove("active");
    });
  }
});