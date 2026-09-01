const report = {
    workerName: "Madeleine Willson",
    claimNo: "20042047",
    appId: "712041",
    submitted: "March 19, 2024 19:21",
    reportDate: "March 15, 2024",

    returnToWork: "I have not returned to work",
    returnDate: "",
    workDuties: "",
    returnToWorkGoing: "Terrible. Testing Testing",
    expectedReturnDate: "",
    returnConcerns: "",

    recovery: "I have not fully recovered from my workplace injury.",
    recoveryComments: "",

    employerContactName: "",
    employerContactDate: "",
    workStatus: "I have not missed time from work",

    painLevel: 7,

    medicalTreatment: false,
    medicalProviderType: "",
    lastTreatmentDate: "",
    lastProvider: "",
    nextTreatmentDate: "",
    nextProvider: "",

    physiotherapy: false,
    physiotherapyFrequency: "",

    homeExercises: false,
    exercises: "",

    medication: false,
    medicationName: "",

    additionalInformation: "No info Testing Testing"
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


function topMeta(page) {
    return `
        <div class="top-meta">
            <div class="meta-left">
                <span>Worker App ID: ${report.appId}</span>
                <span>Submitted: ${report.submitted}</span>
            </div>
            <div>Page ${page} of 3</div>
        </div>
    `;
}


function footer(page) {
    return `
        <div class="footer">
            <span>Worker App ID: ${report.appId} Submitted: ${report.submitted}</span>
            <span>Page ${page} of 3</span>
        </div>
    `;
}


function option(text, selected) {
    return `
        <div class="option">
            <span class="checkbox ${selected ? "checked" : ""}"></span>
            <span class="option-text">${text}</span>
        </div>
    `;
}


function fieldInline(value, placeholder) {
    const text = value || placeholder;
    const cls = value ? "field-inline filled" : "field-inline placeholder";
    return `<span class="${cls}">${text}</span>`;
}


function painScale() {
    let row1 = "";
    let row2 = "";

    for (let i = 1; i <= 5; i++) {
        row1 += `
            <span class="${i === report.painLevel ? "selected" : ""}">${i}</span>
        `;
    }

    for (let i = 6; i <= 10; i++) {
        row2 += `
            <span class="${i === report.painLevel ? "selected" : ""}">${i}</span>
        `;
    }

    return `
        <div class="pain-row">${row1}</div>
        <div class="pain-row">${row2}</div>
    `;
}


document.getElementById("app").innerHTML = `

<!-- PAGE 1 -->

<div class="page">

    ${topMeta(1)}
    ${header()}

    <div class="info">
        <div>
            <strong>Claim No.</strong> ${report.claimNo} WP
        </div>
        <div class="info-right">
            <strong>Worker App ID:</strong> ${report.appId}<br>
            <strong>Submitted:</strong> ${report.submitted}
        </div>
    </div>

    <div class="title">Worker Progress Report</div>

    <div class="report-date">${report.reportDate}</div>

    <p class="intro">
        ${report.workerName} provided the following updates in relation to their claim:
    </p>

    <div class="section">
        <div class="section-title">Return to Work</div>

        <div class="select-one">Select one:</div>

        ${option("I have not returned to work", report.returnToWork === "I have not returned to work")}

        <div class="option">
            <span class="checkbox"></span>
            <span class="option-text">I returned to work on: ${fieldInline(report.returnDate, "Date")}</span>
        </div>

        ${option("Full duties, regular hours", report.workDuties === "Full duties, regular hours")}
        ${option("Full duties, reduced hours", report.workDuties === "Full duties, reduced hours")}
        ${option("Modified duties, regular hours", report.workDuties === "Modified duties, regular hours")}
        ${option("Modified duties, reduced hours", report.workDuties === "Modified duties, reduced hours")}

        <div class="question">My return to work is going:</div>
        <div class="box filled-box">${report.returnToWorkGoing}</div>

        <div class="question">I expect to return to work on:</div>
        <div class="box placeholder-box">Date</div>

        <div class="question">I have the following concerns about returning to work:</div>
        <div class="box empty-box">&nbsp;</div>
    </div>

    <div class="section">
        <div class="section-title">Recovery</div>

        <div class="select-one">Select one:</div>

        ${option(
            "I have not fully recovered from my workplace injury.",
            report.recovery === "I have not fully recovered from my workplace injury."
        )}

        ${option(
            "I have fully recovered from my workplace injury.",
            report.recovery === "I have fully recovered from my workplace injury."
        )}

        <div class="question">I have provided the following comments about my recovery:</div>
        <div class="box empty-box">&nbsp;</div>
    </div>

    <div class="section">
        <div class="section-title">Other</div>

        <div class="question">I was most recently in contact with:</div>
        <div class="contact-line">
            ${fieldInline(report.employerContactName, "(Name of employer contact)")}
            on ${fieldInline(report.employerContactDate, "Date")}
        </div>

        <div class="select-one">Select one:</div>

        ${option("I have not missed time from work", report.workStatus === "I have not missed time from work")}
        ${option("I am working:", report.workStatus === "I am working:")}
    </div>

    ${footer(1)}

</div>


<!-- PAGE 2 -->

<div class="page page-break">

    ${topMeta(2)}

    <div class="question pain-question">
        I rate my current pain/discomfort on a scale of 1-10,
        where 1 is no pain and 10 is severe pain out of 10.
    </div>

    <div class="pain">
        ${painScale()}
    </div>

    <div class="section">
        <div class="select-one">Select one:</div>

        ${option(
            "I am not continuing to receive medical treatment for my workplace injury.",
            !report.medicalTreatment
        )}

        <div class="option">
            <span class="checkbox"></span>
            <span class="option-text">
                I am continuing to receive medical treatment for my workplace injury from:
                ${fieldInline(report.medicalProviderType, "(Medical Provider Type)")}
            </span>
        </div>

        <div class="treatment-line">
            My last medical treatment was from ${fieldInline(report.lastTreatmentDate, "Date")}
            ${fieldInline(report.lastProvider, "(Medical Provider Name)")}
        </div>

        <div class="treatment-line">
            My next medical treatment is from ${fieldInline(report.nextTreatmentDate, "Date")}
            ${fieldInline(report.nextProvider, "(Medical Provider Name)")}
        </div>

        <div class="option">
            <span class="checkbox"></span>
            <span class="option-text">
                I am attending a Chiropractor or Physiotherapist
                ${fieldInline(report.physiotherapyFrequency, "(Frequency)")}
            </span>
        </div>
    </div>

    <div class="section">
        <div class="select-one">Select one:</div>

        ${option("I am not doing home exercises for my workplace injury.", !report.homeExercises)}
        ${option("I am doing home exercises for my workplace injury.", report.homeExercises)}

        <div class="question">List the exercises you are doing:</div>
        <div class="box empty-box">&nbsp;</div>
    </div>

    <div class="section">
        <div class="select-one">Select one:</div>

        ${option("I am not taking medication for my workplace injury.", !report.medication)}

        <div class="option">
            <span class="checkbox"></span>
            <span class="option-text">
                I am taking medication for my workplace injury:
                ${fieldInline(report.medicationName, "(Name of prescribed medication)")}
            </span>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Other Information</div>

        <div class="question">
            I would like to provide the following additional information about my claim/injury:
        </div>

        <div class="box filled-box">${report.additionalInformation}</div>
    </div>

    ${footer(2)}

</div>


<!-- PAGE 3 -->

<div class="page page-break">

    ${topMeta(3)}

    <div class="certification">
        <p>
            I certify that the information given on this form is true, correct and complete to the best of my
            knowledge. I agree to notify the Workers Compensation Board of Manitoba (WCB) immediately once I
            return to any form of work and/or employment. I understand that it is an offence to knowingly make
            a false statement to the WCB. I also understand that it is an offence to withhold information from
            WCB which affects my entitlement to compensation (e.g., full or partial recovery from injury, ability to
            return to work, sources of additional income, etc.). I understand that refusing to co-operate with, or
            follow my treatment, may result in the WCB reducing or suspending my benefits.
            I understand that the <a href="#">Privacy Notice</a> applies to the personal information collected in this document.
        </p>
    </div>

    ${footer(3)}

</div>

`;
