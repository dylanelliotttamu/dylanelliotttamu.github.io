const projects = [
  {
    id: "ml-da",
    name: "ML-DataAssimilation",
    description: "Tested an iterative machine learning training technique on a global circulation model (AGCM) using a reservoir computing (echo state network) framework. Integrated data assimilation and ML training, training each hybrid model iteration on the previous time series it produced. Found promising results; manuscript submitted to a top atmospheric sciences journal.",
    tech: ["Python", "FORTRAN", "HPC", "Reservoir Computing", "NumPy", "Matplotlib"],
    status: "Published / Ongoing",
    date: "2023-12",
    link: null,
    files: [
      { name: "README.md", desc: "Project overview and results" },
      { name: "tech_stack.txt", desc: "Python · FORTRAN · HPC · Reservoir Computing" },
      { name: "status.txt", desc: "Manuscript submitted — Fall 2024 thesis defense" }
    ]
  },
  {
    id: "cnc-lidar",
    name: "CNC-LidarProcessor",
    description: "Built a program from scratch to efficiently extract elevation data from LiDAR point cloud datasets at prescribed coordinates. Engineered to process large datasets within the performance limits of a standard laptop. Designed to be easily adapted for future projects and built entirely with open-source software.",
    tech: ["Python", "LiDAR", "Open Source", "pandas", "laspy"],
    status: "Complete",
    date: "2022-06",
    link: null,
    files: [
      { name: "README.md", desc: "LiDAR elevation extraction tool" },
      { name: "tech_stack.txt", desc: "Python · laspy · pandas · Open Source" },
      { name: "status.txt", desc: "Production — deployed at CNC Catastrophe" }
    ]
  },
  {
    id: "wavepoolweather",
    name: "WavePoolWeather.com",
    description: "Developed a fully-automated dynamic website forecasting wave pool water temperatures. Backend reads National Weather Service APIs, manages files, and executes scheduled scripts via cronjobs on an AWS EC2 instance running Apache. Frontend designed with CSS/HTML. Helps surfers decide wetsuit thickness for inland surf parks.",
    tech: ["Python", "AWS EC2", "Apache", "HTML", "CSS", "NWS API", "cron"],
    status: "Live",
    date: "2023-03",
    link: "http://www.wavepoolweather.com",
    files: [
      { name: "README.md", desc: "Wave pool water temperature forecast site" },
      { name: "tech_stack.txt", desc: "Python · AWS EC2 · Apache · NWS API · cron" },
      { name: "status.txt", desc: "Live — wavepoolweather.com" }
    ]
  }
];
