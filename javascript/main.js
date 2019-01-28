document.querySelector("#restuarantLookupButton").addEventListener("click", getRestaurantFromCuisine)

    // function to clear DOM everytime button is clicked. also clears array list
    const bigRedDeleteButton = (HTMLsection, array) => {
        let clearNode = document.querySelector(HTMLsection)
        while (clearNode.firstChild) {
            clearNode.removeChild(clearNode.firstChild)
            array.splice(0, array.length)
        }
    }