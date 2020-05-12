function handleTask(){
    // Grab the form element
    // assign an event listener to the form element
    $('#js-shopping-list-form').on('submit', function(e){
        // When form is submitted, we must prevent submission of the form
        e.preventDefault();
        // grab the user input value
        const userInput = $('#shopping-list-entry').val();
        console.log(userInput);
        // add the user input value to the UL which we must grab fist
        // append the userInput to the DOM at the end of the list.
        $('.shopping-list').append(
            `<li>
        <span class="shopping-item">${userInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
        )
        // once the userInput is set to the UL, clear the input value
        $("#shopping-list-entry").val("");
        // grab the UL
        // add click event listern to the ul
        // make sure click only occures within button toggle class
        // this refers to the element that was clicked, closest finds the element closest
        $(".shopping-list").on('click',".shopping-item-controls", function(e){
            $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
        })
        // grab the UL
        // once grabbed add a click event to the ul 
        // make sure click specifies the delete button
        $(".shopping-list").on("click", ".shopping-item-delete", function(e){
            $(this).closest("li").remove();
        })
        
    })
}


handleTask()