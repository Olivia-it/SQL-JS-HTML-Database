
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
const tableBody = document.querySelector("tbody");



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

let asset1 = new Assets(1, "Laptop", "Computers", "HP", 11111, "2000-10-03", "Working", "Tom", "Finance");
let asset2 = new Assets(2, "Laptop", "Computers", "DELL", 22222, "2005-10-03", "Repair", "John", "Finance");
let asset3 = new Assets(3, "Printer", "Printers", "HP", 33333, "2020-10-03", "Retired", "Ben", "Finance");
let asset4 = new Assets(4, "Printer", "Printers", "DELL", 44444, "2007-10-05", "Working", "Sam", "HR");
let asset5 = new Assets(5, "Mouse", "Accesories", "Samsung", 55555, "2010-07-03", "Working", "Ben", "Customer Service");
let asset6 = new Assets(6, "Phone", "Phones", "iPhone", 66666, "2000-05-13", "Repair", "Tom", "Finance");

// array to hold all assets so the function inputSearch can loop through them;
let assets = [asset1, asset2, asset3, asset4, asset5, asset6];

// function to create and update report table dinamically
const updateTable = (assetArr) => {
    const reportTable = document.querySelector("#table-body");
// innerHTML clears only dinamically added fields and leaves the hardcoded html fields
    reportTable.innerHTML = "";
    assetArr.forEach(asset => {
const tableRow = document.createElement("tr");
const productData = document.createElement("td");
productData.textContent = asset.product;
const categoryData = document.createElement("td");
categoryData.textContent = asset.category;
const brandData = document.createElement("td");
brandData.textContent = asset.brand;
const barcodeData = document.createElement("td");
barcodeData.textContent = asset.barcode;
const purchaseDateData = document.createElement("td");
purchaseDateData.textContent = asset.purchaseDate;
const statusData = document.createElement("td");
statusData.textContent = asset.status;
const userData = document.createElement("td");
userData.textContent = asset.user;
const deptData = document.createElement("td");
deptData.textContent = asset.department;
            
// to add all data to the row
tableRow.appendChild(productData);
tableRow.appendChild(categoryData);
tableRow.appendChild(brandData);
tableRow.appendChild(barcodeData);
tableRow.appendChild(purchaseDateData);
tableRow.appendChild(statusData);
tableRow.appendChild(userData);
tableRow.appendChild(deptData);

// Append row to the table
reportTable.appendChild(tableRow);
    });
};


// for department input
const inputDepartment = (input) => {
    const selectedDepartment = input.target.value;
// fileter through existing data arrays to see if the input matches existing value in an array
    const filtered = assets.filter((asset) => asset.department === selectedDepartment);
    updateTable(filtered)
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
    // fileter through existing data arrays to see if the input matches existing value in an array
    const filtered = assets.filter((asset) => asset.user === selectedUser);
    updateTable(filtered)
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
    // fileter through existing data arrays to see if the input matches existing value in an array
    const filtered = assets.filter((asset) => asset.status === selectedStatus);
    updateTable(filtered)
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
    // fileter through existing data arrays to see if the input matches existing value in an array
    const filtered = assets.filter((asset) => asset.barcode === selectedBarcode);
    updateTable(filtered)
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
    // fileter through existing data arrays to see if the input matches existing value in an array
    const filtered = assets.filter((asset) => asset.product === selectedProduct);
    updateTable(filtered)
}

//calling the function when user chooses an option
selectedProduct.addEventListener("change", inputProduct);

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
// fileter through existing data arrays to see if the input matches existing value in an array
const filtered = assets.filter((asset) => asset.category === selectedCategory);
    updateTable(filtered)
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
// fileter through existing data arrays to see if the input matches existing value in an array
const filtered = assets.filter((asset) => asset.purchaseDate === selectedPurchaseDate);
    updateTable(filtered)
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
    const filtered = assets.filter((asset) => asset.brand === selectedBrand);
    updateTable(filtered);
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

if(isNaN(addBarcode)){
    alert("Barcode must be a number")
} else {
assets.push(newAsset);}

// to store the new added data
localStorage.setItem("assets", JSON.stringify(assets))

// calling helper function to dinamically update dropdowns
addNewOption(selectedProduct, addProduct);
addNewOption(selectedCategory, addCategory);
addNewOption(selectedBrand, addBrand);
addNewOption(selectedBarcode, addBarcode);
addNewOption(selectedPurchaseDate, addPurchaseDate);
addNewOption(selectedStatus, addStatus);
addNewOption(selectedUser, addUser);
addNewOption(selectedDepartment, addDept);

// clear the entries after users presses add button
document.querySelector("#addProduct").value = "";
document.querySelector("#addCategory").value = "";
document.querySelector("#addBrand").value = "";
document.querySelector("#addUser").value = "";
document.querySelector("#addDepartment").value = "";
document.querySelector("#addBarcode").value = "";
document.querySelector("#addPurchaseDate").value = "";
document.querySelector("#addStatus").value = "";

const addConfirmation = document.querySelector("#add-confirmation-text");
addConfirmation.innerText = "The asset has been added to the database"
}

const submitEntryBtn = document.querySelector("#submit-entry")
submitEntryBtn.addEventListener("click", addAsset)

// function to delete an asset from the database
const selectDelete = document.querySelector("#select-delete");
const deleteBtn = document.querySelector("#select-delete-btn");
const deleteConfirmation = document.querySelector("#delete-confirmation-text");

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
deleteConfirmation.innerText = "The asset has been deleted from database";
    }
deleteBtn.addEventListener("click", deleteAsset);

// to update existing entries in database
// todo function: based on user barcode selection to display all data for the selected barcode. Data then can be manually update and the new entries will replace existing ones in the database
// const selectUpdate = document.querySelector("#select-update");
// const updateBtn = document.querySelector("#select-update-btn");
// const updateConfirmation = document.querySelector("#update-confirmation-text");

// const updateAsset = (input) => {
// const updateProduct = document.querySelector("#updateProduct");
// const updateCategory = document.querySelector("#updateCategory";
// const updateBrand = document.querySelector("#updateBrand");
// const updateUser = document.querySelector("#updateUser");
// const updateDept = document.querySelector("#updateDepartment");
// const updateBarcode = document.querySelector("#updateBarcode");
// const updateStatus = document.querySelector("#updateStatus");
// const updatePurchaseDate = document.querySelector("#updatePurchaseDate");

// // helper function to add new <option> element dinamically to existing ones without creating a duplicates
// const addNewOption = (selectElement, value) => {
// const optionExist = Array.from(selectElement.options).some((opt) => opt.value === value);
// if(!optionExist){
// const option = document.createElement("option");
// option.value = value;
// option.textContent = value;
// selectElement.appendChild(option)}
// if(isNaN(addBarcode)){
//     alert("Barcode must be a number")
// } else {
// assets.push(newAsset);}

// // to store the new added data
// localStorage.setItem("assets", JSON.stringify(assets))

// // calling helper function to dinamically update dropdowns
// addNewOption(selectedProduct, updateProduct);
// addNewOption(selectedCategory, updateCategory);
// addNewOption(selectedBrand, updateBrand);
// addNewOption(selectedBarcode, updateBarcode);
// addNewOption(selectedPurchaseDate, updatePurchaseDate);
// addNewOption(selectedStatus, updateStatus);
// addNewOption(selectedUser, updateUser);
// addNewOption(selectedDepartment, updateDept);

// for(asset of assets){
//     if(asset.barcode === input.target.value){
//         asset.product = updateProduct.value;
//         asset.category = updateProduct.value;
//         asset.brand = updateBrand.value;
//         asset.barcode = updateBarcode.value;
//         asset.purchaseDate = updatePurchaseDate.value;
//         asset.status = updateStatus.value;
//         asset.user = updateUser.value;
//         asset.department = selectedDepartment.value
//     }
// }
// }


// to clear text when user clicks anywhere on the body. At the moment it clear the text even when the button is clicked
// const body = document.querySelector("body")
// const clearP = () => {
//     const deleteConfirmation = document.querySelector("#delete-confirmation-text")
//     deleteConfirmation.innerText = "";
// }
// body.addEventListener("click", clearP)
