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
    description: "Automated forecasting site for inland wave-pool water temperature guidance. Hourly NWS data feeds a physics-based thermal model (solar radiation, evaporative cooling, ambient heat exchange) to estimate pool surface temperature; Apache on AWS EC2 serves the output. A GitHub Actions CI/CD pipeline runs tests on every push and auto-deploys to the server on merge to main. Outcome: zero-touch public forecast tool with full automation from data ingest to live deployment.",
    tech: ["Python", "AWS EC2", "Apache", "HTML", "CSS", "NWS API", "cron", "GitHub Actions", "CI/CD"],
    status: "Live",
    date: "2023-03",
    link: "http://www.wavepoolweather.com",
    files: [
      { name: "README.md", desc: "Wave pool water temperature forecast site" },
      { name: "thermal_model.py", desc: "Physics-based pool temperature model — solar radiation, evaporative cooling, ambient heat exchange" },
      { name: ".github/workflows/deploy.yml", desc: "CI/CD pipeline — automated tests on push, auto-deploy to EC2 on merge to main" },
      { name: "tech_stack.txt", desc: "Python · AWS EC2 · Apache · NWS API · cron · GitHub Actions" },
      { name: "status.txt", desc: "Live — wavepoolweather.com" }
    ]
  }
];
