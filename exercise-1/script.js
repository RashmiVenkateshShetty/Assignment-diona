const data = {
    workerName: "Madeleine Willson",
    workerAppId: "712041",
    submitted: "March 28, 2024 20:43",
    claimNo: "20042047",

    prescriptionDrugs: [
        {
            drug: "Naproxen",
            datePurchased: "February 28, 2024",
            prescriptionDate: "February 29, 2024",
            provider: "Dr. Best",
            amount: "$20.00"
        }
    ],

    otcDrugs: [
        {
            drug: "Advil",
            date: "March 28, 2024",
            amount: "$8.00",
            seller: "Shoppers Drug Mart",
            reason: "Pain"
        }
    ],

    medicalSupplies: [
        {
            item: "Tensor",
            date: "February 28, 2024",
            prescribed: "Yes",
            provider: "Dr. Best",
            amount: "$10.00",
            seller: "Shoppers DrugMart"
        }
    ],

    parking: [
        {
            address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",
            date: "March 28, 2024",
            amount: "$10.00",
            meterUsed: "yes",
            meterNumber: "12245"
        }
    ],

    mileage: [
        {
            date: "March 28, 2024",
            facility: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
            workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3,Canada",
            km: "20 km"
        }
    ],

    transport: [
        {
            date: "March 28, 2024",
            startingPoint: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
            facility: "",
            type: "Bus",
            fare: "$3.00"
        },
        {
            date: "March 27, 2024",
            startingPoint: "25 Furby St, Winnipeg MB R3C 2A2, Canada",
            facility: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
            type: "Taxi",
            fare: "$15.00"
        }
    ]
};


function header() {
    return `
        <div class="header">
            <img src="../assets/wcb-logo.svg" alt="WCB Manitoba" class="logo">
            <div class="contact">
                333 Broadway<br>
                Winnipeg, MB R3C 4W3<br>
                Phone: (204) 954-4321<br>
                Toll Free: 1-855-954-4321<br>
                wcb.mb.ca
            </div>
        </div>
    `;
}


function topMeta(page, total) {
    return `
        <div class="top-meta">
            <div class="meta-left">
                <span>Worker App ID: ${data.workerAppId}</span>
                <span>Submitted: ${data.submitted}</span>
            </div>
            <div>Page ${page} of ${total}</div>
        </div>
    `;
}


function topMetaStacked(page, total) {
    return `
        <div class="top-meta-stacked">
            Worker App ID:<br>
            ${data.workerAppId}<br><br>
            Submitted: ${data.submitted}<br><br>
            Page ${page} of ${total}
        </div>
    `;
}


function footer(page, total) {
    return `
        <div class="footer">
            <span>Worker App ID: ${data.workerAppId} Submitted: ${data.submitted}</span>
            <span>Page ${page} of ${total}</span>
        </div>
    `;
}


function renderPrescription() {
    return data.prescriptionDrugs.map(item => `
        <tr>
            <td>${item.drug}</td>
            <td>${item.datePurchased}</td>
            <td>${item.prescriptionDate}</td>
            <td>${item.provider}</td>
            <td>${item.amount}</td>
        </tr>
    `).join("");
}


function renderOTC() {
    return data.otcDrugs.map(item => `
        <tr>
            <td>${item.drug}</td>
            <td>${item.date}</td>
            <td>${item.amount}</td>
            <td>${item.seller}</td>
            <td>${item.reason}</td>
        </tr>
    `).join("");
}


function renderSupplies() {
    return data.medicalSupplies.map(item => `
        <tr>
            <td>${item.item}</td>
            <td>${item.date}</td>
            <td>${item.prescribed}</td>
            <td>${item.provider}</td>
            <td>${item.amount}</td>
            <td>${item.seller}</td>
        </tr>
    `).join("");
}


function renderParking() {
    return data.parking.map(item => `
        <tr>
            <td>${item.address}</td>
            <td>${item.date}</td>
            <td>${item.amount}</td>
            <td>${item.meterUsed}</td>
            <td>${item.meterNumber}</td>
        </tr>
    `).join("");
}


function renderMileage() {
    return data.mileage.map(item => `
        <tr>
            <td>${item.date}</td>
            <td>${item.facility}</td>
            <td>${item.workplace}</td>
            <td>${item.km}</td>
        </tr>
    `).join("");
}


function renderTransport() {
    return data.transport.map(item => `
        <tr>
            <td>${item.date}</td>
            <td>${item.startingPoint}</td>
            <td>${item.facility}</td>
            <td>${item.type}</td>
            <td>${item.fare}</td>
        </tr>
    `).join("");
}


document.getElementById("app").innerHTML = `

<div class="page">

    ${topMeta(1, 2)}
    ${header()}

    <div class="title">
        Medical &amp; Travel Expense<br>
        Request
    </div>

    <p class="description">
        ${data.workerName} requested reimbursement for the following
        medical and/or travel expenses:
    </p>

    <h2>Prescription Drugs</h2>
    <table>
        <thead>
            <tr>
                <th>Drug Name</th>
                <th>Date Purchased</th>
                <th>Prescription Date</th>
                <th>Healthcare Provider Name</th>
                <th>Paid Amount</th>
            </tr>
        </thead>
        <tbody>
            ${renderPrescription()}
        </tbody>
    </table>

    <h2>Over-the-Counter Drugs</h2>
    <table>
        <thead>
            <tr>
                <th>Drug Name</th>
                <th>Date Purchased</th>
                <th>Paid Amount</th>
                <th>Seller's Name</th>
                <th>Reason for Purchasing</th>
            </tr>
        </thead>
        <tbody>
            ${renderOTC()}
        </tbody>
    </table>

    <h2>Bandages, Braces or Other Medical Supplies</h2>
    <table>
        <thead>
            <tr>
                <th>Item Purchased</th>
                <th>Date Purchased</th>
                <th>Was this Prescribed?</th>
                <th>Healthcare Provider Name</th>
                <th>Paid Amount</th>
                <th>Seller's Name</th>
            </tr>
        </thead>
        <tbody>
            ${renderSupplies()}
        </tbody>
    </table>

    <h2>Parking for Medical Appointments</h2>
    <table>
        <thead>
            <tr>
                <th>Address of Healthcare Provider/Medical Facility</th>
                <th>Date</th>
                <th>Paid Amount</th>
                <th>Meter Used?</th>
                <th>Meter Number</th>
            </tr>
        </thead>
        <tbody>
            ${renderParking()}
        </tbody>
    </table>

    <h2>Mileage to Medical Appointments</h2>
    <p class="note">
        The WCB will generally reimburse only those transportation costs which are in excess of costs that would be
        incurred by the worker while travelling to and from work.
    </p>
    <table>
        <thead>
            <tr>
                <th>Appointment Date</th>
                <th>Address of Healthcare Provider/Medical Facility</th>
                <th>Address of Workplace</th>
                <th>Number of km (Round Trip)</th>
            </tr>
        </thead>
        <tbody>
            ${renderMileage()}
        </tbody>
    </table>

    <div class="claim-no">Claim No. ${data.claimNo}</div>

</div>


<div class="page page-break">

    ${topMetaStacked(2, 2)}

    <h2>Bus or Taxi Fare for Medical Appointments*</h2>
    <p class="note">
        *Note: Pre-approval is required from your WCB representative to claim taxi fare(s).
    </p>

    <table>
        <thead>
            <tr>
                <th>Appointment Date</th>
                <th>Address of Starting Point</th>
                <th>Address of Healthcare Provider/Medical Facility</th>
                <th>Bus or Taxi<br>(indicate one)</th>
                <th>Total Fare Paid</th>
            </tr>
        </thead>
        <tbody>
            ${renderTransport()}
        </tbody>
    </table>

    <p class="small-text">
        I understand that the <a href="#">Privacy Notice</a> applies to the personal information collected in this document.
    </p>

    ${footer(2, 2)}

</div>

`;
