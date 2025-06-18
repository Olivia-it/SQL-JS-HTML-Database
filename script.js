
// todo access specific data from an object
// DOM selection


const reportField = document.querySelector("#report-field");
const selectedDepartment = document.querySelector("#select-department");
const selectedUser = document.querySelector("#select-user");
const selectedStatus = document.querySelector("#select-status");
const selectedProduct = document.querySelector("#select-product");
const selectedCategory = document.querySelector("#select-category")
const selectedBrand = document.querySelector("#select-brand");
const selectedBarcode = document.querySelector("#select-barcode");
const selectedPurchaseDate = document.querySelector("#select-purchase-date");


class Assets{
    constructor(id, product, category, brand, barcode, purchaseDate, status, user, department){
        this.id = id;
        this.product = product;
        this.category = category;
        this.brand = brand;
        this.barcode = barcode;
        this.purchaseDate = purchaseDate;
        this.status = status;
        this.user =  user;
        this.department = department
    }
}

let asset1 = new Assets(1, "Laptop", "Computers", "HP", "11111", "2000-10-03", "Working", "Tom", "Finance");
let asset2 = new Assets(2, "Laptop", "Computers", "DELL", "22222", "2005-10-03", "Repair", "John", "Finance");
let asset3 = new Assets(3, "Printer", "Printers", "HP", "33333", "2020-10-03", "Retired", "Ben", "Finance");
let asset4 = new Assets(4, "Printer", "Printers", "DELL", "44444", "2007-10-05", "Working", "Sam", "HR");
let asset5 = new Assets(5, "Mouse", "Accesories", "Samsung", "55555", "2010-07-03", "Working", "Ben", "Customer Service");
let asset6 = new Assets(6, "Phone", "Phones", "iPhone", "66666", "2000-05-13", "Repair", "Tom", "Finance");

// array to hold all assets so the function inputSearch can loop through them;
let assets = [asset1, asset2, asset3, asset4, asset5, asset6];

// todo create a report for specific data
// for department input
const inputDepartment = (input) => {
    const selectedDept = input.target.value;
    reportField.innerText = ""
    for(let asset of assets){
if(asset.department === selectedDept){
reportField.innerText += `Product name: ${asset.product}, Category: ${asset.category}, Brand: ${asset.brand}, 
Barcode: ${asset.barcode}, Purchase Date: ${asset.purchaseDate}, Status: ${asset.status}, 
User: ${asset.user}, Department: ${asset.department}\n\n`};
}
}
//calling the function when user chooses an option
selectedDepartment.addEventListener("change", inputDepartment)

// code to append options for selection taken directly from existing objects
let departmentSet = new Set()
for(let asset of assets){
    departmentSet.add(asset.department);}

departmentSet.forEach((department) => {
const option = document.createElement("option")
option.value = department;
option.textContent = department;
selectedDepartment.appendChild(option)
});

// for user input
const inputUser = (input) => {
    const selectedUser = input.target.value;
    reportField.innerText = ""
    for(let asset of assets){
if(asset.user === selectedUser){
reportField.innerText += `Product name: ${asset.product}, Category: ${asset.category}, Brand: ${asset.brand}, 
Barcode: ${asset.barcode}, Purchase Date: ${asset.purchaseDate}, Status: ${asset.status}, 
User: ${asset.user}, Department: ${asset.department}\n\n`}
}
}
//calling the function when user chooses an option
selectedUser.addEventListener("change", inputUser)

let userSet = new Set()
for(let asset of assets){
    userSet.add(asset.user);}

userSet.forEach((user) => {
const option = document.createElement("option")
option.value = user;
option.textContent = user;
selectedUser.appendChild(option)
});

// for status input
const inputStatus = (input) => {
    const selectedStatus = input.target.value;
    reportField.innerText = ""
    for(let asset of assets){
if(asset.status === selectedStatus){
reportField.innerText += `Product name: ${asset.product}, Category: ${asset.category}, Brand: ${asset.brand}, 
Barcode: ${asset.barcode}, Purchase Date: ${asset.purchaseDate}, Status: ${asset.status}, 
User: ${asset.user}, Department: ${asset.department}\n\n`}
}
}
//calling the function when user chooses an option
selectedStatus.addEventListener("change", inputStatus);

// code to append options for selection taken directly from existing objects
let statusSet = new Set()
for(let asset of assets){
    statusSet.add(asset.status);}

statusSet.forEach((status) => {
const option = document.createElement("option")
option.value = status;
option.textContent = status;
selectedStatus.appendChild(option)
});

// for barcode input
const inputBarcode = (input) => {
    const selectedBarcode = input.target.value;
    reportField.innerText = ""
    for(let asset of assets){
if(asset.barcode === selectedBarcode){
reportField.innerText += `Product name: ${asset.product}, Category: ${asset.category}, Brand: ${asset.brand}, 
Barcode: ${asset.barcode}, Purchase Date: ${asset.purchaseDate}, Status: ${asset.status}, 
User: ${asset.user}, Department: ${asset.department}\n\n`};
}
}
//calling the function when user chooses an option
selectedBarcode.addEventListener("change", inputBarcode);

// code to append options for selection taken directly from existing objects
let barcodeSet = new Set()
for(let asset of assets){
    barcodeSet.add(asset.barcode);}

barcodeSet.forEach((barcode) => {
const option = document.createElement("option")
option.value = barcode;
option.textContent = barcode;
selectedBarcode.appendChild(option)
});

// for product input
const inputProduct = (input) => {
    const selectedProduct = input.target.value;
    reportField.innerText = ""
    for(let asset of assets){
if(asset.product === selectedProduct){
reportField.innerText += `Product name: ${asset.product}, Category: ${asset.category}, Brand: ${asset.brand}, 
Barcode: ${asset.barcode}, Purchase Date: ${asset.purchaseDate}, Status: ${asset.status}, 
User: ${asset.user}, Department: ${asset.department}\n\n`};
}
}
//calling the function when user chooses an option
selectedBarcode.addEventListener("change", inputProduct);

// code to append options for selection taken directly from existing objects
let productSet = new Set()
for(let asset of assets){
    productSet.add(asset.product);}

productSet.forEach((product) => {
const option = document.createElement("option")
option.value = product;
option.textContent = product;
selectedProduct.appendChild(option)
});

// for category input
const inputCategory = (input) => {
    const selectedCategory = input.target.value;
    reportField.innerText = ""
    for(let asset of assets){
if(asset.category === selectedCategory){
reportField.innerText += `Product name: ${asset.product}, Category: ${asset.category}, Brand: ${asset.brand}, 
Barcode: ${asset.barcode}, Purchase Date: ${asset.purchaseDate}, Status: ${asset.status}, 
User: ${asset.user}, Department: ${asset.department}\n\n`};
}
}
//calling the function when user chooses an option
selectedCategory.addEventListener("change", inputCategory);

// code to append options for selection taken directly from existing objects
let categorySet = new Set()
for(let asset of assets){
    categorySet.add(asset.category);}

categorySet.forEach((category) => {
const option = document.createElement("option")
option.value = category;
option.textContent = category;
selectedCategory.appendChild(option)
});

// for purchase date input
const inputPurchaseDate = (input) => {
    const selectedPurchaseDate = input.target.value;
    reportField.innerText = ""
    for(let asset of assets){
if(asset.purchaseDate === selectedPurchaseDate){
reportField.innerText += `Product name: ${asset.product}, Category: ${asset.category}, Brand: ${asset.brand}, 
Barcode: ${asset.barcode}, Purchase Date: ${asset.purchaseDate}, Status: ${asset.status}, 
User: ${asset.user}, Department: ${asset.department}\n\n`};
}
}
//calling the function when user chooses an option
selectedPurchaseDate.addEventListener("change", inputPurchaseDate);

// code to append options for selection taken directly from existing objects
let purchaseDateSet = new Set()
for(let asset of assets){
    purchaseDateSet.add(asset.purchaseDate)}

purchaseDateSet.forEach((purchaseDate) => {
const option = document.createElement("option")
option.value = purchaseDate;
option.textContent = purchaseDate;
selectedPurchaseDate.appendChild(option)
});

// for brand input
const inputBrand = (input) => {
    const selectedBrand = input.target.value;
    reportField.innerText = ""
    for(let asset of assets){
if(asset.brand === selectedBrand){
reportField.innerText += `Product name: ${asset.product}, Category: ${asset.category}, Brand: ${asset.brand}, 
Barcode: ${asset.barcode}, Purchase Date: ${asset.purchaseDate}, Status: ${asset.status}, 
User: ${asset.user}, Department: ${asset.department}\n\n`};
}
}
//calling the function when user chooses an option
selectedBrand.addEventListener("change", inputBrand);

// code to append options for selection taken directly from existing objects
let brandSet = new Set()
for(let asset of assets){
    brandSet.add(asset.brand);}

brandSet.forEach((brand) => {
const option = document.createElement("option")
option.value = brand;
option.textContent = brand;
selectedBrand.appendChild(option)
});

// function to create a table in HTML dinamically using results instead of reportField.innerText

const reportTable = document.querySelector("#report-table");

const createTable = (data) => {
const tableRow = document.createElement("tr");

const tableData = document.createElement("td")

}



// Add Assets - create new entries in Assets from user input in html
// helper function to add new <option> element dinamically to existing ones without creating a duplicates
const addNewOption = (selectElement, value) => {
    const optionExist = Array.from(selectElement.options).some((opt) => opt.value === value);
        if(!optionExist){
            const option = document.createElement("option");
            option.value = value;
            option.textContent = value;
            selectElement.appendChild(option)
        }
    }


const addAsset = () => {
const addProduct = document.querySelector("#addProduct").value;
const addCategory = document.querySelector("#addCategory").value;
const addBrand = document.querySelector("#addBrand").value;
const addUser = document.querySelector("#addUser").value;
const addDept = document.querySelector("#addDepartment").value;
const addBarcode = document.querySelector("#addBarcode").value;
const addStatus = document.querySelector("#addStatus").value;
const addPurchaseDate = document.querySelector("#addPurchaseDate").value;

const newID = assets.length + 1;
const newAsset = new Assets(newID, addProduct, addCategory, addBrand, addBarcode, addPurchaseDate, addStatus, addUser, addDept)

assets.push(newAsset);

// calling helper function to dinamically update dropdowns
addNewOption(selectedProduct, addProduct);
addNewOption(selectedCategory, addCategory);
addNewOption(selectedBrand, addBrand);
addNewOption(selectedBarcode, addBarcode);
addNewOption(selectedPurchaseDate, addPurchaseDate);
addNewOption(selectedStatus, addStatus);
addNewOption(selectedUser, addUser);
addNewOption(selectedDept, addDept)
}

const submitEntryBtn = document.querySelector("#submit-entry")
submitEntryBtn.addEventListener("click", addAsset)

// function to delete an asset from the database
const selectDelete = document.querySelector("#select-delete")
const deleteBtn = document.querySelector("#select-delete-btn")

let toDeleteSet = new Set()
for(let asset of assets){
    toDeleteSet.add(asset.barcode);}

toDeleteSet.forEach((barcode) => {
const option = document.createElement("option")
option.value = barcode;
option.textContent = barcode;
selectDelete.appendChild(option)
});

const deleteAsset = () => {
    const deleteRequest = selectDelete.value;
    const targetIndex = assets.findIndex((asset) => asset.barcode === deleteRequest);
    assets.splice(targetIndex, 1);
    }

deleteBtn.addEventListener("click", deleteAsset);


