const projects = [
  {
    id: "ml-da",
    name: "ML-DataAssimilation",
    description: "Research project focused on improving atmospheric forecast behavior with a hybrid ML plus data-assimilation workflow. Implemented an iterative reservoir-computing approach on AGCM simulations and evaluated stability across successive forecast cycles. Outcome: a reproducible experiment framework and thesis-supported results prepared for manuscript submission.",
    tech: ["Python", "FORTRAN", "HPC", "Reservoir Computing", "NumPy", "Matplotlib"],
    status: "Research Completed",
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
    description: "Engineering project to automate LiDAR elevation extraction at target coordinates. Built a modular Python pipeline tuned for large point-cloud datasets on standard hardware, reducing manual processing effort and improving repeatability. Outcome: reusable workflow adopted for operational catastrophe-claims analysis.",
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
    description: "Built and deployed an automated forecasting website for inland wave-pool water temperature guidance. Designed backend jobs that ingest National Weather Service data, run scheduled processing tasks on AWS EC2, and publish updated forecasts through Apache. Outcome: continuously available public forecast tool with end-to-end automation.",
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
