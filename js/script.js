// Mobile menu toggle
document
  .getElementById("menu-toggle")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

// Back to top button
window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back-to-top");
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  if (!header) return;

  // Style configuration
  const styles = {
    initial: {
      background: 'transparent',
      backdropFilter: 'none',
      boxShadow: 'none'
    },
    scrolled: {
      background: '#1e3a8a',
    },
    transition: 'all 0.3s ease-in-out'
  };

  // Apply initial transition
  header.style.transition = styles.transition;

  function handleScroll() {
    if (window.scrollY > 50) {
      Object.assign(header.style, styles.scrolled);
    } else {
      Object.assign(header.style, styles.initial);
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize
});

document
  .getElementById("back-to-top")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (
        !document
          .getElementById("mobile-menu")
          .classList.contains("hidden")
      ) {
        document.getElementById("mobile-menu").classList.add("hidden");
      }
    }
  });
});

// IDM Chart
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("idmChart").getContext("2d");

  // Sample data for IDM progression
  const idmChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Rata-rata IDM Kabupaten",
          data: [0.66, 0.69, 0.73, 0.76, 0.78],
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.05)",
          borderWidth: 3,
          tension: 0.3,
          fill: true,
        },
        {
          label: "Desa Tertinggi",
          data: [0.89, 0.91, 0.94, 0.98, 0.98],
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.05)",
          borderWidth: 2,
          borderDash: [5, 5],
          tension: 0.3,
          fill: false,
        },
        {
          label: "Desa Terendah",
          data: [0.45, 0.49, 0.52, 0.60, 0.60],
          borderColor: "#ef4444",
          backgroundColor: "rgba(239, 68, 68, 0.05)",
          borderWidth: 2,
          borderDash: [5, 5],
          tension: 0.3,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            font: {
              family: "Inter",
              size: 12,
            },
            padding: 20,
          },
        },
        tooltip: {
          backgroundColor: "#1e293b",
          titleFont: {
            family: "Poppins",
            size: 14,
            weight: "bold",
          },
          bodyFont: {
            family: "Inter",
            size: 12,
          },
          padding: 12,
          cornerRadius: 8,
          displayColors: false,
          callbacks: {
            label: function (context) {
              return "Nilai IDM: " + context.parsed.y.toFixed(2);
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 0.4,
          max: 1,
          ticks: {
            stepSize: 0.1,
            callback: function (value) {
              return value.toFixed(1);
            },
          },
          grid: {
            drawBorder: false,
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      elements: {
        point: {
          radius: 4,
          hoverRadius: 6,
          backgroundColor: "white",
          borderWidth: 2,
        },
      },
    },
  });



  // Animate progress bars
  const progressBars = document.querySelectorAll(
    ".progress-bar-fill, .stage-indicator-fill"
  );
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});