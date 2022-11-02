const menuToggle = document.querySelector(".menuToggle input");
const nav = document.querySelector(".sideNav");
const chartLine = document.querySelector(".chartLine-container");
const chartDoughnut = document.querySelector(".doughnut-container");
const dashboard = document.getElementById("dashboard");
const product = document.getElementById("product-container");
const transaction = document.getElementById("transaction-container");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
  chartLine.classList.toggle("smallLine");
  chartDoughnut.classList.toggle("smallDoughnut");
  dashboard.classList.toggle("smallDashboard");
  product.classList.toggle("smallProduct");
  transaction.classList.toggle("smallTransaction");
});

// Logout
const btnLogout = document.getElementById("logout");

btnLogout.addEventListener("click", () => {
  if (confirm("Apakah anda yakin ingin keluar?")) {
    window.open("/", "_self");
  }
});
// End

// Chart Js

// Line Chart
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById("Line-Chart"), config);
// End Line Chart

// Doughnut Chart
const data2 = {
  labels: ["Costumers", "Product", "Orders", "Income"],
  datasets: [
    {
      // label: 'My First Dataset',
      data: [100, 30, 200, 200],
      backgroundColor: [
        "rgb(106,90,205)",
        "rgb(255, 255, 0)",
        "rgb(70, 130, 180)",
        "rgb(0, 128, 0)",
      ],
      hoverOffset: 4,
    },
  ],
};
const config2 = {
  type: "doughnut",
  data: data2,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        // text: 'Data'
      },
    },
  },
};

const myChart2 = new Chart(document.getElementById("Doughnut-Chart"), config2);
// End Doughnut Chart

// $(".sidebar ul li").on('click', function () {
//     $(".sidebar ul li.active").removeClass('active')
//     $(this).addClass('active')
// })

// $('.open-btn').on('click', function () {
//     $('.sidebar').removeClass('active')
// })
// $('.close-btn').on('click', function () {
//     $('.sidebar').addClass('active')
// })

// let sidebar = document.querySelector('.sidebar ul li')
// let sidebarActive = sidebar.className = ('active')

// sidebar.addEventListener('click', () => {
//     if (sidebarActive) {
//         sidebar.classList.remove('active')
//     } else {
//         sidebar.classList.toggle('active')
//     }
// })
