// data/papers.js
// Publication data rendered into #papers-mount by scripts/papers.js
// Add new entries to the top of the array to keep most-recent-first ordering.

const papersData = [
  {
    title: "Model Training, Data Assimilation, and Forecast Experiments with a Hybrid Atmospheric Model that Incorporates Machine Learning",
    authors: "D. Elliott, T. Arcomano, I. Szunyogh, B. R. Hunt",
    venue: "arXiv preprint arXiv:2509.22465",
    year: 2025,
    description: "Tests a hybrid physics/ML atmospheric model (SPEEDY + ML component) against ERA5 reanalysis, using an LETKF data assimilation scheme across multiple training configurations to evaluate gains in analysis and forecast accuracy.",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2509.22465" }
    ]
  },
  {
    title: "Results and Learnings from the TADI 2024 Methane Quantification Trial",
    authors: "M. A. Gully-Santiago, B. Smith, T. Frederick, K. Dawson, D. Elliott",
    venue: "SPE Europe Energy Conference and Exhibition",
    year: 2025,
    description: "Reports results from the 2024 TADI trial evaluating remote-sensing and in-situ instruments for methane emission detection and quantification.",
    links: [
      { label: "OnePetro", url: "https://onepetro.org/SPEEURO/proceedings/25EURO/25EURO/692705" },
      { label: "Scholar", url: "https://scholar.google.com/scholar?oi=bibs&cluster=552949264384838213&btnI=1&hl=en" }
    ]
  }
];
