let items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', './asset/logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', './asset/msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', './asset/genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', './asset/jerry.jpg']
]

// Release 0 start
let barang = document.getElementById("listBarang")

function printItem(data){
    let temp = "";
    for(i = 0 ; i < data.length ;i++){
    temp += 
    `<div class ="col-4 mt-2"> 
    <div class="card" style="width: 18rem;">
        <img src="${data[i][4]}" class="card-img-top" height="200px" width="200px" alt="...">
        <div class="card-body">
            <h5 class="card-title" id="itemName">${data[i][1]}</h5>
            <p class="card-text" id="itemDesc">${data[i][3]}</p>
            <p class="card-text">${data
            [i][2]}</p>
            <a href="#" class="btn btn-primary" onclick="inCart()" id="addCart">Tambahkan ke keranjang</a>
        </div>
    </div>
    </div>`
  
}
return barang.innerHTML = temp
}

printItem(items)
// Release 0 end

// release 1 start

function search (keyWord){
    let filteredItem = []
    for(let s=0; s < items.length;s++){
        let item = items[s];
        let itemName = item[1];
        let isMatch = itemName.toLowerCase().includes(keyWord.toLowerCase());

        if(isMatch == true){
            filteredItem.push(item)
        } else(
           document.write("<h1><center>Barang tidak tersedia</center></h1>")
        )
    }
    return filteredItem;
}

let searchForm = document.getElementById("formItem")
searchForm.addEventListener("submit",function(event){
    event.preventDefault();
    let input = document.getElementById("keyword").value

    let result = search(input)
    printItem(result)

})
// release 1 end

// release 2 start
let Cart = document.getElementById("cart");
var cartValue = Cart.value;
function inCart(){
    cartValue++
    Cart.innerHTML = `<i class="fas fa-shopping-cart"></i>${cartValue}</button>`
}

function cartReset(){
    cartValue = 0 
    Cart.innerHTML = `<i class="fas fa-shopping-cart"></i>${cartValue}</button>`
}



