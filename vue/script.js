var app = new Vue({
  el: "#app",
  data: {
    message: "Привет, Vue!",
  },
  methods: {
    addDots(e) {
      if (e.target.checked) {
        chart1.options.pointStyle = true;
        chart1.update();
        chart2.options.pointStyle = true;
        chart2.update();
        chart3.options.pointStyle = true;
        chart3.update();
      } else {
        chart1.options.pointStyle = false;
        chart1.update();
        chart2.options.pointStyle = false;
        chart2.update();
        chart3.options.pointStyle = false;
        chart3.update();
      }
    },
    hidePlot(e) {
      if (e.target.checked) {
        switch (e.target.name) {
          case "plot1":
            plots.children[0].classList.remove("hidden");
            break;
          case "plot2":
            plots.children[1].classList.remove("hidden");
            break;
          case "plot3":
            plots.children[2].classList.remove("hidden");
            break;
        }
      } else {
        switch (e.target.name) {
          case "plot1":
            plots.children[0].classList.add("hidden");
            break;
          case "plot2":
            plots.children[1].classList.add("hidden");
            break;
          case "plot3":
            plots.children[2].classList.add("hidden");
            break;
        }
      }
    },
  },
});

const ctx1 = document.getElementById("myChart1");
const ctx2 = document.getElementById("myChart2");
const ctx3 = document.getElementById("myChart3");
const plots = document.getElementById("plots");
const select = document.getElementById("tolsh");

const chart1 = new Chart(ctx1, {
  type: "line",
  data: {
    labels: [
      
      "0",
      "20",
      "40",
      "60",
      "80",
      "100",
      "120",
      "140",
      "160",
      "180",
      "200",
      "220",
      "240",
      "260",
      "280",
      "300",
      "320",
      "340",
      "360",
      "380",
      "400",
      "420",
      "440",
      "460",
      "480",
      "500",
      "520",
      "540",
      "560",
      "580",
      "600",
      "620",
      "640",
      "660",
      "680",
      "700",
      "720",
      "740",
      "760",
      "780",
      "800",
      "820",
      "840",
      "860",
      "880",
      "900",
      

    ],
    datasets: [
      {
        label: "U, В",
        data: [-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,-150,150,],
        borderWidth: 1,
      },

      zoom: {
        enabled: true,
        mode: 'xy'
    },
      

    ],
  },
  options: {
    pointStyle: false,
    borderColor: "red",
    scales:{
      y:{
        min:-160,
        max:160
      }
    }
  },
  
});

const chart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: [
     
      "0",
      "20",
      "40",
      "60",
      "80",
      "100",
      "120",
      "140",
      "160",
      "180",
      "200",
      "220",
      "240",
      "260",
      "280",
      "300",
      "320",
      "340",
      "360",
      "380",
      "400",
      "420",
      "440",
      "460",
      "480",
      "500",
      "520",
      "540",
      "560",
      "580",
      "600",
      "620",
      "640",
      "660",
      "680",
      "700",
      "720",
      "740",
      "760",
      "780",
      "800",
      "820",
      "840",
      "860",
      "880",
      "900",
    ],
    datasets: [
      {
        label: "Ia, A",
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
        borderWidth: 1,
      },
    ],
  },
  options: {
    pointStyle: false,
    borderColor: "blue",
    scales:{
      y:{
        min:-160,
        max:160
      }
    }
  },
});

const chart3 = new Chart(ctx3, {
  type: "line",
  data: {
    labels: [
      
      "0",
      "20",
      "40",
      "60",
      "80",
      "100",
      "120",
      "140",
      "160",
      "180",
      "200",
      "220",
      "240",
      "260",
      "280",
      "300",
      "320",
      "340",
      "360",
      "380",
      "400",
      "420",
      "440",
      "460",
      "480",
      "500",
      "520",
      "540",
      "560",
      "580",
      "600",
      "620",
      "640",
      "660",
      "680",
      "700",
      "720",
      "740",
      "760",
      "780",
      "800",
      "820",
      "840",
      "860",
      "880",
      "900",
    ],
    datasets: [
      {
        label: "# Ib, A",
        data: [12, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3,],
        borderWidth: 1,
      },
    ],
  },
  options: {
    pointStyle: false,
    borderColor: "green",
  },
});

select.addEventListener("change", function (e) {
  chart1.data.datasets[0].borderWidth = e.target.value;
  chart1.update();
  chart2.data.datasets[0].borderWidth = e.target.value;
  chart2.update();
  chart3.data.datasets[0].borderWidth = e.target.value;
  chart3.update();
});
