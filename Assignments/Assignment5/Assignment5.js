

// 1. Get all drugs that are antibiotics.
const antibiotics = drugs.filter(drug => drug.category === "Antibiotic");
console.log("Antibiotics:", antibiotics);


// 2. Return an array of drug names in lowercase.
const drugNamesLowercase = drugs.map(drug => drug.name.toLowerCase());
console.log("Drug Names in Lowercase:", drugNamesLowercase);


// 3. Write a function that accepts a category and returns all drugs under that category.

function getDrugsByCategory(category) {
    return drugs.filter(drug => drug.category === category);
    }
console.log("Antimalarial Drugs:", getDrugsByCategory("Antimalarial"));


// 4. Log each drug’s name and its manufacturer.
drugs.forEach(drug => {
    console.log(`Drug: ${drug.name}, Manufacturer: ${drug.manufacturer}`);
});


// 5. Return all drugs that require a prescription.
const prescriptionDrugs = drugs.filter(drug => drug.isPrescriptionOnly);
console.log("Prescription Drugs:", prescriptionDrugs);


// 6. Return a new array, each item should follow the format: "Drug: [name] - [dosageMg]mg".

const formattedDrugs = drugs.map(drug => `Drug: ${drug.name} - ${drug.dosageMg}mg`);
console.log("Formatted Drugs:", formattedDrugs);


// 7. Write a function that returns all drugs with a stock less than 50.
const getLowStockDrugs = ()=>{
    return drugs.filter(drug => drug.stock < 50);
}

// 8. Return all drugs that are not prescription-only.
const nonPrescriptionDrugs = drugs.filter(drug => !drug.isPrescriptionOnly);
console.log("Non-Prescription Drugs:", nonPrescriptionDrugs);

// 9. Write a function that takes a manufacturer name and returns how many drugs are from that company.
function countDrugsByManufacturer(drugsArray, manufacturerName) {
    if (!Array.isArray(drugsArray) || !manufacturerName) {
      return 0;
    }
  
    return drugsArray.filter(drug => drug.manufacturer === manufacturerName).length;
}
const count = countDrugsByManufacturer(drugs, "Pfizer");
console.log(count);


// 10. Use forEach() to count how many drugs are Analgesics.

let analgesicCount = 0;
drugs.forEach(drug => {
    if (drug.category === "Analgesic") {
        analgesicCount++;
    }
});
console.log("Analgesic Count:", analgesicCount);


  
