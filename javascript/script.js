const desc = document.getElementById("desc");
const sev = document.getElementById("sev");
const selectedSev = sev.options[sev.selectedIndex].text;
const assign = document.getElementById("assign");
const output = document.getElementById("output");


addBtn.onclick = function () {
    const key1 = "Description";
    const decription = desc.value;

    const key2 = "Severity";
    const severity = sev.value;

    const key3 = "Assigned";
    const assigned = assign.value;

    // console.log(key1);
    // console.log(decription);

    // console.log(key2);
    // console.log(severity);

    // console.log(key3);
    // console.log(assigned);

    
};

