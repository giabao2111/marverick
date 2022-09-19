const name_item = document.querySelectorAll('.name_item'); //h3
const dt = document.querySelectorAll('.dt');    // chua data-item
const fillter_button = document.querySelectorAll('#fillter_button .dropdown-item');  //a href
const h4_price = document.querySelectorAll('h4_price');
//  filter
Array.from(fillter_button).forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();

        for (let i = 0; i < fillter_button.length; i++) {
            fillter_button[i].classList.remove('active');
        }

        this.classList.add('active');
        console.log("element : " +element)

        let name_filter = element.dataset.fillter;
        console.log("name filter : "+name_filter)

        Array.from(dt).forEach(function (ele) {
            console.log(" ele : " +ele);
            if (ele.dataset.item === name_filter || name_filter === 'all') {
                ele.style.display = 'block';
                console.log(ele.dataset.item);
                //alert("1")
            }
            else {
                ele.style.display = 'none';
                //alert("2")
            }
        })
    })

});
