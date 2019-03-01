window.onload = function () {

    //day
    var select = document.getElementById("selectDay");
    var tel1 = "";
    var x = "";
    for (x = 1; x <= 31; x++) {
        tel1 += x + " ";
    }
    var option0 = tel1.split(" ");
    var options = option0.slice(0, 31);

    for (var x = 0; x < options.length; x++) {
        var opt = options[x];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
    tel1 = "";
    x = "";

    //month
    var monthArray = new Array();
    monthArray[0] = "January";
    monthArray[1] = "February";
    monthArray[2] = "March";
    monthArray[3] = "April";
    monthArray[4] = "May";
    monthArray[5] = "June";
    monthArray[6] = "July";
    monthArray[7] = "August";
    monthArray[8] = "September";
    monthArray[9] = "October";
    monthArray[10] = "November";
    monthArray[11] = "December";
    for (m = 0; m <= 11; m++) {
        var optn = document.createElement("option");
        optn.text = monthArray[m];
        document.getElementById('selectMonth').options.add(optn);
    }


    //year
    var select = document.getElementById("selectYear");
    var tel2 = "";
    var option0 = "";
    var i = "";
    var curYear1 = ((new Date()).getFullYear());
    var curYear2 = (curYear1 - 100);

    for (i = curYear1; i > curYear2; i--) {
        tel2 += i + " ";
        option0 = tel2.split(" ");
    }
    for (i = 0; i < option0.length; i++) {
        var opt = option0[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }


    //lees velden uit
    var index = 1;
    var list = document.querySelector("#divResult")

    document.getElementById('btnKnop1').onclick = function () {

        var clientNameInput = document.querySelector("#clientName");
        var birthdayDayInput = document.querySelector("#selectDay");
        var birthdayMonthInput = document.querySelector("#selectMonth");
        var birthdayYearInput = document.querySelector("#selectYear");
        var bm = 0;
        switch (birthdayMonthInput.value) {
            case "January":
                bm = "01";
                break;

            case "February":
                bm = "02";
                break;

            case "March":
                bm = "03";
                break;

            case "April":
                bm = "04";
                break;

            case "May":
                bm = "05";
                break;

            case "June":
                bm = "06";
                break;

            case "July":
                bm = "07";
                break;

            case "August":
                bm = "08";
                break;

            case "September":
                bm = "09";
                break;

            case "October":
                bm = "10";
                break;

            case "November":
                bm = "11";
                break;

            case "December":
                bm = "12";
                break;
        }
      

        var birthdayDay = birthdayDayInput.value;
        var birthdayYear = birthdayYearInput.value;
        var birthday = birthdayDay + "/" + bm + "/" + birthdayYear;
        var clientName = clientNameInput.value;



        // 1. maak nieuw element.
        var newElement = document.createElement('div');
        newElement.id = 'div' + index++;
        genderRadios = document.getElementsByName("gender");
        if (
            genderRadios[0].checked) {
            newElement.className = 'newItem male'
        } else if (
            genderRadios[1].checked) {
            newElement.className = 'newItem female'
        } else if (
            genderRadios[2].checked) {
            newElement.className = 'newItem other'
        }


        var new_ul = document.createElement('ul');
        var new_li1 = document.createElement('li');
        new_li1.className = 'name';
        var new_li2 = document.createElement('li');
        new_li2.className = 'date';

        // 2. maak nieuwe textnode op basis van tekst in het tekstveld.
        var node = birthday;
        var newNode = document.createTextNode(node);
        var node2 = clientName;
        var node3 = clientName.toUpperCase();
        var newNode2 = document.createTextNode(node3);

        // 3. Voeg de tekst toe aan het nieuwe element.
        new_li1.appendChild(newNode2);
        new_li2.appendChild(newNode);

        // 4. Toon in pagina.				
        list.appendChild(newElement);
        newElement.appendChild(new_ul);
        new_ul.appendChild(new_li2);
        new_ul.appendChild(new_li1);

        return false;
    }
}