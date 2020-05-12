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
        
    })
}


handleTask()