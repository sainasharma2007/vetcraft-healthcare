
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Product from "./models/Product.js";

// dotenv.config();

// const products = [
//   {
//     title: "Maxofeed Bolus",
//     image: "/maxofeed.jpeg",
//     mrp: "₹ 131",
//     packSize: "8 Bolus Strip",
//     category: "Animal Feed Supplement",
//     description: [
//       "Stimulates Appetite",
//       "Improves Liver Functions",
//       "Increases the population of useful Micro Flora",
//       "Balances PH of Rumen",
//       "Indicated for: Anorexia, Indigestion, Tympany, Infertility, Along with Antibiotic Treatment, Post & Pre Parturition, Fatty Liver Syndrome, Anaemia, Ruminal Acidosis"
//     ]
//   },
//   {
//     title: "Maxofeed Injection",
//     image: "/maxofeed inj.jpeg",
//     mrp: "₹ 140",
//     packSize: "100 ml",
//     category: "Medicine",
//     description: [
//       "Liver Extract with B-Complex Injection",
//       "Stimulates Appetite",
//       "Improves Liver Functions",
//       "Increases the population of useful Micro Flora",
//       "Balances PH of Rumen",
//       "Available in 100 ml Vial"
//     ]
//   },
//   {
//     title: "Lacgain",
//     image: "/lacgain.jpeg",
//     mrp: "₹ 142",
//     packSize: "100 Tablets",
//     category: "Animal Feed Supplement",
//     description: [
//       "A Scientific Herbal Galactagogue",
//       "Improves the secretory activity of alveolar tissue",
//       "Natural substitute of Oxytocin",
//       "Restores normal lactation",
//       "Increases milk production & fat %",
//       "Prolongs the period of lactation",
//       "Highly effective and non hormonal",
//       "Indications: Hypogalactia, Agalactia, Milk Letdown, Milk Formation",
//       "Dose: 10 Tablets twice a day or as directed by the Veterinarian"
//     ]
//   },
//   {
//     title: "Lacgain",
//     image: "/lacgain.jpeg",
//     mrp: "₹ 271",
//     packSize: "200 Tablets",
//     category: "Animal Feed Supplement",
//     description: [
//       "A Scientific Herbal Galactagogue",
//       "Improves the secretory activity of alveolar tissue",
//       "Natural substitute of Oxytocin",
//       "Restores normal lactation",
//       "Increases milk production & fat %",
//       "Prolongs the period of lactation",
//       "Highly effective and non hormonal",
//       "Indications: Hypogalactia, Agalactia, Milk Letdown, Milk Formation",
//       "Dose: 10 Tablets twice a day or as directed by the Veterinarian"
//     ]
//   },
//   {
//     title: "Thanmast Powder",
//     image: "/thanmast powder.jpeg",
//     mrp: "₹ ",
//     packSize: "4*50 gm",
//     category: "Animal Feed Supplement",
//     description: [
//       "An Ideal Formulation for Management of Mastitis",
//       "Restores normal milk PH",
//       "Helps in faster restoration of milk yield",
//       "Minimizes the use of antibiotics",
//       "Enhances cellular antioxidant",
//       "Increases mammory defence mechanism",
//       "Better recovery",
//       "Minimizes the chances of relapse",
//       "Dose: 50 gm daily for 3-5 days or as directed by the Veterinarian"
//     ]
//   },
//   {
//     title: "VCUTONE",
//     image: "/vcutone.jpeg",
//     mrp: "₹ 470",
//     packSize: "2 l",
//     category: "Animal Feed Supplement",
//     description: [
//       "A Unique Combination of Vitamins, Minerals & Natural Nutrients",
//       "A Non Hormonal Ecbolic Uterine Tonic & Cleanser",
//       "Helps in Easy Expulsion of Placenta",
//       "For Timely Involution of Uterus for Next Cycle",
//       "Ensures Optimum Milk Production",
//       "Helps in Preventing Uterine Infections",
//       "Improves Conception Rate",
//       "Strengthens & Tones up the Uterus",
//       "Dose: Large Animals 100 ml daily, Small Animals 25 ml daily. For Retained Placenta: Large animal 200 ml, Small Animal 50 ml"
//     ]
//   },
//   {
//     title: "Puralvit",
//     image: "/puralvit.jpeg",
//     mrp: "₹ 1368",
//     packSize: "1 l",
//     category: "Animal Feed Supplement",
//     description: [
//       "Multivitamin Liquid for Normal Growth & Development",
//       "Enriched with Vitamin H",
//       "Improves Fertility",
//       "Helpful in Development of Udder for Maximum Milk Production",
//       "Helpful for Lactating Animals (Cattles)",
//       "Enhances Immunity",
//       "Useful to Improve Milk Quality and Quantity when Mixed with Oral Calcium",
//       "Protects From Stress Like Heat Stress, Transportation Stress Etc.",
//       "Helpful in Skin Diseases and Hair Loss in Dogs",
//       "Corrects Metabolic Disorders",
//       "Available in 100 ml, 500 ml & 1 Ltr Pack"
//     ]
//   },
//   {
//     title: "VCZyme Powder",
//     image: "/VC Zyme powder.jpeg",
//     mrp: "₹ 120",
//     packSize: "120 gm",
//     category: "Animal Feed Supplement",
//     description: [
//       "Rumen Buffer Prebiotics & Probiotics with Digestive Enzymes for Cattle",
//       "Optimizes Rumen Ph",
//       "Prevents Bloat",
//       "Optimizes Rumen & Liver Function",
//       "Improves digestion",
//       "Prevents and corrects Ruminal Acidosis",
//       "Helps to improve milk production",
//       "Dose: Large Animal 60 gm twice a day, Small Animal 25-30 gm daily for 2 to 4 days or as advised by Veterinarian"
//     ]
//   },
//   {
//     title: "VCMIN Fe LIQUID",
//     image: "/vc min fe.jpeg",
//     mrp: "₹ 480",
//     packSize: "1 l",
//     category: "Animal Feed Supplement",
//     description: [
//       "Hematinic & Nervine Tonic",
//       "Stimulates the Production of Red Blood Cells",
//       "Increases the Amount of Hemoglobin in the Blood",
//       "To Improve milk Production & Fat %",
//       "For Better Growth",
//       "To Debilitated Animals",
//       "Banana Flavour with Malt Extract",
//       "Dose: Cattle 40-50 ml daily orally, Calves/Sheep/Goat 10-15 ml daily orally or as directed by the Veterinarian"
//     ]
//   },
//   {
//     title: "VCMIN Fe LIQUID",
//     image: "/vc min fe.jpeg",
//     mrp: "₹ 270",
//     packSize: "500 ml",
//     category: "Animal Feed Supplement",
//     description: [
//       "Hematinic & Nervine Tonic",
//       "Stimulates the Production of Red Blood Cells",
//       "Increases the Amount of Hemoglobin in the Blood",
//       "To Improve milk Production & Fat %",
//       "For Better Growth",
//       "To Debilitated Animals",
//       "Banana Flavour with Malt Extract",
//       "Dose: Cattle 40-50 ml daily orally, Calves/Sheep/Goat 10-15 ml daily orally or as directed by the Veterinarian"
//     ]
//   },
//   {
//     title: "VCMIN BOLUS",
//     image: "/vc min bolus.jpeg",
//     mrp: "₹ 270",
//     packSize: "10 Bolus Box",
//     category: "Animal Feed Supplement",
//     description: [
//       "Chelated Trace Minerals & Vitamins Feed Supplement Bolus",
//       "Useful in Fertilization, Ovulation, Implantation, Embryo survivability & Overall health & Immunity",
//       "Protection, Production & Reproduction",
//       "Brings Animals on Heat",
//       "Usage: One bolus orally daily for 10 days or as directed by the Veterinarian"
//     ]
//   },
//   {
//     title: "LACTODYNE Gold Chelated",
//     image: "/Lactodyne gold.jpeg",
//     mrp: "₹ 1100",
//     packSize: "5 l",
//     category: "Animal Feed Supplement",
//     description: [
//       "An Effective Nutritional Supplement for Live Stock",
//       "Provides Highly Bio-available Milk Enhancing Nutrients",
//       "Contains Calcium, Vitamins, Minerals & Natural Herbs",
//       "Increases milk yield in cattle",
//       "Builds strong bones in growing animal",
//       "Acts as a growth promoter",
//       "Maintains the health of animals",
//       "Dose: Cattle 100 ml daily, Calves 40 ml daily, Goats & Sheep 15-20 ml daily or as directed by Veterinarian"
//     ]
//   },
//   {
//     title: "VCPREG-750",
//     image: "/vc preg.jpeg",
//     mrp: "₹ 171",
//     packSize: "3 ml",
//     category: "Medicine",
//     description: [
//       "17-alpha Hydroxyprogesterone caproate 250 mg/ml",
//       "Beginning of Life is Embryo.... Save it with VCPREG-750",
//       "Prepares uterus for implantation",
//       "Necessary for formation of placenta",
//       "Maintains pregnancy by retaining embryo in uterus",
//       "Suppresses uterine motality during pregnancy"
//     ]
//   },
//   {
//     title: "VCSPAS Bolus",
//     image: "/vc spas bolus.jpeg",
//     mrp: "₹ 80",
//     packSize: "4 Bolus Strip",
//     category: "Medicine",
//     description: [
//       "Instant Relief from Spasmodic Pain",
//       "Useful in Relief of Intestinal Colic & Abdominal Pain",
//       "For Rapid Relief of Spasmodic Visceral Pain Such As Intestinal Colic, Renal Colic, Billiary Colic Etc.",
//       "Gastrointestinal Spasm",
//       "Prolapse of Uterus",
//       "For Reducing pain after manual removal of retained placenta & Post Dystocia",
//       "Diarrhoea & Dysentery"
//     ]
//   },
//   {
//     title: "VCSPAS Injection",
//     image: "/vc spas inj.jpeg",
//     mrp: "₹ 176",
//     packSize: "100 ml",
//     category: "Medicine",
//     description: [
//       "Instant Relief from Spasmodic Pain",
//       "Reduces Contraction of the Muscles in the Intestines",
//       "For Rapid Relief of Spasmodic Visceral Pain Such As Intestinal Colic, Renal Colic, Billiary Colic Etc.",
//       "Gastrointestinal Spasm",
//       "Prolapse of Uterus",
//       "For Reducing pain after manual removal of retained placenta & Post Dystocia",
//       "Diarrhoea & Dysentery",
//       "Presentation: 30 ml & 100 ml"
//     ]
//   },
//   {
//     title: "Vecromol Inj.",
//     image: "/vecromol inj.jpeg",
//     mrp: "₹ 196",
//     packSize: "100 ml",
//     category: "Medicine",
//     description: [
//       "The Reliable Brand of Nimesulide & Paracetamol",
//       "A Safe & Effective Treatment to Control Inflammation, Pain & Fever",
//       "Nimesulide is a NSAID with cox-2 enzyme inhibiting property with potent analgesic, antipyretic and anti-inflammatory activity",
//       "Paracetamol consists an effective analgesic & antipyretic property",
//       "Indications: Osteoarthritis, Mastitis, Metritis, Pyometra, Decomposed Placenta Post operative therapy, As a supportive therapy with anti-biotics",
//       "Presentation: 30 ml & 100 ml vial"
//     ]
//   },
//   {
//     title: "Vecromol Plus Bolus",
//     image: "/vecromol plus.jpeg",
//     mrp: "₹ 90",
//     packSize: "4 Bolus Strip",
//     category: "Medicine",
//     description: [
//       "The Reliable Brand of Nimesulide & Paracetamol",
//       "A Safe & Effective Treatment to Control Inflammation, Pain & Fever",
//       "Quick onset of action - Excellent results in low dosage",
//       "Indications: Osteoarthritis, Mastitis, Metritis, Pyometra, Decomposed Placenta Post operative therapy, As a supportive therapy with anti-biotics",
//       "Presentation: 4 Bolus Strip Pack"
//     ]
//   },
//   {
//     title: "LYFONVET AC Bolus",
//     image: "/lyfonvet bolus.jpeg",
//     mrp: "₹ 80",
//     packSize: "2 Bolus Strip",
//     category: "Medicine",
//     description: [
//       "Ceftrixaone Sodium Injection",
//       "IIIrd Generation Cepholosporine Antibiotic covers the wide range of Bacterial Infections",
//       "Used for: Pneumonia, RTI, UTI, Skin Infections, Intestinal Infections, Unknown Pyrexia, H.S., Surgery, Wound Infections etc.",
//       "Pack: 3 gm & 4 gm with Sterile Water 20ml"
//     ]
//   },
//   // {
//   //   title: "LYFONVET AC Bolus",
//   //   image: "/lyfonvet bolus.jpeg",
//   //   mrp: "₹ 205",
//   //   packSize: "4 gm",
//   //   category: "Medicine",
//   //   description: [
//   //     "Ceftrixaone Sodium Injection",
//   //     "IIIrd Generation Cepholosporine Antibiotic covers the wide range of Bacterial Infections",
//   //     "Used for: Pneumonia, RTI, UTI, Skin Infections, Intestinal Infections, Unknown Pyrexia, H.S., Surgery, Wound Infections etc.",
//   //     "Pack: 3 gm & 4 gm with Sterile Water 20ml"
//   //   ]
//   // },
//   {
//     title: "LYFONVET AC Forte",
//     image: "/lyfonvet ac forte.jpeg",
//     mrp: "₹ 318",
//     packSize: "4.5 gm",
//     category: "Medicine",
//     description: [
//       "Amoxycillin Sodium 3000 mg & Sulbactam Sodium 1500 mg",
//       "No tension of bacterial infections",
//       "Widely used in bacterial infections",
//       "Amoxycillin is an antibiotic, it works by preventing the formation of the bacterial protective covering (Cell Wall) which is required for bacterial survival",
//       "Sulbactam is given in combination with Beta-Lactum antibiotics to inhibit Beta-Lactamase (an enzyme produced by bacteria)",
//       "Indications: Fever/Unknown Pyrexia, Mastitis, Pneumonia, Bacterial diarrhoea, Bronchitis, Wound/Surgical Wound, UTI, Skin Infection, ENT, Hoof Wound etc.",
//       "Pack: 4.5 gm with Sterile Water 20ml"
//     ]
//   },
//   {
//     title: "LyfonVet Inj.",
//     image: "/lyfonvet inj.jpeg",
//     mrp: "₹ 168",
//     packSize: "3 gm",
//     category: "Medicine",
//     description: [
//       "Ceftrixaone Sodium Injection",
//       "IIIrd Generation Cepholosporine Antibiotic covers the wide range of Bacterial Infections",
//       "Used for: Pneumonia, RTI, UTI, Skin Infections, Intestinal Infections, Unknown Pyrexia, H.S., Surgery, Wound Infections etc.",
//       "Pack: 3 gm with Sterile Water 20ml"
//     ]
//   },
//   {
//     title: "LyfonVet Inj.",
//     image: "/lyfonvet inj.jpeg",
//     mrp: "₹ 205",
//     packSize: "4 gm",
//     category: "Medicine",
//     description: [
//       "Ceftrixaone Sodium Injection",
//       "IIIrd Generation Cepholosporine Antibiotic covers the wide range of Bacterial Infections",
//       "Used for: Pneumonia, RTI, UTI, Skin Infections, Intestinal Infections, Unknown Pyrexia, H.S., Surgery, Wound Infections etc.",
//       "Pack: 4 gm with Sterile Water 20ml"
//     ]
//   },
//   {
//     title: "HITLURG Inj.",
//     image: "/hitlurg.jpeg",
//     mrp: "₹ 50",
//     packSize: "100 ml",
//     category: "Medicine",
//     description: [
//       "Anti-Histamine - Greater Potency, Rapid Action, Long Acting",
//       "Along with Antibiotics during Treatment of Infections",
//       "Itching of Unknown Origin",
//       "Eczema, Rhinitis, Bloat, Dermatitis",
//       "Insect Bites, Pregnancy Toxaemia, Mastitis",
//       "Pulmonary Emphysema, Allergy",
//       "Retained Placenta, Anaphylactic Shock",
//       "Available in 100 ml Vial"
//     ]
//   },
//   {
//     title: "Vecocip-TZ Bolus",
//     image: "/vecozip.jpeg",
//     mrp: "₹ 145",
//     packSize: "4 Bolus Strip",
//     category: "Medicine",
//     description: [
//       "The Best Antibacterial & Antiprotozoal Combination",
//       "Covers Aerobic, Anaerobic Bacteria & Protozoa",
//       "Diarrhoea & Dysentery",
//       "Chronic wounds & deep seated wounds",
//       "Post operative infection",
//       "Uterine infections & Genital Infections-Metritis, Endometritis, Pyometra",
//       "Ciprofloxacin is bactericidal against enteropathogens like shigella, salmonella, E-coli, C-Jejuni, Vibrio cholera etc.",
//       "Tinidazole is a potent anaerobicide, it is also effective against Entameba & Giardia",
//       "Presentation: 4 Bolus Strip Pack"
//     ]
//   },
//   {
//     title: "SOLINOX-DS",
//     image: "/solinox ds.jpeg",
//     mrp: "₹ 154",
//     packSize: "100 ml",
//     category: "Medicine",
//     description: [
//       "A Unique Flukacide - To Save Animals.... Kill Worms and Flukes",
//       "Broad Spectrum, Non Teratogenic, Non Embryotoxic, Safe in Pregnancy",
//       "Levamisole acts against gastrointestinal worms & lungworms",
//       "Oxyclozanide is a powerful flukicide. It acts against trematodes, bloodsucking nematodes & larvae of hypoderma & oestrus spp.",
//       "Silymarin protects liver cells from harmful effects of toxic chemicals as well as some other medicines",
//       "Indications: Gastrointestinal & lung worms, Round worms, Tape worms, Amphistomiasis, All stages of adult & Immature Liver Flukes",
//       "Targeted Species: Cattle, Calves, Sheep, Goat etc.",
//       "Presentation: 90 ml Suspension"
//     ]
//   }
// ];

// const seed = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to MongoDB");
//     await Product.deleteMany({});
//     console.log("Cleared existing products");
//     await Product.insertMany(products);
//     console.log(`Seeded ${products.length} VetCraft products successfully`);
//     process.exit(0);
//   } catch (error) {
//     console.error("Seed error:", error.message);
//     process.exit(1);
//   }
// };

// seed();



import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  {
    title: "Maxofeed Bolus",
    image: "/maxofeed.jpeg",
    variants: [{ mrp: "₹ 131", packSize: "8 Bolus Strip" }],
    category: "Animal Feed Supplement",
    description: [
      "Stimulates Appetite",
      "Improves Liver Functions",
      "Increases the population of useful Micro Flora",
      "Balances PH of Rumen",
      "Indicated for: Anorexia, Indigestion, Tympany, Infertility, Along with Antibiotic Treatment, Post & Pre Parturition, Fatty Liver Syndrome, Anaemia, Ruminal Acidosis"
    ]
  },
  {
    title: "Maxofeed Injection",
    image: "/maxofeed inj.jpeg",
    variants: [{ mrp: "₹ 140", packSize: "100 ml" }],
    category: "Medicine",
    description: [
      "Liver Extract with B-Complex Injection",
      "Stimulates Appetite",
      "Improves Liver Functions",
      "Increases the population of useful Micro Flora",
      "Balances PH of Rumen",
      "Available in 100 ml Vial"
    ]
  },
  {
    title: "Lacgain",
    image: "/lacgain.jpeg",
    variants: [
      { mrp: "₹ 142", packSize: "100 Tablets" },
      { mrp: "₹ 271", packSize: "200 Tablets" }
    ],
    category: "Animal Feed Supplement",
    description: [
      "A Scientific Herbal Galactagogue",
      "Improves the secretory activity of alveolar tissue",
      "Natural substitute of Oxytocin",
      "Restores normal lactation",
      "Increases milk production & fat %",
      "Prolongs the period of lactation",
      "Highly effective and non hormonal",
      "Indications: Hypogalactia, Agalactia, Milk Letdown, Milk Formation",
      "Dose: 10 Tablets twice a day or as directed by the Veterinarian"
    ]
  },
  {
    title: "Thanmast Powder",
    image: "/thanmast powder.jpeg",
    variants: [{ mrp: "₹ ", packSize: "4*50 gm" }],
    category: "Animal Feed Supplement",
    description: [
      "An Ideal Formulation for Management of Mastitis",
      "Restores normal milk PH",
      "Helps in faster restoration of milk yield",
      "Minimizes the use of antibiotics",
      "Enhances cellular antioxidant",
      "Increases mammory defence mechanism",
      "Better recovery",
      "Minimizes the chances of relapse",
      "Dose: 50 gm daily for 3-5 days or as directed by the Veterinarian"
    ]
  },
  {
    title: "VCUTONE",
    image: "/vcutone.jpeg",
    variants: [{ mrp: "₹ 470", packSize: "2 l" }],
    category: "Animal Feed Supplement",
    description: [
      "A Unique Combination of Vitamins, Minerals & Natural Nutrients",
      "A Non Hormonal Ecbolic Uterine Tonic & Cleanser",
      "Helps in Easy Expulsion of Placenta",
      "For Timely Involution of Uterus for Next Cycle",
      "Ensures Optimum Milk Production",
      "Helps in Preventing Uterine Infections",
      "Improves Conception Rate",
      "Strengthens & Tones up the Uterus",
      "Dose: Large Animals 100 ml daily, Small Animals 25 ml daily. For Retained Placenta: Large animal 200 ml, Small Animal 50 ml"
    ]
  },
  {
    title: "Puralvit",
    image: "/puralvit.jpeg",
    variants: [{ mrp: "₹ 1368", packSize: "1 l" }],
    category: "Animal Feed Supplement",
    description: [
      "Multivitamin Liquid for Normal Growth & Development",
      "Enriched with Vitamin H",
      "Improves Fertility",
      "Helpful in Development of Udder for Maximum Milk Production",
      "Helpful for Lactating Animals (Cattles)",
      "Enhances Immunity",
      "Useful to Improve Milk Quality and Quantity when Mixed with Oral Calcium",
      "Protects From Stress Like Heat Stress, Transportation Stress Etc.",
      "Helpful in Skin Diseases and Hair Loss in Dogs",
      "Corrects Metabolic Disorders",
      "Available in 100 ml, 500 ml & 1 Ltr Pack"
    ]
  },
  {
    title: "VC Zyme Powder",
    image: "/VC Zyme powder.jpeg",
    variants: [{ mrp: "₹ 120", packSize: "120 gm" }],
    category: "Animal Feed Supplement",
    description: [
      "Rumen Buffer Prebiotics & Probiotics with Digestive Enzymes for Cattle",
      "Optimizes Rumen Ph",
      "Prevents Bloat",
      "Optimizes Rumen & Liver Function",
      "Improves digestion",
      "Prevents and corrects Ruminal Acidosis",
      "Helps to improve milk production",
      "Dose: Large Animal 60 gm twice a day, Small Animal 25-30 gm daily for 2 to 4 days or as advised by Veterinarian"
    ]
  },
  {
    title: "VC MIN Fe LIQUID",
    image: "/vc min fe.jpeg",
    variants: [
      { mrp: "₹ 480", packSize: "1 l" },
      { mrp: "₹ 270", packSize: "500 ml" }
    ],
    category: "Animal Feed Supplement",
    description: [
      "Hematinic & Nervine Tonic",
      "Stimulates the Production of Red Blood Cells",
      "Increases the Amount of Hemoglobin in the Blood",
      "To Improve milk Production & Fat %",
      "For Better Growth",
      "To Debilitated Animals",
      "Banana Flavour with Malt Extract",
      "Dose: Cattle 40-50 ml daily orally, Calves/Sheep/Goat 10-15 ml daily orally or as directed by the Veterinarian"
    ]
  },
  {
    title: "VCMIN BOLUS",
    image: "/vc min bolus.jpeg",
    variants: [{ mrp: "₹ 270", packSize: "10 Bolus Box" }],
    category: "Animal Feed Supplement",
    description: [
      "Chelated Trace Minerals & Vitamins Feed Supplement Bolus",
      "Useful in Fertilization, Ovulation, Implantation, Embryo survivability & Overall health & Immunity",
      "Protection, Production & Reproduction",
      "Brings Animals on Heat",
      "Usage: One bolus orally daily for 10 days or as directed by the Veterinarian"
    ]
  },
  {
    title: "LACTODYNE Gold Chelated",
    image: "/Lactodyne gold.jpeg",
    variants: [{ mrp: "₹ 1100", packSize: "5 l" }],
    category: "Animal Feed Supplement",
    description: [
      "An Effective Nutritional Supplement for Live Stock",
      "Provides Highly Bio-available Milk Enhancing Nutrients",
      "Contains Calcium, Vitamins, Minerals & Natural Herbs",
      "Increases milk yield in cattle",
      "Builds strong bones in growing animal",
      "Acts as a growth promoter",
      "Maintains the health of animals",
      "Dose: Cattle 100 ml daily, Calves 40 ml daily, Goats & Sheep 15-20 ml daily or as directed by Veterinarian"
    ]
  },
  {
    title: "VCPREG-750",
    image: "/vc preg.jpeg",
    variants: [{ mrp: "₹ 171", packSize: "3 ml" }],
    category: "Medicine",
    description: [
      "17-alpha Hydroxyprogesterone caproate 250 mg/ml",
      "Beginning of Life is Embryo.... Save it with VCPREG-750",
      "Prepares uterus for implantation",
      "Necessary for formation of placenta",
      "Maintains pregnancy by retaining embryo in uterus",
      "Suppresses uterine motality during pregnancy"
    ]
  },
  {
    title: "VCSPAS Bolus",
    image: "/vc spas bolus.jpeg",
    variants: [{ mrp: "₹ 80", packSize: "4 Bolus Strip" }],
    category: "Medicine",
    description: [
      "Instant Relief from Spasmodic Pain",
      "Useful in Relief of Intestinal Colic & Abdominal Pain",
      "For Rapid Relief of Spasmodic Visceral Pain Such As Intestinal Colic, Renal Colic, Billiary Colic Etc.",
      "Gastrointestinal Spasm",
      "Prolapse of Uterus",
      "For Reducing pain after manual removal of retained placenta & Post Dystocia",
      "Diarrhoea & Dysentery"
    ]
  },
  {
    title: "VCSPAS Injection",
    image: "/vc spas inj.jpeg",
    variants: [{ mrp: "₹ 176", packSize: "100 ml" }],
    category: "Medicine",
    description: [
      "Instant Relief from Spasmodic Pain",
      "Reduces Contraction of the Muscles in the Intestines",
      "For Rapid Relief of Spasmodic Visceral Pain Such As Intestinal Colic, Renal Colic, Billiary Colic Etc.",
      "Gastrointestinal Spasm",
      "Prolapse of Uterus",
      "For Reducing pain after manual removal of retained placenta & Post Dystocia",
      "Diarrhoea & Dysentery",
      "Presentation: 30 ml & 100 ml"
    ]
  },
  {
    title: "Vecromol Inj.",
    image: "/vecromol inj.jpeg",
    variants: [{ mrp: "₹ 196", packSize: "100 ml" }],
    category: "Medicine",
    description: [
      "The Reliable Brand of Nimesulide & Paracetamol",
      "A Safe & Effective Treatment to Control Inflammation, Pain & Fever",
      "Nimesulide is a NSAID with cox-2 enzyme inhibiting property with potent analgesic, antipyretic and anti-inflammatory activity",
      "Paracetamol consists an effective analgesic & antipyretic property",
      "Indications: Osteoarthritis, Mastitis, Metritis, Pyometra, Decomposed Placenta Post operative therapy, As a supportive therapy with anti-biotics",
      "Presentation: 30 ml & 100 ml vial"
    ]
  },
  {
    title: "Vecromol Plus Bolus",
    image: "/vecromol plus.jpeg",
    variants: [{ mrp: "₹ 90", packSize: "4 Bolus Strip" }],
    category: "Medicine",
    description: [
      "The Reliable Brand of Nimesulide & Paracetamol",
      "A Safe & Effective Treatment to Control Inflammation, Pain & Fever",
      "Quick onset of action - Excellent results in low dosage",
      "Indications: Osteoarthritis, Mastitis, Metritis, Pyometra, Decomposed Placenta Post operative therapy, As a supportive therapy with anti-biotics",
      "Presentation: 4 Bolus Strip Pack"
    ]
  },
  {
    title: "LYFONVET AC Bolus",
    image: "/lyfonvet bolus.jpeg",
    variants: [{ mrp: "₹ 80", packSize: "2 Bolus Strip" }],
    category: "Medicine",
    description: [
      "Ceftrixaone Sodium Injection",
      "IIIrd Generation Cepholosporine Antibiotic covers the wide range of Bacterial Infections",
      "Used for: Pneumonia, RTI, UTI, Skin Infections, Intestinal Infections, Unknown Pyrexia, H.S., Surgery, Wound Infections etc.",
      "Pack: 3 gm & 4 gm with Sterile Water 20ml"
    ]
  },
  {
    title: "LYFONVET AC Forte",
    image: "/lyfonvet ac forte.jpeg",
    variants: [{ mrp: "₹ 318", packSize: "4.5 gm" }],
    category: "Medicine",
    description: [
      "Amoxycillin Sodium 3000 mg & Sulbactam Sodium 1500 mg",
      "No tension of bacterial infections",
      "Widely used in bacterial infections",
      "Amoxycillin is an antibiotic, it works by preventing the formation of the bacterial protective covering (Cell Wall) which is required for bacterial survival",
      "Sulbactam is given in combination with Beta-Lactum antibiotics to inhibit Beta-Lactamase (an enzyme produced by bacteria)",
      "Indications: Fever/Unknown Pyrexia, Mastitis, Pneumonia, Bacterial diarrhoea, Bronchitis, Wound/Surgical Wound, UTI, Skin Infection, ENT, Hoof Wound etc.",
      "Pack: 4.5 gm with Sterile Water 20ml"
    ]
  },
  {
    title: "LYFONVET Inj.",
    image: "/lyfonvet inj.jpeg",
    variants: [
      { mrp: "₹ 168", packSize: "3 gm" },
      { mrp: "₹ 205", packSize: "4 gm" }
    ],
    category: "Medicine",
    description: [
      "Ceftrixaone Sodium Injection",
      "IIIrd Generation Cepholosporine Antibiotic covers the wide range of Bacterial Infections",
      "Used for: Pneumonia, RTI, UTI, Skin Infections, Intestinal Infections, Unknown Pyrexia, H.S., Surgery, Wound Infections etc.",
      "Pack: 3 gm & 4 gm with Sterile Water 20ml"
    ]
  },
  {
    title: "HITLURG Inj.",
    image: "/hitlurg.jpeg",
    variants: [{ mrp: "₹ 50", packSize: "100 ml" }],
    category: "Medicine",
    description: [
      "Anti-Histamine - Greater Potency, Rapid Action, Long Acting",
      "Along with Antibiotics during Treatment of Infections",
      "Itching of Unknown Origin",
      "Eczema, Rhinitis, Bloat, Dermatitis",
      "Insect Bites, Pregnancy Toxaemia, Mastitis",
      "Pulmonary Emphysema, Allergy",
      "Retained Placenta, Anaphylactic Shock",
      "Available in 100 ml Vial"
    ]
  },
  {
    title: "Vecocip-TZ Bolus",
    image: "/vecozip.jpeg",
    variants: [{ mrp: "₹ 145", packSize: "4 Bolus Strip" }],
    category: "Medicine",
    description: [
      "The Best Antibacterial & Antiprotozoal Combination",
      "Covers Aerobic, Anaerobic Bacteria & Protozoa",
      "Diarrhoea & Dysentery",
      "Chronic wounds & deep seated wounds",
      "Post operative infection",
      "Uterine infections & Genital Infections-Metritis, Endometritis, Pyometra",
      "Ciprofloxacin is bactericidal against enteropathogens like shigella, salmonella, E-coli, C-Jejuni, Vibrio cholera etc.",
      "Tinidazole is a potent anaerobicide, it is also effective against Entameba & Giardia",
      "Presentation: 4 Bolus Strip Pack"
    ]
  },
  {
    title: "SOLINOX-DS",
    image: "/solinox ds.jpeg",
    variants: [{ mrp: "₹ 154", packSize: "100 ml" }],
    category: "Medicine",
    description: [
      "A Unique Flukacide - To Save Animals.... Kill Worms and Flukes",
      "Broad Spectrum, Non Teratogenic, Non Embryotoxic, Safe in Pregnancy",
      "Levamisole acts against gastrointestinal worms & lungworms",
      "Oxyclozanide is a powerful flukicide. It acts against trematodes, bloodsucking nematodes & larvae of hypoderma & oestrus spp.",
      "Silymarin protects liver cells from harmful effects of toxic chemicals as well as some other medicines",
      "Indications: Gastrointestinal & lung worms, Round worms, Tape worms, Amphistomiasis, All stages of adult & Immature Liver Flukes",
      "Targeted Species: Cattle, Calves, Sheep, Goat etc.",
      "Presentation: 90 ml Suspension"
    ]
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    await Product.deleteMany({});
    console.log("Cleared existing products");
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} VetCraft products successfully`);
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
};

seed();