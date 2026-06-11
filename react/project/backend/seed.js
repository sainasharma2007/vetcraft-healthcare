import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  {
    title: "Maxofeed Bolus",
    image: "/maxofeed.jpeg",
    mrp: "₹ 131",
    packSize: "8 Bolus Strip",
    category: "Animal Feed Supplement",
    description: [
      "Stimulates Appetite",
      "Improves Liver Functions",
      "Increases the population of useful Micro Flora",
      "Balances PH of Rumen"
    ]
  },
  {
    title: "Maxofeed Injection",
    image: "/maxofeed inj.jpeg",
    mrp: "₹ 140",
    packSize: "100 ml",
    category: "Medicine",
    description: [
      "Stimulates Appetite",
      "Improves Liver Functions",
      "Increases the population of useful Micro Flora",
      "Balances PH of Rumen"
    ]
  },
  {
    title: "Lacgain",
    image: "/lacgain.jpeg",
    mrp: "₹ 142",
    packSize: "100 Tablets",
    category: "Animal Feed Supplement",
    description: [
      "Improves the secretory activity of alveolar tissue",
      "Natural substitute of Oxytocin",
      "Restores normal lactation",
      "Increases milk production & fat %",
      "Prolongs the period of lactation",
      "Highly effective and non hormonal"
    ]
  },
  {
    title: "Lacgain",
    image: "/lacgain.jpeg",
    mrp: "₹ 271",
    packSize: "200 Tablets",
    category: "Animal Feed Supplement",
    description: [
      "Improves the secretory activity of alveolar tissue",
      "Natural substitute of Oxytocin",
      "Restores normal lactation",
      "Increases milk production & fat %",
      "Prolongs the period of lactation",
      "Highly effective and non hormonal"
    ]
  },
  {
    title: "Thanmast Powder",
    image: "/thanmast powder.jpeg",
    mrp: "₹ ",
    packSize: "4*50 gm",
    category: "Animal Feed Supplement",
    description: [
      "Restores normal milk PH",
      "Helps in faster restoration of milk yield",
      "Minimizes the use of antibiotics",
      "Enhances cellular antioxidant",
      "Increases mammory defence mechanism",
      "Better recovery",
      "Minimizes the chances of relapse"
    ]
  },
  {
    title: "VCUTONE",
    image: "/vcutone.jpeg",
    mrp: "₹ 470",
    packSize: "2 l",
    category: "Animal Feed Supplement",
    description: [
      "Helps in easy expulsion of Placenta",
      "Helps in preventing Uterine Infections",
      "Improves Conception Rate",
      "For timely involution of uterus for next cycle",
      "Ensures optimum milk production"
    ]
  },
  {
    title: "Puralvit",
    image: "/puralvit.jpeg",
    mrp: "₹ 1368",
    packSize: "1 l",
    category: "Animal Feed Supplement",
    description: [
      "MULTIVITAMIN LIQUID FOR NORMAL GROWTH & DEVELOPMENT"
    ]
  },
  {
    title: "VCZyme Powder",
    image: "/VC Zyme powder.jpeg",
    mrp: "₹ 120",
    packSize: "120 gm",
    category: "Animal Feed Supplement",
    description: [
      "Optimizes Rumen Ph",
      "Prevents Bloat",
      "Optimizes Rumen & Liver Function",
      "Improves digestion",
      "Prevents and corrects Ruminal Acidiosis",
      "Helps to improve milk production"
    ]
  },
  {
    title: "VCMIN Fe LIQUID",
    image: "/vc min fe.jpeg",
    mrp: "₹ 380",
    packSize: "1 l",
    category: "Animal Feed Supplement",
    description: [
      "Stimulates the Production of Red Blood Cells",
      "Increases the Amount of Hemoglobin in the Blood",
      "To Improve milk Production & Fat %",
      "For Better Growth",
      "To Debilitated Animals"
    ]
  },
  {
    title: "VCMIN Fe LIQUID",
    image: "/vc min fe.jpeg",
    mrp: "₹ 270",
    packSize: "500 ml",
    category: "Animal Feed Supplement",
    description: [
      "Stimulates the Production of Red Blood Cells",
      "Increases the Amount of Hemoglobin in the Blood",
      "To Improve milk Production & Fat %",
      "For Better Growth",
      "To Debilitated Animals"
    ]
  },
  {
    title: "VCMIN BOLUS",
    image: "/vc min bolus.jpeg",
    mrp: "₹ 270",
    packSize: "10 Bolus Box",
    category: "Animal Feed Supplement",
    description: [
      "Useful in Fertilization, Ovulation, Implantation, Embryo survivability & Overall health & Immunity"
    ]
  },
  {
    title: "LACTODYNE Gold Chelated",
    image: "/Lactodyne gold.jpeg",
    mrp: "₹ 1100",
    packSize: "5 l",
    category: "Animal Feed Supplement",
    description: [
      "Increases milk yield in cattle",
      "Builds strong bones in growing animal",
      "Acts as a growth promoter",
      "Maintains the health of animals"
    ]
  },
  {
    title: "VCPREG-750",
    image: "/vc preg.jpeg",
    mrp: "₹ 171",
    packSize: "3 ml",
    category: "Medicine",
    description: [
      "Prepares uterus for implantation",
      "Necessary for formation of placenta",
      "Maintains pregnancy by retaining embryo in uterus",
      "Suppresses uterine motality during pregnancy"
    ]
  },
  {
    title: "VCSPAS Bolus",
    image: "/vc spas bolus.jpeg",
    mrp: "₹ 80",
    packSize: "4 Bolus Strip",
    category: "Medicine",
    description: [
      "Useful in Relief of Intestinal Colic & Abdominal Pain"
    ]
  },
  {
    title: "VCSPAS Injection",
    image: "/vc spas inj.jpeg",
    mrp: "₹ 176",
    packSize: "100 ml",
    category: "Medicine",
    description: [
      "Reduces Contraction of the Muscles in the Intestines"
    ]
  },
  {
    title: "Vecromol Inj.",
    image: "/vecromol inj.jpeg",
    mrp: "₹ 196",
    packSize: "100 ml",
    category: "Medicine",
    description: [
      "A Safe & Effective Treatment to Control Inflammation, Pain & Fever"
    ]
  },
  {
    title: "Vecromol Plus Bolus",
    image: "/vecromol plus.jpeg",
    mrp: "₹ 90",
    packSize: "4 Bolus Strip",
    category: "Medicine",
    description: [
      "A Safe & Effective Treatment to Control Inflammation, Pain & Fever"
    ]
  },
  {
    title: "LYFONVET",
    image: "/lyfonvet bolus.jpeg",
    mrp: "₹ 168",
    packSize: "3 gm",
    category: "Medicine",
    description: [
      "IIIrd Generation Cepholosporine Antibiotic covers the wide range of Bacterial Infections"
    ]
  },
  {
    title: "LYFONVET",
    image: "/lyfonvet bolus.jpeg",
    mrp: "₹ 205",
    packSize: "4 gm",
    category: "Medicine",
    description: [
      "IIIrd Generation Cepholosporine Antibiotic covers the wide range of Bacterial Infections"
    ]
  },
  {
    title: "LYFONVET AC Forte",
    image: "/lyfonvet ac forte.jpeg",
    mrp: "₹ 318",
    packSize: "4.5 gm",
    category: "Medicine",
    description: [
      "Widely used in bacterial infections"
    ]
  },
  {
    title: "LyfonVet Inj.",
    image: "/lyfonvet inj.jpeg",
    mrp: "₹ 168",
    packSize: "3 gm",
    category: "Medicine",
    description: [
      "IIIrd Generation Cepholosporine Antibiotic covers the wide range of Bacterial Infections"
    ]
  },
  {
    title: "LyfonVet Inj.",
    image: "/lyfonvet inj.jpeg",
    mrp: "₹ 205",
    packSize: "4 gm",
    category: "Medicine",
    description: [
      "IIIrd Generation Cepholosporine Antibiotic covers the wide range of Bacterial Infections"
    ]
  },
  {
    title: "HITLURG Inj.",
    image: "/hitlurg.jpeg",
    mrp: "₹ 50",
    packSize: "100 ml",
    category: "Medicine",
    description: [
      "Used during treatment of infections, itching of unknown origin, bloating, insect bites & allergy"
    ]
  },
  {
    title: "Vecocip-TZ Bolus",
    image: "/vecozip.jpeg",
    mrp: "₹ 145",
    packSize: "4 Bolus Strip",
    category: "Medicine",
    description: [
      "Diarrhoea & Dysentery",
      "Chronic wounds & deep seated wounds",
      "Post operative infection",
      "Uterine infections & Genital Infections-Metritis, Endometritis, Pyometra"
    ]
  },
  {
    title: "SOLINOX-DS",
    image: "/solinox ds.jpeg",
    mrp: "₹ 154",
    packSize: "100 ml",
    category: "Medicine",
    description: [
      "To save animals by killing Worms and Flukes"
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