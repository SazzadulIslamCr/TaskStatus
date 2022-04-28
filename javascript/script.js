const desc = document.getElementById("desc");
const sev = document.getElementById("sev");
const selectedSev = sev.options[sev.selectedIndex].text;
const assign = document.getElementById("assign");



var details = [];
var data ;

const createCard = () => {
    let database = JSON.parse(localStorage.getItem('info'));

    const container = document.getElementById('showData');

    
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';

    // Construct card content
    const content = `
    <div class="card data_card" id="dataCard-${database[database.length-1].id}">
        <div class="card-body" style = "margin: 5px">
            <h6 bottom: 10px">Unique ID: ${database[database.length-1].id}</h6>
            <p class="card bg-primary" style="width:50px;height=20px;font-size: 0.575em;text-align: center; color: white" id="stat">${data[data.length-1].statusKey}</p>
            <h3 class="card-title">${database[database.length-1].descKey}</h3>
            <h5 class="card-text"><i class="bi bi-stopwatch"></i>  ${database[database.length-1].sevKey}</h5>
            <h5 class="card-text"><i class="bi bi-person-fill"></i>  ${database[database.length-1].asKey}</h5>
            <input class="btn btn-warning" type="button" onclick="closeInfo('${database[database.length-1].id}')" name="close" id="closeBtn" value="Close">
            <input class="btn btn-danger" style="margin-left: 1em;"type="button" onclick="deleteInfo('${database[database.length-1].id}')" name="delete" id="deleteBtn" value="Delete">
        </div>
    </div>
    `;

    // Append newyly created card element to the container
    container.innerHTML += content;
    
}
const deleteInfo=(deleteId)=>{
    let data = JSON.parse(localStorage.getItem('info'));
    for (let i=0;i<data.length;i++){
        if (data[i].id === deleteId){
            data.splice(i,1);
        }
    }
    localStorage.setItem('info', JSON.stringify(data));
    const del = document.getElementById('dataCard-'+deleteId);
    del.remove();
}
const closeInfo=(closeId)=>{
    let data = JSON.parse(localStorage.getItem('info'));
    for (let i=0;i<data.length;i++){
        if (data[i].id === closeId){
            data[i].statusKey = "Close";
        }
    }
    localStorage.setItem('info', JSON.stringify(data));
    const cls = document.getElementById('dataCard-'+closeId);
    
    cls.children[0].children[1].innerHTML = "Closed";
    //console.log(cls.getElementById('stat'));
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

        const status = "Open";

        let addObj = {
            id : uId,
            statusKey: status,
            descKey: description,
            sevKey: severity,
            asKey: assigned
        };

        details.push(addObj);
        
        localStorage.setItem('info', JSON.stringify(details));

        data = JSON.parse(localStorage.getItem('info'));

        createCard();
    }
    else {
        alert("Fill up the required field!!");
    }
};


        
