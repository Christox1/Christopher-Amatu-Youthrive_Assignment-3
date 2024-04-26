
// Function to add a new item to the list
function addNewItem() {
    var newItem = document.createElement("li");
    newItem.textContent = "New Item";
    newItem.classList.add("list-item");
    
    var itemList = document.getElementById("itemList");
    itemList.appendChild(newItem);
    
    // Change the color of the first item
    var firstItem = document.querySelector(".list-item");
    firstItem.style.color = "red";
  }

  // Add event listener to the button
  document.getElementById("addItemBtn").addEventListener("click", addNewItem);