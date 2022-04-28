const desc = document.getElementById("desc");
const sev = document.getElementById("sev");
const selectedSev = sev.options[sev.selectedIndex].text;
const assign = document.getElementById("assign");



var details = [];
var data ;

const createCard = (data) => {
    const container = document.getElementById('showData');

    
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';

    // Construct card content
    const content = `
    <div class="card custom_card" id="dataCard">
        <div class="card-body">
            <span>Unique ID:</span>
            <h6 style="text-align:right; bottom: 10px">${data[data.length-1].id}</h6>
            <h6>Close/Open</h6>
            <h3 class="card-title">${data[data.length-1].descKey}</h3>
            <p class="card-text">${data[data.length-1].sevKey}</p>
            <p class="card-text">${data[data.length-1].asKey}</p>
            <input class="btn btn-warning" type="button" name="close" id="closeBtn" value="Close">
            <input class="btn btn-danger" style="margin-left: 1em;"type="button" name="close" id="closeBtn" value="Delete">
        </div>
    </div>
    `;

    // Append newyly created card element to the container
    container.innerHTML += content;
    
}




//generate random unique ID
let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

addBtn.onclick = () => {
    if (desc.value !== "" && assign.value !== ""){
        const uId = guid();

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

        data = JSON.parse(localStorage.getItem('info'));

        createCard(data);
        //sendData(data);

        
    }
    else {
        alert("Fill up the required field!!");
    }
};
// const sendData = (data) => {
//     document.getElementById('showData').innerHTML += data[data.length-1].id+"-"
//         +data[data.length-1].descKey+"-"
//         +data[data.length-1].asKey+"-"
//         +data[data.length-1].sevKey+"<br>";
// }


        
