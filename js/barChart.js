const ctx = document.getElementById('myBarChart').getContext('2d');

const datas = [12.5, 6.2, 4.2, 2.5, 2.12, 1,5] // dalam milliar

const myBarChart = new Chart(ctx, {
    type: 'bar', // tipe chart
    data: {
        labels: ["Infrastruktur", "Ekonomi", "Kesehatan", "Pendidikan", "Lingkungan", "Lainnya"], // label sumbu X
        datasets: [{
            label: 'Pendapatan (juta)',
            data: datas.map(d => d * 1_000_000),
            backgroundColor: [
                '#ADD8E6',
                '#6EE7B7',
                '#FF6384',
                '#eea55d',
                '#4ca165',
                '#99a1af',
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)'
            // ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    // 👇 Callback untuk format sumbu Y
                    callback: function (value) {
                        const inMillions = value / 1000000;
                        return 'Rp ' + inMillions.toFixed(0) + ' M';
                    }
                }
            }
        }
    }
});

