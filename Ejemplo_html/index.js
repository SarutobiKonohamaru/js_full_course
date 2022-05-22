function createList() {
    var containerId = "itemsContainer"
    var container = document.getElementById(containerId)
    var items = [
        {
            id: 1,
            name: "Item 1",
            cost: 140
        },
        {
            id: 2,
            name: "Item 2",
            cost: 100
        },
        {
            id: 3,
            name: "Item 3",
            cost: 200
        }
    ]
    
    for (var index = 0; index < items.length; index++) {
        var element = items[index];
        var itemList = document.createElement("li")
        itemList.innerText = `${element.name} - (${element.cost} $)`
        itemList.setAttribute("id", element.id)
        container.appendChild(itemList)
    } 
}

createList()

var mostrarMayor = () => {
    alert("Alert")
}