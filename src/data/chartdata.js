import { plugins } from "chart.js";
import { callback } from "chart.js/helpers";

export const salesChartData = {
  title: "Monthly Sales",

  labels: ["January", "February", "March", "April", "May", "June"],

  datasets: [
    {
      label: "Sales",
      type: "line",
      data: [150, 25, 180, 400, 300, 450],
      fill: false,
      borderColor: "#42A5F5",
      backgroundColor: "#075b2e",
      tension: 0.4,
    },

    {
      label: "Users",
      type: "bar",
      data: [90, 270, 455, 340, 165, 550],
      backgroundColor: "#f54290",
      borderColor: "#42A5F5",
      tension: 0.4,
    },
  ],

  options: {
    interaction: {
      mode: "index",
      intersect: false,
    },
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: "jan-jun sales",
        font: {
          size: 16,
        },
      },
      legend: {
        position: "bottom",
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        // ticks: {
        //   minRotation: 45,
        //   maxRotation: 45,
        // },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
};

export const userChartData = {
  title: "User Growth",
  labels: [
    "Label 1",
    "Label 2",
    "Label 3",
    "Label 4",
    "Label 5",
    "Label 6",
    "Label 7",
    "Label 8",
    "Label 9",
    "Label 10",
    "Label 11",
    "Label 12",
    "Label 13",
    "Label 14",
    "Label 15",
    "Label 16",
    "Label 17",
    "Label 18",
    "Label 19",
    "Label 20",
    "Label 21",
    "Label 22",
    "Label 23",
    "Label 24",
    "Label 25",
    "Label 26",
    "Label 27",
    "Label 28",
    "Label 29",
    "Label 30",
    "Label 31",
    "Label 32",
    "Label 33",
    "Label 34",
    "Label 35",
    "Label 36",
    "Label 37",
    "Label 38",
    "Label 39",
    "Label 40",
    "Label 41",
    "Label 42",
    "Label 43",
    "Label 44",
    "Label 45",
    "Label 46",
    "Label 47",
    "Label 48",
    "Label 49",
    "Label 50",
    "Label 51",
    "Label 52",
    "Label 53",
    "Label 54",
    "Label 55",
    "Label 56",
    "Label 57",
    "Label 58",
    "Label 59",
    "Label 60",
  ],

  datasets: [
    {
      type: "bar",
      label: "2022",
      data: [
        120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380,
        400, 420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660,
        680, 700, 720, 740, 760, 780, 800, 820, 840, 860, 880, 900, 920, 940,
        960, 980, 1000, 1020, 1040, 1060, 1080, 1100, 1120, 1140, 1160, 1180,
        1200, 1220, 1240, 1260, 1280, 1300,
      ],
    },
    {
      type: "bar",
      label: "2023",
      data: [
        150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410,
        430, 450, 470, 490, 510, 530, 550, 570, 590, 610, 630, 650, 670, 690,
        710, 730, 750, 770, 790, 810, 830, 850, 870, 890, 910, 930, 950, 970,
        990, 1010, 1030, 1050, 1070, 1090, 1110, 1130, 1150, 1170, 1190, 1210,
        1230, 1250, 1270, 1290, 1310, 1330,
      ],
    },
    {
      type: "bar",
      label: "2024",
      data: [
        180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440,
        460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720,
        740, 760, 780, 800, 820, 840, 860, 880, 900, 920, 940, 960, 980, 1000,
        1020, 1040, 1060, 1080, 1100, 1120, 1140, 1160, 1180, 1200, 1220, 1240,
        1260, 1280, 1300, 1320, 1340, 1360,
      ],
    },
  ],
  options: {
    interaction: {
      mode: "index",
      intersect: false,
    },
    aspectRatio: 1.2,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        ticks: {
          // autoSkip: false,
          //     autoSkip: true,
          // maxTicksLimit: 10
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
};

export const pieChartData = {
  title: "browsers",
  labels: ["Chrome", "Firefox", "Edge"],
  datasets: [
    {
      data: [45, 30, 25],
      type: "doughnut",
      label: "Browser Usage",
      backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
    },
  ],
  options: {
    aspectRatio: 1.2,
  },
};

export const multiAxisData = {
  title: "MultiAxis",
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      type: "line",
      fill: false,
      borderColor: "#42A5F5",
      yAxisID: "y",
      tension: 0.4,
      data: [65, 59, 80, 81, 56, 55, 10],
    },
    {
      label: "Dataset 2",
      type: "line",
      fill: false,
      borderColor: "#00bb7e",
      yAxisID: "y1",
      tension: 0.4,
      data: [28, 48, 40, 19, 86, 27, 90],
    },
  ],
  options: {
    stacked: false,
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          color: "#495057",
        },
        grid: {
          drawOnChartArea: false,
          color: "#ebedef",
        },
      },
    },
  },
};
