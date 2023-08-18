const c = [
  ["tambaram", "potheri", "12.877277, 80.079177", "12.822448, 80.076889"],
  ["potheri", "tambaram", "12.877277, 80.079177", "12.822448, 80.076889"],
  ["laksar", "shaktigarh", "29.344603, 78.484528", "29.304876, 78.235202"],
  ["shaktigarh", "laksar", "29.344603, 78.484528", "29.304876, 78.235202"],
  ["Laksar", "Kela Khera", "29.295031, 78.701790", "29.352503, 78.210152"],
  ["Laksar", "Lohaghat", "28.917612, 79.501682", "29.186772, 79.513807"],
  ["Laksar", "Chamba", "29.644009, 78.262708", "29.732030, 78.475007"],
  ["Jhabrera", "Sultanpur", "29.797719, 77.836899", "29.849006, 77.886757"],
  ["Kela Khera", "Kirtinagar", "29.909372, 78.136749", "29.918870, 78.108872"],
  ["Muni Ki Reti", "Lalkuan", "29.806481, 78.232998", "29.806481, 78.232998"],
  ["Sultanpur", "Landhaura", "29.748263, 78.014668", "29.711325, 77.808041"],
  ["Herbertpur", "Dharchula", "29.897278, 78.157711", "30.087581, 78.514767"],
  ["Gauchar", "Devprayag", "30.217936, 78.749772", "30.193013, 78.777238"],
  ["Doiwala", "Gauchar", "30.093463, 78.566835", "30.304733, 78.352601"],
  ["Karnaprayag", "Dineshpur", "29.603070, 79.265266", "29.467636, 79.467003"],
  [
    "Lohaghat",
    "Mahua Kheraganj",
    "29.093585, 79.186929",
    "29.227899, 79.233621",
  ],
  [
    "Chamba",
    "Mahua Dabra Haripura",
    "29.658375, 78.285816",
    "29.687012, 78.318775",
  ],
  ["Lalkuan", "Dwarahat", "29.522178, 79.481072", "29.323615, 79.198174"],
  ["Kaladhungi", "Doiwala", "29.733934, 78.252379", "29.883045, 78.671512"],
  [
    "Mahua Dabra Haripura",
    "Herbertpur",
    "29.891401, 78.188905",
    "29.568992, 78.146353",
  ],
  ["Shaktigarh", "Laksar", "29.344603, 78.484528", "29.304876, 78.235202"],
  ["Kela Khera", "Laksar", "29.295031, 78.701790", "29.352503, 78.210152"],
  ["Lohaghat", "Laksar", "28.917612, 79.501682", "29.186772, 79.513807"],
  ["Chamba", "Laksar", "29.644009, 78.262708", "29.732030, 78.475007"],
  ["Sultanpur", "Jhabrera", "29.797719, 77.836899", "29.849006, 77.886757"],
  ["Kirtinagar", "Kela Khera", "29.909372, 78.136749", "29.918870, 78.108872"],
  ["Lalkuan", "Muni Ki Reti", "29.806481, 78.232998", "29.806481, 78.232998"],
  ["Landhaura", "Sultanpur", "29.748263, 78.014668", "29.711325, 77.808041"],
  ["Dharchula", "Herbertpur", "29.897278, 78.157711", "30.087581, 78.514767"],
  ["Devprayag", "Gauchar", "30.217936, 78.749772", "30.193013, 78.777238"],
  ["Gauchar", "Doiwala", "30.093463, 78.566835", "30.304733, 78.352601"],
  ["Dineshpur", "Karnaprayag", "29.603070, 79.265266", "29.467636, 79.467003"],
  [
    "Mahua Kheraganj",
    "Lohaghat",
    "29.093585, 79.186929",
    "29.227899, 79.233621",
  ],
  [
    "Mahua Dabra Haripura",
    "Chamba",
    "29.658375, 78.285816",
    "29.687012, 78.318775",
  ],
  ["Dwarahat", "Lalkuan", "29.522178, 79.481072", "29.323615, 79.198174"],
  ["Doiwala", "Kaladhungi", "29.733934, 78.252379", "29.883045, 78.671512"],
  [
    "Herbertpur",
    "Mahua Dabra Haripura",
    "29.891401, 78.188905",
    "29.568992, 78.146353",
  ],
  ["Nandaprayag", "Dharchula", "30.064145, 79.496704", "29.849977, 79.386841"],
  ["Garur", "Barkot", "30.398726, 78.509255", "30.392444, 78.531347"],
  ["Badrinath", "Didihat", "30.088763, 79.470034", "29.981764, 79.321718"],
  [
    "Muni Ki Reti",
    "Shaktigarh",
    "29.780918, 78.259206",
    "29.706992, 78.044973",
  ],
  ["Barkot", "Champawat", "29.867958, 78.195034", "29.610751, 78.110815"],
  ["Kapkot", "Dwarahat", "29.789120, 79.642946", "29.723548, 79.696555"],
  ["Champawat", "Badrinath", "30.128968, 79.389275", "29.890513, 79.347670"],
  ["Jhabrera", "Devprayag", "29.839193, 77.921537", "30.136555, 77.863858"],
  ["Kedarnath", "Kirtinagar", "30.765284, 78.601923", "30.785346, 78.259389"],
  [
    "Karnaprayag",
    "Nandaprayag",
    "30.279193, 79.242897",
    "30.271862, 79.247530",
  ],
  ["Gangotri", "Kedarnath", "31.013623, 78.880291", "30.931528, 78.396599"],
  ["Didihat", "Gangotri", "30.926070, 78.378960", "30.833602, 78.096701"],
  ["Kaladhungi", "Garur", "29.523723, 79.483956", "29.539257, 79.534767"],
  ["Laksar", "Kapkot", "29.934625, 78.139456", "29.493321, 78.323477"],
];
var f = 0;
var e = 0;
var g = 0;
function newfun() {
  var a = document.getElementById("from").value;
  var b = document.getElementById("to").value;

  a = a.toLowerCase();
  b = b.toLowerCase();

  for (let i = 0; i < c.length; i++) {
    if (c[i][0].toLowerCase() === a && c[i][1].toLowerCase() == b) {
      if (e === 0) {
        if (g == 0) {
          const d =
            "https://www.google.com/maps/dir/?api=1&origin=" +
            a +
            "&destination=" +
            b +
            "&travelmode=driving&waypoints=" +
            c[i][2];
          window.open(d, "_blank");
          f = 1;
        } else {
          const d =
            "https://www.google.com/maps/dir/?api=1&origin=" +
            a +
            "&destination=" +
            b +
            "&travelmode=walking&waypoints=" +
            c[i][2];

          window.open(d, "_blank");
          f = 1;
        }
      } else {
        if (g == 0) {
          const d =
            "https://www.google.com/maps/dir/?api=1&origin=" +
            a +
            "&destination=" +
            b +
            "&travelmode=driving&waypoints=" +
            c[i][3];
          window.open(d, "_blank");
        } else {
          const d =
            "https://www.google.com/maps/dir/?api=1&origin=" +
            a +
            "&destination=" +
            b +
            "&travelmode=walking&waypoints=" +
            c[i][3];
          window.open(d, "_blank");
        }
      }
    }
  }
  if (f === 0) {
    if (g == 0) {
      const d =
        "https://www.google.com/maps/dir/?api=1&origin=" +
        a +
        "&destination=" +
        b +
        "&travelmode=driving";

      window.open(d, "_blank");
    } else {
      const d =
        "https://www.google.com/maps/dir/?api=1&origin=" +
        a +
        "&destination=" +
        b +
        "&travelmode=walking";
      window.open(d, "_blank");
    }
  }
}

function changeE() {
  if (e === 1) {
    e = 0;
  } else {
    e = 1;
  }
}
function changeG() {
  if (g === 1) {
    g = 0;
  } else {
    g = 1;
  }
}
