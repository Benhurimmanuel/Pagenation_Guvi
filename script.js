fetch(
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    maindata = data;
    let numOfPages = maindata.length / 10;
    trow(0, 10);

    //  printing pagenation UI
    for (j = 1; j <= numOfPages; j++) {
      let pagenum = document.createElement("button");
      pagenum.innerHTML = j;
      pagenum.setAttribute("onclick", "set(this.value)");
      pagenum.setAttribute("value", j - 1);
      pagenum.setAttribute("class", "btn btn-danger btn-sm m-1");

      let page = document.getElementById("page");
      page.append(pagenum);

      document.body.append(page);
    }
  });

var maindata;

// creating div for table and pagenation seperately
let div = document.createElement("div");
div.setAttribute("id", "tablediv");
div.setAttribute("class", " ");
let pagediv = document.createElement("div");
pagediv.setAttribute("id", "page");
pagediv.setAttribute("class", "offset-4 mt-5");

// creating container and rows
let container = document.createElement("div");
container.setAttribute("class", "container");
let rows = document.createElement("div");
rows.setAttribute("class", "row");
let col = document.createElement("div");
col.setAttribute("class", "offset-3 col-6");
col.append(div, pagediv);
rows.append(col);
container.append(rows);
document.body.append(container);

// creating table and thead
function trow(start, end) {
  let newdiv = document.getElementById("tablediv");
  let table = document.createElement("table");
  table.setAttribute("id", "tab");
  table.setAttribute("class", "mt-5 table table-bordered table-hover");
  let trow = document.createElement("tr");
  let thead1 = document.createElement("th");
  thead1.innerHTML = "ID";
  let thead2 = document.createElement("th");
  thead2.innerHTML = "Name";
  let thead3 = document.createElement("th");
  thead3.innerHTML = "Email Id";
  trow.append(thead1, thead2, thead3);
  table.append(trow);
  newdiv.append(table);
  let row = table.insertRow(-1);

  // Segmenting data into parts

  temparray = maindata.slice(start, end);

  //   printing part data as table
  for (i in temparray) {
    var cell_id = row.insertCell(-1);
    var cell_name = row.insertCell(-1);
    var cell_email = row.insertCell(-1);
    row = table.insertRow(-1);
    cell_name.innerHTML = temparray[i].name;
    cell_email.innerHTML = temparray[i].email;
    cell_id.innerHTML = temparray[i].id;
  }
}

// creating new table on page button click
function set(clickedbtn) {
  //   console.log(clickedbtn * 10, (+clickedbtn + 1) * 10);
  delrow();
  trow(clickedbtn * 10, (+clickedbtn + 1) * 10);
}

// deleting old table on page buton click
function delrow() {
  document.getElementById("tab").remove();
}
