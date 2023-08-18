const c = [
  ["tambaram", "potheri", "12.877277, 80.079177", "12.859235, 80.089411"],
  ["potheri", "tambaram", "12.877277, 80.079177", "12.859235, 80.089411"],
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
    "Indira Nagar",
    "Tedhipuliya",
    "26.895460, 80.970599",
    "26.898486, 80.962843",
  ],
  [
    "Tedhipuliya",
    "Indira Nagar",
    "26.895460, 80.970599",
    "26.898486, 80.962843",
  ],
  ["Ghaziabad", "Noida", "28.622676, 77.439181", "28.563591, 77.379443"],
  ["Noida", "Ghaziabad", "28.622676, 77.439181", "28.563591, 77.379443"],
  ["Noida", "Gurugram", "28.536493, 77.110674", "28.478661, 77.119600"],
  ["Gurugram", "Noida", "28.536493, 77.110674", "28.478661, 77.119600"],
  ["Noida", "Faridabad", "28.455806, 77.306058", "28.461541, 77.317388"],
  ["Faridabad", "Noida", "28.455806, 77.306058", "28.461541, 77.317388"],
  ["noida", "greater noida", "28.529029, 77.459166", "28.512438, 77.447321"],
  ["greater noida", "noida", "28.529029, 77.459166", "28.512438, 77.447321"],
  ["vibhuti khand", "chinhat", "26.867262, 81.016932", "26.870937, 81.014443"],
  ["chinhat", "vibhuti khand", "26.867262, 81.016932", "26.870937, 81.014443"],
  ["lucknow", "kanpur", "26.650747, 80.660938", "26.637245, 80.743336"],
  ["kanpur", "lucknow", "26.650747, 80.660938", "26.637245, 80.743336"],
  ["lucknow", "unnao", "26.679543, 80.710152", "26.569053, 80.547417"],
  ["unnao", "lucknow", "26.679543, 80.710152", "26.569053, 80.547417"],
  ["kanpur", "sultanpur", "26.574652, 81.441362", "26.264727, 81.347978"],
  ["sultanpur", "kanpur", "26.574652, 81.441362", "26.264727, 81.347978"],
  [
    "gomti nagar",
    "indira nagar",
    "26.871751, 81.014574",
    "26.868305, 81.005991",
  ],
  [
    "indira nagar",
    "gomti nagar",
    "26.871751, 81.014574",
    "26.868305, 81.005991",
  ],
  ["aliganj", "gomti nagar", "26.891651, 80.954715", "26.888718, 80.949849"],
  ["gomti nagar", "aliganj", "26.891651, 80.954715", "26.888718, 80.949849"],
  [
    "hazratganj",
    "indira nagar",
    "26.876227, 80.988327",
    "26.880285, 80.986009",
  ],
  [
    "indira nagar",
    "hazratganj",
    "26.876227, 80.988327",
    "26.880285, 80.986009",
  ],
  ["new delhi", "ambala", "29.047816, 77.068674", "29.047816, 77.008064"],
  ["ambala", "new delhi", "29.047816, 77.068674", "29.047816, 77.008064"],
  ["new delhi", "roorkee", "29.583427, 77.776229", "29.538035, 77.883346"],
  ["roorkee", "new delhi", "29.583427, 77.776229", "29.538035, 77.883346"],
  ["new delhi", "chandigarh", "30.001439, 76.845015", "29.977720, 76.893562"],
  ["chandigarh", "new delhi", "30.001439, 76.845015", "29.977720, 76.893562"],
  ["new delhi", "manali", "31.710502, 77.184355", "31.817047, 77.059042"],
  ["manali", "new delhi", "31.710502, 77.184355", "31.817047, 77.059042"],
  ["new delhi", "kolkata", "25.125432, 82.716524", "26.341229, 82.356319"],
  ["kolkata", "new delhi", "25.125432, 82.716524", "26.341229, 82.356319"],
  ["new delhi", "varanasi", "26.682291, 79.473697", "27.445382, 80.110904"],
  ["varanasi", "new delhi", "26.682291, 79.473697", "27.445382, 80.110904"],
  ["new delhi", "mirzapur", "26.575130, 79.752977", "27.310091, 80.269241"],
  ["mirzapur", "new delhi", "26.575130, 79.752977", "27.310091, 80.269241"],
  ["new delhi", "patna", "25.867416, 80.850337", "26.331120, 82.333491"],
  ["patna", "new delhi", "25.867416, 80.850337", "26.331120, 82.333491"],
  ["lucknow", "patna", "25.655282, 83.840486", "26.174064, 84.120637"],
  ["patna", "lucknow", "25.655282, 83.840486", "26.174064, 84.120637"],
  ["new delhi", "hyderabad", "23.464996, 78.965796", "23.701886, 77.090322"],
  ["hyderabad", "new delhi", "23.464996, 78.965796", "23.701886, 77.090322"],
  ["new delhi", "bangalore", "22.344656, 79.551650", "21.858337, 78.009023"],
  ["bangalore", "new delhi", "22.344656, 79.551650", "21.858337, 78.009023"],
  ["new delhi", "jaisalmer", "27.652104, 72.670079", "26.584023, 72.320358"],
  ["jaisalmer", "new delhi", "27.652104, 72.670079", "26.584023, 72.320358"],
  ["lucknow", "patiala", "27.700966, 77.720937", "27.681510, 78.500966"],
  ["patiala", "lucknow", "27.700966, 77.720937", "27.681510, 78.500966"],

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
    "Gateway of India",
    "Chor Bazaar",
    "18.948898, 72.821709",
    "18.954581, 72.814499",
  ],
  [
    "Chhatrapati Shivaji Terminus (Victoria Terminus)",
    "Marine Drive",
    "18.932104, 72.827580",
    "18.933565, 72.824447",
  ],
  [
    "Marine Drive",
    "Mount Mary Basilica",
    "18.960689, 72.808736",
    "18.969072, 72.832288",
  ],
  [
    "Haji Ali Dargah",
    "Siddhivinayak Temple",
    "19.005242, 72.817481",
    "19.001671, 72.811130",
  ],
  [
    "Juhu Beach",
    "Cross Maidan",
    "19.014283, 72.838964",
    "19.041546, 72.820081",
  ],
  [
    "Bandra-Worli Sea Link",
    "Juhu Beach",
    "19.085532, 72.829693",
    "19.078594, 72.846821",
  ],
  [
    "Siddhivinayak Temple",
    "Film City",
    "19.023238, 72.851289",
    "19.028756, 72.815412",
  ],
  [
    "Elephanta Caves",
    "Kamala Nehru Park",
    "19.017676, 72.812907",
    "19.004461, 72.830780",
  ],
  [
    "Chhatrapati Shivaji Maharaj International Airport",
    "Afghan Church",
    "19.039419, 72.818476",
    "19.025393, 72.840495",
  ],
  [
    "Hanging Gardens",
    "Babulnath Temple",
    "18.959638, 72.809690",
    "18.959049, 72.811622",
  ],
  [
    "Nariman Point",
    "Taraporewala Aquarium",
    "18.939971, 72.824085",
    "18.937580, 72.830357",
  ],
  [
    "Colaba Causeway",
    "Nehru Science Centre",
    "18.949841, 72.834580",
    "18.941204, 72.838791",
  ],
  [
    "Mahalaxmi Temple",
    "Royal Opera House",
    "18.970445, 72.809384",
    "18.964236, 72.812989",
  ],
  [
    "Dhobi Ghat",
    "MMRDA Grounds (Bandra Kurla Complex)",
    "19.030817, 72.815675",
    "19.024004, 72.845159",
  ],
  [
    "High Street Phoenix Mall",
    "Kanheri Caves",
    "18.992814, 72.820386",
    "18.998266, 72.824731",
  ],
  [
    "Film City",
    "High Street Phoenix Mall",
    "18.988425, 72.822840",
    "18.989643, 72.831724",
  ],
  [
    "Sanjay Gandhi National Park",
    "Colaba Causeway",
    "19.113686, 72.854595",
    "19.072403, 72.865210",
  ],
  [
    "Crawford Market",
    "Versova Beach",
    "19.038727, 72.839956",
    "19.020876, 72.813177",
  ],
  [
    "Chor Bazaar",
    "Shree Ramakrishna Math",
    "18.961950, 72.818191",
    "18.964162, 72.820530",
  ],
  [
    "Nehru Science Centre",
    "Nehru Planetarium",
    "18.992615, 72.814378",
    "18.997241, 72.815901",
  ],
  [
    "Nehru Planetarium",
    "Global Vipassana Pagoda",
    "19.248474, 72.866627",
    "19.208175, 72.850137",
  ],
  [
    "Worli Sea Face",
    "Wankhede Stadium",
    "18.972578, 72.814797",
    "18.975219, 72.809109",
  ],
  [
    "Dharavi Slum",
    "Chhatrapati Shivaji Maharaj International Airport",
    "19.071473, 72.846609",
    "19.080866, 72.837782",
  ],
  [
    "Global Vipassana Pagoda",
    "Hanging Gardens",
    "19.096192, 72.852303",
    "19.127794, 72.941043",
  ],
  [
    "Versova Beach",
    "Powai Lake",
    "19.133843, 72.838285",
    "19.123719, 72.854040",
  ],
  [
    "Chhota Kashmir",
    "Crawford Market",
    "19.038237, 72.842182",
    "19.034329, 72.842115",
  ],
  [
    "St. Thomas Cathedral",
    "Chhatrapati Shivaji Terminus (Victoria Terminus)",
    "18.933919, 72.836883",
    "18.933879, 72.830296",
  ],
  [
    "Babulnath Temple",
    "Elephanta Caves",
    "18.947766, 72.820787",
    "18.947220, 72.823099",
  ],
  [
    "Taraporewala Aquarium",
    "David Sassoon Library and Reading Room",
    "18.947607, 72.820984",
    "18.944629, 72.824739",
  ],
  [
    "Mumba Devi Temple",
    "Worli Sea Face",
    "19.058423, 72.853682",
    "19.048432, 72.853689",
  ],
  [
    "Mount Mary Basilica",
    "Dharavi Slum",
    "19.051537, 72.826573",
    "19.040341, 72.851120",
  ],
  [
    "Powai Lake",
    "Haji Ali Dargah",
    "19.012952, 72.825010",
    "19.017682, 72.812585",
  ],
  [
    "MMRDA Grounds (Bandra Kurla Complex)",
    "Dr. Bhau Daji Lad Museum",
    "19.029742, 72.856854",
    "19.022152, 72.813001",
  ],
  [
    "Kanheri Caves",
    "Mumba Devi Temple",
    "19.030219, 72.815240",
    "19.051801, 72.863134",
  ],
  [
    "Shree Ramakrishna Math",
    "St. Xaviers College",
    "19.064705, 72.837484",
    "19.069734, 72.833879",
  ],
  [
    "Chakala Cemetery",
    "Dhobi Ghat",
    "19.069594, 72.846364",
    "19.061644, 72.862157",
  ],
  [
    "Afghan Church",
    "Sanjay Gandhi National Park",
    "19.045978, 72.828837",
    "19.026577, 72.874516",
  ],
  [
    "Rajabai Clock Tower",
    "Jijamata Udyaan (Rani Baug)",
    "18.943987, 72.834216",
    "18.957315, 72.842606",
  ],
  [
    "Kamala Nehru Park",
    "Bandra-Worli Sea Link",
    "18.991465, 72.813748",
    "18.991540, 72.823776",
  ],
  [
    "R City Mall",
    "Oval Maidan",
    "18.972468, 72.845784",
    "18.972194, 72.832619",
  ],
  [
    "Royal Opera House",
    "Chakala Cemetery",
    "18.961833, 72.818529",
    "18.964999, 72.821061",
  ],
  [
    "David Sassoon Library and Reading Room",
    "Mahalaxmi Temple",
    "18.955541, 72.813113",
    "18.957458, 72.812046",
  ],
  [
    "Jijamata Udyaan (Rani Baug)",
    "Gateway of India",
    "18.950845, 72.834535",
    "18.949508, 72.833735",
  ],
  [
    "Veermata Jijabai Technological Institute (VJTI)",
    "Rajabai Clock Tower",
    "18.968131, 72.832626",
    "18.971680, 72.845691",
  ],
  [
    "Dr. Bhau Daji Lad Museum",
    "Chhota Kashmir",
    "19.038439, 72.847124",
    "19.049168, 72.832073",
  ],
  [
    "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    "R City Mall",
    "19.029488, 72.887424",
    "19.040022, 72.879655",
  ],
  [
    "Cross Maidan",
    "St. Thomas Cathedral",
    "18.935193, 72.830881",
    "18.933933, 72.830320",
  ],
  [
    "Oval Maidan",
    "Maharajs Palace (Raj Bhavan)",
    "18.945339, 72.822069",
    "18.945339, 72.824129",
  ],
  [
    "St. Xaviers College",
    "Veermata Jijabai Technological Institute (VJTI)",
    "18.981890, 72.834508",
    "18.976046, 72.837941",
  ],
  [
    "Chor Bazaar",
    "Gateway of India",
    "18.948898, 72.821709",
    "18.954581, 72.814499",
  ],
  [
    "Marine Drive",
    "Chhatrapati Shivaji Terminus (Victoria Terminus)",
    "18.932104, 72.827580",
    "18.933565, 72.824447",
  ],
  [
    "Mount Mary Basilica",
    "Marine Drive",
    "18.960689, 72.808736",
    "18.969072, 72.832288",
  ],
  [
    "Siddhivinayak Temple",
    "Haji Ali Dargah",
    "19.005242, 72.817481",
    "19.001671, 72.811130",
  ],
  [
    "Cross Maidan",
    "Juhu Beach",
    "19.014283, 72.838964",
    "19.041546, 72.820081",
  ],
  [
    "Juhu Beach",
    "Bandra-Worli Sea Link",
    "19.085532, 72.829693",
    "19.078594, 72.846821",
  ],
  [
    "Film City",
    "Siddhivinayak Temple",
    "19.023238, 72.851289",
    "19.028756, 72.815412",
  ],
  [
    "Kamala Nehru Park",
    "Elephanta Caves",
    "19.017676, 72.812907",
    "19.004461, 72.830780",
  ],
  [
    "Afghan Church",
    "Chhatrapati Shivaji Maharaj International Airport",
    "19.039419, 72.818476",
    "19.025393, 72.840495",
  ],
  [
    "Babulnath Temple",
    "Hanging Gardens",
    "18.959638, 72.809690",
    "18.959049, 72.811622",
  ],
  [
    "Taraporewala Aquarium",
    "Nariman Point",
    "18.939971, 72.824085",
    "18.937580, 72.830357",
  ],
  [
    "Nehru Science Centre",
    "Colaba Causeway",
    "18.949841, 72.834580",
    "18.941204, 72.838791",
  ],
  [
    "Royal Opera House",
    "Mahalaxmi Temple",
    "18.970445, 72.809384",
    "18.964236, 72.812989",
  ],
  [
    "MMRDA Grounds (Bandra Kurla Complex)",
    "Dhobi Ghat",
    "19.030817, 72.815675",
    "19.024004, 72.845159",
  ],
  [
    "Kanheri Caves",
    "High Street Phoenix Mall",
    "18.992814, 72.820386",
    "18.998266, 72.824731",
  ],
  [
    "High Street Phoenix Mall",
    "Film City",
    "18.988425, 72.822840",
    "18.989643, 72.831724",
  ],
  [
    "Colaba Causeway",
    "Sanjay Gandhi National Park",
    "19.113686, 72.854595",
    "19.072403, 72.865210",
  ],
  [
    "Versova Beach",
    "Crawford Market",
    "19.038727, 72.839956",
    "19.020876, 72.813177",
  ],
  [
    "Shree Ramakrishna Math",
    "Chor Bazaar",
    "18.961950, 72.818191",
    "18.964162, 72.820530",
  ],
  [
    "Nehru Planetarium",
    "Nehru Science Centre",
    "18.992615, 72.814378",
    "18.997241, 72.815901",
  ],
  [
    "Global Vipassana Pagoda",
    "Nehru Planetarium",
    "19.248474, 72.866627",
    "19.208175, 72.850137",
  ],
  [
    "Wankhede Stadium",
    "Worli Sea Face",
    "18.972578, 72.814797",
    "18.975219, 72.809109",
  ],
  [
    "Chhatrapati Shivaji Maharaj International Airport",
    "Dharavi Slum",
    "19.071473, 72.846609",
    "19.080866, 72.837782",
  ],
  [
    "Hanging Gardens",
    "Global Vipassana Pagoda",
    "19.096192, 72.852303",
    "19.127794, 72.941043",
  ],
  [
    "Powai Lake",
    "Versova Beach",
    "19.133843, 72.838285",
    "19.123719, 72.854040",
  ],
  [
    "Crawford Market",
    "Chhota Kashmir",
    "19.038237, 72.842182",
    "19.034329, 72.842115",
  ],
  [
    "Chhatrapati Shivaji Terminus (Victoria Terminus)",
    "St. Thomas Cathedral",
    "18.933919, 72.836883",
    "18.933879, 72.830296",
  ],
  [
    "Elephanta Caves",
    "Babulnath Temple",
    "18.947766, 72.820787",
    "18.947220, 72.823099",
  ],
  [
    "David Sassoon Library and Reading Room",
    "Taraporewala Aquarium",
    "18.947607, 72.820984",
    "18.944629, 72.824739",
  ],
  [
    "Worli Sea Face",
    "Mumba Devi Temple",
    "19.058423, 72.853682",
    "19.048432, 72.853689",
  ],
  [
    "Dharavi Slum",
    "Mount Mary Basilica",
    "19.051537, 72.826573",
    "19.040341, 72.851120",
  ],
  [
    "Haji Ali Dargah",
    "Powai Lake",
    "19.012952, 72.825010",
    "19.017682, 72.812585",
  ],
  [
    "Dr. Bhau Daji Lad Museum",
    "MMRDA Grounds (Bandra Kurla Complex)",
    "19.029742, 72.856854",
    "19.022152, 72.813001",
  ],
  [
    "Mumba Devi Temple",
    "Kanheri Caves",
    "19.030219, 72.815240",
    "19.051801, 72.863134",
  ],
  [
    "St. Xaviers College",
    "Shree Ramakrishna Math",
    "19.064705, 72.837484",
    "19.069734, 72.833879",
  ],
  [
    "Dhobi Ghat",
    "Chakala Cemetery",
    "19.069594, 72.846364",
    "19.061644, 72.862157",
  ],
  [
    "Sanjay Gandhi National Park",
    "Afghan Church",
    "19.045978, 72.828837",
    "19.026577, 72.874516",
  ],
  [
    "Jijamata Udyaan (Rani Baug)",
    "Rajabai Clock Tower",
    "18.943987, 72.834216",
    "18.957315, 72.842606",
  ],
  [
    "Bandra-Worli Sea Link",
    "Kamala Nehru Park",
    "18.991465, 72.813748",
    "18.991540, 72.823776",
  ],
  [
    "Oval Maidan",
    "R City Mall",
    "18.972468, 72.845784",
    "18.972194, 72.832619",
  ],
  [
    "Chakala Cemetery",
    "Royal Opera House",
    "18.961833, 72.818529",
    "18.964999, 72.821061",
  ],
  [
    "Mahalaxmi Temple",
    "David Sassoon Library and Reading Room",
    "18.955541, 72.813113",
    "18.957458, 72.812046",
  ],
  [
    "Gateway of India",
    "Jijamata Udyaan (Rani Baug)",
    "18.950845, 72.834535",
    "18.949508, 72.833735",
  ],
  [
    "Rajabai Clock Tower",
    "Veermata Jijabai Technological Institute (VJTI)",
    "18.968131, 72.832626",
    "18.971680, 72.845691",
  ],
  [
    "Chhota Kashmir",
    "Dr. Bhau Daji Lad Museum",
    "19.038439, 72.847124",
    "19.049168, 72.832073",
  ],
  [
    "R City Mall",
    "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    "19.029488, 72.887424",
    "19.040022, 72.879655",
  ],
  [
    "St. Thomas Cathedral",
    "Cross Maidan",
    "18.935193, 72.830881",
    "18.933933, 72.830320",
  ],
  [
    "Maharajs Palace (Raj Bhavan)",
    "Oval Maidan",
    "18.945339, 72.822069",
    "18.945339, 72.824129",
  ],
  [
    "Veermata Jijabai Technological Institute (VJTI)",
    "St. Xaviers College",
    "18.981890, 72.834508",
    "18.976046, 72.837941",
  ],

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
  [
    "elephant gate",
    "seven wells",
    "13.096912, 80.279902",
    "13.095909, 80.277284",
  ],
  ["seven wells", "harbour", "13.077112, 80.282964", "13.079035, 80.278844"],
  [
    "govt.hospital",
    "north beach",
    "13.074329, 80.285474",
    "13.074192, 80.279160",
  ],
  ["esplanade", "muthialpet", "13.089595, 80.285348", "13.086502, 80.288438"],
  [
    "high court",
    "kothavalchavadi",
    "13.090115, 80.285460",
    "13.090094, 80.284477",
  ],
  ["harbour", "port marine", "13.065753, 80.266799", "13.088194, 80.244796"],
  [
    "north beach",
    "washermenpet",
    "13.107082, 80.291099",
    "13.100854, 80.287150",
  ],
  ["fort", "tondiarpet", "13.107895, 80.291241", "13.103799, 80.284118"],
  ["muthialpet", "korukkupet", "12.724737, 80.230358", "12.724737, 80.230358"],
  [
    "kothavalchavadi",
    "r.k. nagar",
    "13.109874, 80.284065",
    "13.103521, 80.282263",
  ],
  [
    "port marine",
    "stanley hospital",
    "13.102348, 80.291863",
    "13.099756, 80.290705",
  ],
  [
    "washermenpet",
    "thiruvottiyur",
    "13.142633, 80.299437",
    "13.141929, 80.297629",
  ],
  [
    "tondiarpet",
    "peripheral hospital",
    "13.126237, 80.287513",
    "13.126785, 80.287868",
  ],
  [
    "korukkupet",
    "new washermenpet",
    "13.116461, 80.280686",
    "13.120014, 80.283819",
  ],
  ["r.k. nagar", "royapuram", "13.115393, 80.290479", "13.111548, 80.283526"],
  [
    "stanley hospital",
    "kasimedu",
    "13.118092, 80.297860",
    "13.116713, 80.291080",
  ],
  [
    "thiruvottiyur",
    "fishing harbour",
    "13.147066, 80.301668",
    "13.145896, 80.291540",
  ],
  [
    "peripheral hospital",
    "madhavaram",
    "13.122939, 80.251577",
    "13.113577, 80.245053",
  ],
  [
    "new washermenpet",
    "milk colony",
    "13.132839, 80.240169",
    "13.135514, 80.259566",
  ],
  ["royapuram", "puzhal", "13.133234, 80.237923", "13.155634, 80.259553"],
  ["kasimedu", "redhills", "13.134551, 80.233483", "13.158957, 80.261292"],
  ["fishing harbour", "ennore", "13.179334, 80.314093", "13.166631, 80.286799"],
  [
    "madhavaram",
    "manali new town",
    "13.182094, 80.264343",
    "13.180924, 80.222629",
  ],
  ["milk colony", "manali", "13.163291, 80.263231", "13.160450, 80.251215"],
  ["puzhal", "sathangadu", "13.136429, 80.257023", "13.153127, 80.269421"],
  ["redhills", "pulianthope", "13.119347, 80.257532", "13.144089, 80.257189"],
  ["ennore", "otteri", "13.176164, 80.312782", "13.098597, 80.277420"],
  ["manali", "basin bridge", "23.776851, 78.671240", "26.481933, 78.539404"],
  [
    "manali new town",
    "mkb nagar",
    "13.163873, 80.258928",
    "13.185613, 80.258716",
  ],
  ["sathangadu", "kodungaiyur", "13.123677, 80.265505", "13.113813, 80.267221"],
  ["pulianthope", "vyasarpadi", "13.112238, 80.264525", "13.100661, 80.264053"],
  ["otteri", "sembium", "13.106980, 80.248120", "13.108457, 80.246535"],
  [
    "basin bridge",
    "peravallur",
    "13.115887, 80.248855",
    "13.117058, 80.239242",
  ],
  [
    "mkb nagar",
    "thiru .vi .ka .nagar",
    "13.121848, 80.251901",
    "13.124355, 80.237996",
  ],
  ["kodungaiyur", "aminjikarai", "13.077169, 80.234079", "3.086867, 80.245751"],
  ["vyasarpadi", "anna nagar", "13.136911, 80.231013", "13.120862, 80.212473"],
  ["sembium", "arumbakkam", "13.125831, 80.205953", "13.119144, 80.205094"],
  ["peravallur", "j.j .nagar", "13.125114, 80.204296", "13.120767, 80.206356"],
  [
    "thiru .vi.ka. nagar",
    "thirumangalam",
    "13.125171, 80.205153",
    "13.118818, 80.207556",
  ],
  ["aminjikarai", "nolambur", "13.076148, 80.198786", "13.067286, 80.182478"],
  ["anna nagar", "koyambedu", "13.077188, 80.208704", "13.072589, 80.198061"],
  ["arumbakkam", "maduravoyal", "13.072751, 80.188891", "13.077433, 80.190093"],
  ["j.j. nagar", "villivakkam", "13.101805, 80.192387", "13.101220, 80.175993"],
  [
    "thirumangalam",
    "rajamangalam",
    "12.428951, 79.797066",
    "10.488236, 78.397682",
  ],
  ["nolambur", "kolathur", "13.113158, 80.197059", "13.105467, 80.189163"],
  [
    "koyambedu",
    "ambattur estate",
    "13.081783, 80.198432",
    "13.083455, 80.184699",
  ],
  ["maduravoyal", "korattur", "13.099288, 80.161499", "13.106561, 80.175404"],
  [
    "seven wells",
    "elephant gate",
    "13.096912, 80.279902",
    "13.095909, 80.277284",
  ],
  ["harbour", "seven wells", "13.077112, 80.282964", "13.079035, 80.278844"],
  [
    "north beach",
    "govt.hospital",
    "13.074329, 80.285474",
    "13.074192, 80.279160",
  ],
  ["muthialpet", "esplanade", "13.089595, 80.285348", "13.086502, 80.288438"],
  [
    "kothavalchavadi",
    "high court",
    "13.090115, 80.285460",
    "13.090094, 80.284477",
  ],
  ["port marine", "harbour", "13.065753, 80.266799", "13.088194, 80.244796"],
  [
    "washermenpet",
    "north beach",
    "13.107082, 80.291099",
    "13.100854, 80.287150",
  ],
  ["tondiarpet", "fort", "13.107895, 80.291241", "13.103799, 80.284118"],
  ["korukkupet", "muthialpet", "12.724737, 80.230358", "12.724737, 80.230358"],
  [
    "r.k. nagar",
    "kothavalchavadi",
    "13.109874, 80.284065",
    "13.103521, 80.282263",
  ],
  [
    "stanley hospital",
    "port marine",
    "13.102348, 80.291863",
    "13.099756, 80.290705",
  ],
  [
    "thiruvottiyur",
    "washermenpet",
    "13.142633, 80.299437",
    "13.141929, 80.297629",
  ],
  [
    "peripheral hospital",
    "tondiarpet",
    "13.126237, 80.287513",
    "13.126785, 80.287868",
  ],
  [
    "new washermenpet",
    "korukkupet",
    "13.116461, 80.280686",
    "13.120014, 80.283819",
  ],
  ["royapuram", "r.k. nagar", "13.115393, 80.290479", "13.111548, 80.283526"],
  [
    "kasimedu",
    "stanley hospital",
    "13.118092, 80.297860",
    "13.116713, 80.291080",
  ],
  [
    "fishing harbour",
    "thiruvottiyur",
    "13.147066, 80.301668",
    "13.145896, 80.291540",
  ],
  [
    "madhavaram",
    "peripheral hospital",
    "13.122939, 80.251577",
    "13.113577, 80.245053",
  ],
  [
    "milk colony",
    "new washermenpet",
    "13.132839, 80.240169",
    "13.135514, 80.259566",
  ],
  ["puzhal", "royapuram", "13.133234, 80.237923", "13.155634, 80.259553"],
  ["redhills", "kasimedu", "13.134551, 80.233483", "13.158957, 80.261292"],
  ["ennore", "fishing harbour", "13.179334, 80.314093", "13.166631, 80.286799"],
  [
    "manali new town",
    "madhavaram",
    "13.182094, 80.264343",
    "13.180924, 80.222629",
  ],
  ["manali", "milk colony", "13.163291, 80.263231", "13.160450, 80.251215"],
  ["sathangadu", "puzhal", "13.136429, 80.257023", "13.153127, 80.269421"],
  ["pulianthope", "redhills", "13.119347, 80.257532", "13.144089, 80.257189"],
  ["otteri", "ennore", "13.176164, 80.312782", "13.098597, 80.277420"],
  ["basin bridge", "manali", "23.776851, 78.671240", "26.481933, 78.539404"],
  [
    "mkb nagar",
    "manali new town",
    "13.163873, 80.258928",
    "13.185613, 80.258716",
  ],
  ["kodungaiyur", "sathangadu", "13.123677, 80.265505", "13.113813, 80.267221"],
  ["vyasarpadi", "pulianthope", "13.112238, 80.264525", "13.100661, 80.264053"],
  ["sembium", "otteri", "13.106980, 80.248120", "13.108457, 80.246535"],
  [
    "peravallur",
    "basin bridge",
    "13.115887, 80.248855",
    "13.117058, 80.239242",
  ],
  [
    "thiru .vi .ka .nagar",
    "mkb nagar",
    "13.121848, 80.251901",
    "13.124355, 80.237996",
  ],
  ["aminjikarai", "kodungaiyur", "13.077169, 80.234079", "3.086867, 80.245751"],
  ["anna nagar", "vyasarpadi", "13.136911, 80.231013", "13.120862, 80.212473"],
  ["arumbakkam", "sembium", "13.125831, 80.205953", "13.119144, 80.205094"],
  ["j.j .nagar", "peravallur", "13.125114, 80.204296", "13.120767, 80.206356"],
  [
    "thirumangalam",
    "thiru .vi.ka. nagar",
    "13.125171, 80.205153",
    "13.118818, 80.207556",
  ],
  ["nolambur", "aminjikarai", "13.076148, 80.198786", "13.067286, 80.182478"],
  ["koyambedu", "anna nagar", "13.077188, 80.208704", "13.072589, 80.198061"],
  ["maduravoyal", "arumbakkam", "13.072751, 80.188891", "13.077433, 80.190093"],
  ["villivakkam", "j.j. nagar", "13.101805, 80.192387", "13.101220, 80.175993"],
  [
    "rajamangalam",
    "thirumangalam",
    "12.428951, 79.797066",
    "10.488236, 78.397682",
  ],
  ["kolathur", "nolambur", "13.113158, 80.197059", "13.105467, 80.189163"],
  [
    "ambattur estate",
    "koyambedu",
    "13.081783, 80.198432",
    "13.083455, 80.184699",
  ],
  ["korattur", "maduravoyal", "13.099288, 80.161499", "13.106561, 80.175404"],
];
var f = 0;
var e = 0;
var g = 0;
var a = "";
var res;
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
          res = "We have a Safe Path for You";
          f = 1;
        } else {
          const d =
            "https://www.google.com/maps/dir/?api=1&origin=" +
            a +
            "&destination=" +
            b +
            "&travelmode=walking&waypoints=" +
            c[i][2];
          res = "We have a Safe Path for You";
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
          res = "You Opted For Unsafe Path";
        } else {
          const d =
            "https://www.google.com/maps/dir/?api=1&origin=" +
            a +
            "&destination=" +
            b +
            "&travelmode=walking&waypoints=" +
            c[i][3];
          window.open(d, "_blank");
          res = "You Opted For Unsafe Path";
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
      res = "No path found in database, using best suggested by Google.";
    } else {
      const d =
        "https://www.google.com/maps/dir/?api=1&origin=" +
        a +
        "&destination=" +
        b +
        "&travelmode=walking";
      res = "No path found in database, using best suggested by Google.";
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
var select = document.getElementById("selectfrom");
var checkflag = 0;
for (var i = 0; i < c.length; i++) {
  var opt = c[i][0];
  var el = document.createElement("option");
  el.text = opt;
  el.value = opt;
  checkflag = i;
  select.add(el);
}
var select2 = document.getElementById("selectto");
// if (a === "") {
for (var i = 0; i < c.length; i++) {
  var opt = c[i][1];
  var el = document.createElement("option");
  el.text = opt;
  el.value = opt;
  select2.add(el);
}
// }
// else {
//   var opt = c[checkflag][1];
//   var el = document.createElement("option");
//   el.text = opt;
//   el.value = opt;
//   select2.add(el);
// }

function changeFrom() {
  var x = document.getElementById("selectfrom").value;
  document.getElementById("from").value = x;
}
function changeTo() {
  var x = document.getElementById("selectto").value;
  document.getElementById("to").value = x;
}
function displayprompt() {
  document.getElementById("result").innerHTML = res;
  console.log(res);
}
