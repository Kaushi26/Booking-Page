//variables available to all code
let A_Date
let D_Date
let totalDays
let branch
let adultsL
let childL
let adultsF
let childF
let single
let RoomCost1
let double
let RoomCost2
let triple
let RoomCost3
let totalRooms
let extraBed
let bedCost
let wifi
let view
let Choice
let ChildFood
let foodCost
let adventure
let advTime
let guideNeed
let guideWhom
let promo
let promoCost
let discount
let cost
let totalCost
let netTotal
let loyaltyPoints
let totalChild
let guideCostA
let totalAdult
let guideCostC
let GuideC
let totalGuideCost
let Currentcost


//get references to interactive elements
const theForm = document.getElementById("bookingForm");


const TxtName = document.getElementById("Name");
const TxtEmail = document.getElementById("email");
const TxtContact = document.getElementById("contact");


const TxtArrive = document.getElementById("arrival");
const currentADate = document.getElementById("A_date")

const TxtDepart =document.getElementById("departure");
const currentDDate = document.getElementById("D_date")

const  TxtAdultL =document.getElementById("adultL");
const currentAdultL = document.getElementById("localAdult")

const  TxtChildL =document.getElementById("childL");
const currentChildL = document.getElementById("localChild")

const  TxtAdultF =document.getElementById("adultF");
const currentAdultF = document.getElementById("foreignAdult")

const  TxtChildF =document.getElementById("childF");
const currentChildF = document.getElementById("foreignChild")


const TxtBranch = document.getElementById("branch");
const currentBranch = document.getElementById("branchName");


const txtSingle = document.getElementById("single");
const currentSingle = document.getElementById("deluxeSingle");

const txtDouble = document.getElementById("double");
const currentDouble = document.getElementById("deluxeDouble");

const txtTriple = document.getElementById("triple");
const currentTriple = document.getElementById("deluxeTriple");

const txtBed = document.getElementById("bed");
const currentExtraBed = document.getElementById("xtraBed");

const wifiCheckbox = document.getElementById("wifiCheckbox");
const gardenCheckbox = document.getElementById("gardenCheckbox");
const poolCheckbox = document.getElementById("poolCheckbox");
const currentExtraReq = document.getElementById("otherReq");

const TxtFood=document.getElementById("food");
const currentFood = document.getElementById("xtraFood");

const currentPoints = document.getElementById("points");

const TxtAdventure = document.getElementById("adventure");
const currentAdv = document.getElementById("adv");

const TxtTimeAdv=document.getElementById("advtime");
const currentTimeAdv = document.getElementById("timeAdv");

const GuideChoice1 = document.getElementsByName("guide");
const currentGuideNeed = document.getElementById("guideNeed");

const GuideChoice2 = document.getElementsByName("guide2");
const currentGuideWhom = document.getElementById("guideWhom");

const currentDays = document.getElementById("totaldays");
const currentRoomCost = document.getElementById("currentRCost");
const currentAdvCost = document.getElementById("currentACost");

const TxtPromo = document.getElementById("promo");

const txtTable = document.getElementById("bktable");

const BtnBkRooms = document.getElementById("book_room");
const BtnBkAdv = document.getElementById("book_adv");
const BtnLoyalty = document.getElementById("loyalty");
const BtnFavs = document.getElementById("fav");

//creating an empty array to store
let BookingDetails = [];
let LoyaltyDetails = [];


//add event listeners
window.addEventListener("load", init);
TxtArrive.addEventListener("input", updateArrival);
TxtDepart.addEventListener("input", updateDeparture);
TxtBranch.addEventListener("input", updateBranch);
TxtArrive.addEventListener("input", updateTotalDays);
TxtDepart.addEventListener("input", updateTotalDays);
TxtAdultL.addEventListener("input", updateLocalAdult);
TxtChildL.addEventListener("input", updateLocalChild);
TxtAdultF.addEventListener("input", updateForeignAdult);
TxtChildF.addEventListener("input", updateForeignChild);
txtSingle.addEventListener("input", updateSingleRooms);
txtDouble.addEventListener("input", updateDoubleRooms);
txtTriple.addEventListener("input", updateTripleRooms);
txtBed.addEventListener("input", updateExtraBeds);
TxtFood.addEventListener("input", updateChildFood);
wifiCheckbox.addEventListener("input", UpdateRequirements);
gardenCheckbox.addEventListener("input", UpdateRequirements);
poolCheckbox.addEventListener("input", UpdateRequirements);
TxtAdventure.addEventListener("input", updateAdv);
TxtTimeAdv.addEventListener("input",updateTimeAdv);
GuideChoice1.forEach(item => {
    item.addEventListener("input", updateGuideNeed)});
GuideChoice2.forEach(item => {
    item.addEventListener("input", updateGuideWhom)});

TxtPromo.addEventListener("input", promoD)
BtnLoyalty.addEventListener("click", loyalty);
BtnBkRooms.addEventListener("click", displayPrice);
BtnBkAdv.addEventListener("click",updateADVprice);
BtnFavs.addEventListener("click", addFavourites);

txtSingle.addEventListener("input", showCurrentPrice);
txtDouble.addEventListener("input", showCurrentPrice);
txtTriple.addEventListener("input", showCurrentPrice);
txtBed.addEventListener("input", showCurrentPrice);
TxtFood.addEventListener("input", showCurrentPrice);

TxtAdventure.addEventListener("input", PriceAdv);
TxtTimeAdv.addEventListener("input", PriceAdv);
TxtChildL.addEventListener("input", PriceAdv);
TxtChildF.addEventListener("input", PriceAdv);
TxtAdultL.addEventListener("input", PriceAdv);
TxtAdultF.addEventListener("input", PriceAdv);
GuideChoice2.forEach(item => {
    item.addEventListener("input", PriceAdv)});


//Implement event handlers
function init(){
    adultsL = 0;
    childL = 0;
    adultsF = 0;
    childF = 0;
    single = 0;
    double = 0;
    triple = 0;
    RoomCost1=0;
    RoomCost2=0
    RoomCost3=0
    extraBed = 0;
    bedCost=0;
    wifiChoice = "No Choice";
    poolViewChoice = "No Choice";
    gardenViewChoice = "No Choice";
    ChildFood = 0;
    foodCost=0;
    adventure = "None";
    advTime=0;
    guideNeed = "None";
    guideWhom = "None";
    guideCostA=0;
    guideCostC=0;
    GuideC=0;
    promoCost = 0;
    cost=0;
    promoCost=0;
    discount=0;
    totalGuideCost=0;
    Currentcost=0;
    totalCost = 0;
    totalDays = 0;
    totalRooms=0;
    loyaltyPoints=0;

    const storedDetails = localStorage.getItem("details");
    BookingDetails = storedDetails ? JSON.parse(storedDetails) : [];
}

currentADate.innerText="Not Selected"
function updateArrival() {
    A_Date = new Date(TxtArrive.value);
    const today = new Date();
    
    if (A_Date < today) {
        A_Date = today;
        TxtArrive.value = today.toISOString().split('T')[0];
    }
    currentADate.innerText = TxtArrive.value;
}

currentDDate.innerText="Not Selected"
function updateDeparture() {
    D_Date = new Date(TxtDepart.value);
    if(D_Date <= A_Date || D_Date <= today){
        D_Date = new Date(A_Date);
        D_Date.setDate(A_Date.getDate() + 1);
        TxtDepart.value = D_Date.toISOString().split('T')[0];
    }

    currentDDate.innerText = TxtDepart.value;
}

currentDays.innerText = 0;
function updateTotalDays() {
    A_Date = new Date(TxtArrive.value);
    D_Date = new Date(TxtDepart.value);

    totalDays = Number(
        (D_Date instanceof Date && !isNaN(D_Date) && A_Date instanceof Date && !isNaN(A_Date))
            ? Math.ceil((D_Date - A_Date) / (1000 * 60 * 60 * 24))
            : 0
    );
    currentDays.innerText = totalDays;
}

currentBranch.innerText="None";
function updateBranch(){
    branch = TxtBranch.options[TxtBranch.selectedIndex].value;
    currentBranch.innerText = branch;
}

currentAdultL.innerText = 0;
function updateLocalAdult() {
    adultsL = Number(TxtAdultL.value) || 0;
    currentAdultL.innerText = adultsL;
}

currentChildL.innerText = 0;
function updateLocalChild() {
    childL = Number(TxtChildL.value) || 0;
    currentChildL.innerText = childL;
}

currentAdultF.innerText = 0;
function updateForeignAdult() {
    adultsF = Number(TxtAdultF.value) || 0;
    currentAdultF.innerText = adultsF;
}

currentChildF.innerText = 0;
function updateForeignChild() {
    childF = Number(TxtChildF.value) || 0;
    currentChildF.innerText = childF;
}

currentSingle.innerText= 0;
function updateSingleRooms(){
    single = Number(txtSingle.value)
    currentSingle.innerText = single;

    if (isNaN(single)) {
        RoomCost1 = 0;
    }
    RoomCost1 = single * 25000.00;

}

currentDouble.innerText= 0;
function updateDoubleRooms(){
    double = Number(txtDouble.value)
    currentDouble.innerText = double;

    if (isNaN(double)) {
        RoomCost2 = 0;
    }
    RoomCost2 = double * 35000.00;

}

currentTriple.innerText= 0;
function updateTripleRooms(){
    triple = Number(txtTriple.value)
    currentTriple.innerText = triple;

    if (isNaN(triple)) {
        RoomCost3 = 0;
    }
    RoomCost3 = triple * 40000.00;


}

currentFood.innerText= 0;
function updateChildFood(){
    ChildFood = Number(TxtFood.value)
    currentFood.innerText = ChildFood;

    if (isNaN(ChildFood)) {
        foodCost = 0;
    }
    else {
        foodCost = ChildFood * 5000.00;
    }

}

currentExtraBed.innerText= 0;
function updateExtraBeds(){
    extraBed = Number(txtBed.value)
    currentExtraBed.innerText = extraBed;

    if (isNaN(extraBed)) {
        bedCost = 0;
    }
    bedCost = extraBed * 8000.00;
}

currentExtraReq.innerText="None";
function UpdateRequirements(){
    if (wifiCheckbox.checked) {
        wifi = "Wi-Fi";
    }
    else{
        wifi="";
    }

    if(gardenCheckbox.checked) {
        view = "Garden View";
    }
    else{
        view = "Pool View";
    }

    currentExtraReq.innerText = `${wifi} ${view}`;

}
function promoD() {
    promo = TxtPromo.value;
    if (promo === "Promo123") {
        // Apply a 5% discount
        promoCost = 0.05;
    } else {
        promoCost = 0;
    }
}


currentAdv.innerText = "None";
function updateAdv() {
    adventure = TxtAdventure.options[TxtAdventure.selectedIndex].value;
    currentAdv.innerText = adventure;

    if (adventure === "None") {
        guideNeed = "No";
    }
}

currentTimeAdv.innerText= 1;
function updateTimeAdv(){
    advTime = Number(TxtTimeAdv.value);
    currentTimeAdv.innerText = advTime;
}


currentGuideNeed.innerText = "No";
function updateGuideNeed() {
    if (this.value === "yes") {
        guideNeed = "Yes";
        updateGuideWhom();
        PriceAdv();
    } else {
        guideNeed = "No";
        GuideC = 0;
        totalGuideCost = 0;
        // Manually trigger PriceAdv function
        PriceAdv();
    }
    currentGuideNeed.innerText = guideNeed;
}

currentGuideWhom.innerText = "None";
function updateGuideWhom() {
    if (guideNeed === "Yes") {
        if (this.value === "child") {
            guideWhom = "Child";
            totalChild = Number(childL + childF);
            guideCostC = totalChild * 500;
            GuideC = guideCostC;
        } else if (this.value === "adult") {
            guideWhom = "Adult";
            totalAdult = Number(adultsL + adultsF);
            guideCostA = totalAdult * 1000;
            GuideC = guideCostA;
        } else if (this.value === "both") {
            guideWhom = "Both";
            totalChild = Number(childL + childF);
            totalAdult = Number(adultsL + adultsF);
            guideCostC = totalChild * 500;
            guideCostA = totalAdult * 1000;
            GuideC = guideCostC + guideCostA;
        } else {
            guideWhom = "None";
            GuideC = 0;
            totalGuideCost = 0;
            totalChild = Number(childL + childF);
            totalAdult = Number(adultsL + adultsF);
        }
    }
    else{
        if (this.value === "child") {
            guideWhom = "Child";
        } else if (this.value === "adult") {
            guideWhom = "Adult";
        } else if (this.value === "both") {
            guideWhom = "Both";
        } else {
            guideWhom = "None";

        }
        GuideC = 0;
        totalGuideCost = 0;
        totalChild = Number(childL + childF);
        totalAdult = Number(adultsL + adultsF);
    }
    currentGuideWhom.innerText=guideWhom;
}
currentRoomCost.innerText= 0;
function showCurrentPrice() {
    totalDays = Number(
        D_Date instanceof Date && !isNaN(D_Date) && A_Date instanceof Date && !isNaN(A_Date)
            ? Math.ceil((D_Date - A_Date) / (1000 * 60 * 60 * 24))
            : 0
    );

    var CurrentRcost = RoomCost1 + RoomCost2 + RoomCost3 + bedCost + foodCost;
    currentRoomCost.innerText =  CurrentRcost * totalDays;
}

currentAdvCost.innerText = 0;
function PriceAdv() {

    if (adventure === "Scuba-Diving") {
        let DAdultL = Number(adultsL * 5000);
        let DAdultF = Number(adultsF * 10000);
        let DChildL = Number(childL * 2000);
        let DChildF = Number(childF * 5000);
        advTime = Number(TxtTimeAdv.value);

        // Initialize GuideC to 0 if it's still undefined
        if (isNaN(GuideC)) {
            GuideC = 0;
        }

        let costAdv = DAdultL + DChildL + DAdultF + DChildF;
        let totalAdv = costAdv * advTime + GuideC * advTime;
        currentAdvCost.innerText = totalAdv;
    } else {
        currentAdvCost.innerText = 0;
    }
}

function displayPrice(){    

    const formattedA_Date = A_Date ? A_Date.toISOString().split('T')[0] : 'Not selected';
    const formattedD_Date = D_Date ? D_Date.toISOString().split('T')[0] : 'Not selected';
    
    //calculating total number of days
    totalDays = Number((D_Date instanceof Date && !isNaN(D_Date) && A_Date instanceof Date && !isNaN(A_Date))
    ? Math.ceil((D_Date - A_Date) / (1000 * 60 * 60 * 24)): 0);



    //calculation for loyalty points
    totalRooms = single + double + triple;
    if(totalRooms > 3){
        loyaltyPoints = 20 * totalRooms;
    }
    else{
        loyaltyPoints = 0;
    }

    //uploading the loyalty points to local storage
    const Data={"Name" : TxtName.value, "Loyalty Points" : `${loyaltyPoints}`};
    LoyaltyDetails.push(Data)
    localStorage.setItem('Loyalty', JSON.stringify(LoyaltyDetails));

    //total room booking cost calculation
    cost = Number(RoomCost1 + RoomCost2 + RoomCost3 + bedCost + foodCost);
    discount = Number(cost * promoCost);
    totalCost = Number(cost * totalDays);
    netTotal = Number(totalCost - discount);
    
    var CustomerName = TxtName.value;
    var CustomerTp = TxtContact.value;
    var CustomerEmail = TxtEmail.value;

    let table1 = 
    `<tr>
            <td>Customer Name</td>
            <td id="expand">${CustomerName}</td>
        </tr>
        <tr>
            <td>Contact Number</td>
            <td id="expand">${CustomerTp}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td id="expand">${CustomerEmail}</td>
        </tr>
        <tr>
            <td>Arrival Date</td>
            <td>${formattedA_Date !== undefined ? formattedA_Date : 'Not selected'}</td>
        </tr>

        <tr>
            <td>Departure Date</td>
            <td>${formattedD_Date !== undefined ? formattedD_Date : 'Not selected'}</td>
        </tr>
        <tr>
            <td>Hotel Branch</td>
            <td>${branch !== undefined ? branch : 'Not selected'}</td>
        </tr>       
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th></th>
            <th>Selected</th>
            <th>Price</th>
        </tr>

        <tr>
            <td>Total No Of Days</td>
            <td>${totalDays}</td>
            <td>---</td>
        </tr>

        <tr>
            <td>No of Local tourist Adults</td>
            <td>${adultsL}</td>
            <td>---</td>
        </tr>

        <tr>
            <td>No of Local tourist child/children</td>
            <td>${childL}</td>
            <td>---</td>
        </tr>

        <tr>
            <td>No of Foreign tourist Adults</td>
            <td>${adultsF}</td>
            <td>---</td>
        </tr>

        <tr>
            <td>No of Foreign tourist child/children</td>
            <td>${childF}</td>
            <td>---</td>
        </tr>

        <tr>
            <td>No of Single Room</td>
            <td>${single} * 25000</td>
            <td>Rs ${RoomCost1}</td>
        </tr>

        <tr>
            <td>No of Double Room</td>
            <td>${double} * 35000</td>
            <td>Rs ${RoomCost2}</td>
        </tr>

        <tr>
            <td>No of Triple Room</td>
            <td>${triple} * 40000</td>
            <td>Rs ${RoomCost3}</td>
        </tr>

        <tr>
            <td>No of Extra Beds</td>
            <td>${extraBed} * 8000</td>
            <td>Rs ${bedCost}</td>
        </tr>

        <tr>
            <td>No of Kids Above 5 Years Of Age</td>
            <td>${ChildFood} * 5000</td>
            <td>Rs ${foodCost}</td>
        </tr>

        <tr>
            <td>Extra Requirements</td>
            <td>${(wifi !== undefined ? wifi + '<br>' : '') + (view !== undefined ? view + '<br>' : 'Not selected')}</td>
            <td>---</td>
        </tr>
        <tr>
            <td>Discount</td>
            <td>---</td>
            <td>Rs ${discount}</td>
        </tr>
        <tr>
            <td>Total Cost</td>
            <td>---</td>
            <td>Rs ${totalCost}</td>
        </tr>
        <tr>
        <td>Net Total</td>
        <td>---</td>
        <td>Rs ${netTotal}</td>
    </tr>`;   

    let totalparticipants = Number(adultsF + adultsL + childF + childL);
    if (!CustomerName || !CustomerTp || !CustomerEmail || formattedA_Date === 'Not selected' || formattedD_Date === 'Not selected' || !branch ||branch === "None" || totalparticipants === 0 || totalRooms === 0) {
        window.alert("Please fill in all the required fields");
    }
    else{
        txtTable.innerHTML = table1;
        theForm.reset();
        currentADate.innerText = "Not Selected";
        currentDDate.innerText = "Not Selected";
        updateTotalDays.innerText=0;
        currentBranch.innerText = "None";
        currentAdultL.innerText = 0;
        currentChildL.innerText = 0;
        currentAdultF.innerText = 0;
        currentChildF.innerText = 0;
        currentSingle.innerText= 0;
        currentDouble.innerText= 0;
        currentTriple.innerText= 0;
        currentFood.innerText= 0;
        currentExtraBed.innerText= 0;
        currentExtraReq.innerText="None";
        currentRoomCost.innerText= 0;
        currentTimeAdv.innerText = 0;
        currentGuideNeed.innerText = "No";
        currentGuideWhom.innerText = "No";
        currentAdvCost.innerText = 0;
        currentPoints.innerText= 0;
    }

}

currentPoints.innerText = 0;
function loyalty() {
    currentPoints.innerText = `${loyaltyPoints}`;
}

function updateADVprice() {
    var CustomerName = TxtName.value;
    var CustomerTp = TxtContact.value;
    var CustomerEmail = TxtEmail.value;
    const formattedA_Date = A_Date ? A_Date.toISOString().split('T')[0] : 'Not selected';

    let DAdultL = Number(adultsL * 5000);
    let DAdultF = Number(adultsF * 10000);
    let DChildL = Number(childL * 2000);
    let DChildF = Number(childF * 5000);
    advTime = Number(TxtTimeAdv.value);

    totalGuideCost = totalGuideCost || 0;
    let costAdv = DAdultL + DChildL + DAdultF + DChildF;
    let totalAdv = costAdv * advTime + totalGuideCost;

    if(branch === "None"){
        Window.alert("Please fill in all the required fields")
    }
    let totalparticipants = Number(adultsF + adultsL + childF + childL);
    let table2 =
        `
            <tr>
                <td>Customer Name</td>
                <td id="expand">${CustomerName}</td>
            </tr>
            <tr>
                <td>Contact Number</td>
                <td id="expand">${CustomerTp}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td id="expand">${CustomerEmail}</td>
            </tr>
            <tr>
                <td>Arrival Date</td>
                <td>${formattedA_Date}</td>
            </tr>
            <tr>
                <td>Hotel Branch</td>
                <td>${branch || 'Not selected'}</td>
            </tr>
            <tr>
                <td>Adventure</td>
                <td>${adventure || 'Not selected'}</td>
            </tr>
            <tr>
                <td>No of Local tourist Adults</td>
                <td>${adultsL} * 5000</td>
                <td>Rs${DAdultL}</td>
            </tr>
            <tr>
                <td>No of Local tourist child/children</td>
                <td>${childL} * 2000</td>
                <td>Rs${DChildL}</td>
            </tr>
            <tr>
                <td>No of Foreign tourist Adults</td>
                <td>${adultsF} * 10000</td>
                <td>Rs ${DAdultF}</td>
            </tr>
            <tr>
                <td>No of Foreign tourist child/children</td>
                <td>${childF} * 5000</td>
                <td>Rs ${DChildF}</td>
            </tr>
            <tr>
                <td>No Of Hour/s</td>
                <td>${advTime}</td>
            </tr>
            <tr>
                <td>Total Cost</td>
                <td>Rs ${totalAdv}</td>
            </tr>
        `;

                    // Validate form input values
        if (!CustomerName || !CustomerTp || !CustomerEmail || formattedA_Date === 'Not selected' || !branch || branch === 'None' || !adventure || adventure === 'None' || totalparticipants === 0 || !guideNeed || !guideWhom) {
            window.alert("Please fill in all the required fields");
            return;
        }
        else{
            txtTable.innerHTML = table2;
            //windows alert for adventure booking
            window.alert(
            `Dear ${CustomerName},
            Your reservation for The Adventure ${adventure} in the ${branch} branch on ${formattedA_Date} For ${totalChild} Child/Children & ${totalAdult} Adult/s for a total duration of ${advTime} Hour/s  has been placed successfully. Thank you for making the reservation. Have a good day.`
        );
         //resetting the form and current booking back to default
         theForm.reset();
         currentADate.innerText = "Not Selected";
         currentDDate.innerText = "Not Selected";
         updateTotalDays.innerText=0;
         currentBranch.innerText = "None";
         currentAdultL.innerText = 0;
         currentChildL.innerText = 0;
         currentAdultF.innerText = 0;
         currentChildF.innerText = 0;
         currentSingle.innerText= 0;
         currentDouble.innerText= 0;
         currentTriple.innerText= 0;
         currentFood.innerText= 0;
         currentExtraBed.innerText= 0;
         currentExtraReq.innerText="None";
         currentRoomCost.innerText= 0;
         currentTimeAdv.innerText = 0;
         currentGuideNeed.innerText = "No";
         currentGuideWhom.innerText = "No";
         currentAdvCost.innerText = 0;
         currentPoints.innerText= 0;
        }
}

function addFavourites(){
    //adding the favourites to local storage
    const formattedA_Date = A_Date.toISOString().split('T')[0];
    const formattedD_Date = D_Date.toISOString().split('T')[0];
    var CustomerName = TxtName.value;
    var CustomerTp = TxtContact.value;
    const jsonData = 
    {"Name" : `${CustomerName}`,
     "Contact Number" : `${CustomerTp}`,
     "Hotel Branch" : `${branch}`,
     "No of Local tourist Adults" : `${adultsL}`,
     "No of Local tourist child/children" : `${childL}`,
     "No of Foreign tourist Adults" : `${adultsF}`,
     "No of Foreign tourist child/children" : `${childF}`,
     "Arrival Date" : `${formattedA_Date}`,
     "Departure Date" : `${formattedD_Date}`, 
     "Total No Of Days" : `${totalDays}`, 
     "No of Single Room" : `${single}`, 
     "No of Double Room" : `${double}`, 
     "No of triple Room" : `${triple}` ,
     "No of Extra Beds" : `${extraBed}`, 
     "No of Kids Above 5 Years Of Age" : `${ChildFood}`,
     "Extra Requirements" : `${wifi} ${view}`,
     "Loyalty Points": loyaltyPoints,
     "Adventure" : `${adventure}`,
     "Duration" : `${advTime}`,
     "Need a guide" : `${guideNeed}`,
     "Guide Whom" : `${guideWhom}`
    };

    BookingDetails.push(jsonData);
    localStorage.setItem("details", JSON.stringify(BookingDetails));
    console.log(localStorage);

    alert(`Added To Favourites`);
}