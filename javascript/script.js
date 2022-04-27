const desc = document.getElementById("desc");
const sev = document.getElementById("sev");
const selectedSev = sev.options[sev.selectedIndex].text;
const assign = document.getElementById("assign");

const form = document.getElementById("form");


var details = [];

addBtn.onclick = () => {
    if (desc.value !== "" && assign.value !== ""){
        const uId = guid();
        //console.log(uId);

        const descKey = "Description";
        const description = desc.value;

        const sevKey = "Severity";
        const severity = sev.value;

        const asKey = "Assigned";
        const assigned = assign.value;

        let addObj = {
            id : uId,
            descKey: description,
            sevKey: severity,
            asKey: assigned
        };

        details.push(addObj);
        
        localStorage.setItem('info', JSON.stringify(details));
    }
    else {
        alert("Fill up the required field!!");
    }
    

};

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}