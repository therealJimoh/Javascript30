const checkboxes = document.querySelectorAll('.wrapper input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {

    let inBetween = false;

    if (e.shiftKey && this.checked) {

        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('lets hear it');
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }



    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
