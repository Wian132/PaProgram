"use strict";

function previewFile() {
    const content = document.querySelector(".content");
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();

    reader.addEventListener(
        "load",
        () => {
            //display the txt file
            let pagesNr = reader.result.indexOf("Page");
            pagesNr = reader.result.substring(pagesNr + 30, pagesNr + 19); // Looks for Page 1 of x and puts x into pagesNr (for big for loop length)
            pagesNr = pagesNr.trim();
            let myArray = reader.result;
            let start2, endingpoint;
            let arraytoprint = [];
            let invoiceString = "";
            ////////////////////////////////////////////// arrays to be written  find a more effective way to do this , add html input for new codes

            const cookingOil = ["507363", "517938"];
            const packaging = ["519020",
                "511822",
                "507372",
                "507373",
                "507374",
                "507375",
                "507376",
                "507377",
                "507390",
                "507400",
                "507401",
                "509856",
                "510074",
                "510075",
                "510096",
                "510100",
                "510102",
                "510125",
                "510127",
                "510215",
                "512086",
                "512087",
                "512088",
                "512089",
                "513045",
                "513046",
                "513048",
                "513047",
                "515889",
                "515934",
                "517994",
                "517993",
				"518303",
				"519299",
				"519300"];
            const breadingS = ["507406", "517049"];
            const breadingH = ["507407", "517048"];
            const bread = ["515750", "515751", "515752", "515753", "518641"];
            const spices = [
                "512781",
                "512839",
                "512840",
                "512841",
                "512842",
                "513369",
                "517439",
                "517460",
                "517461",
                "517837",
            ];
            const other = [
                "510112",
                "510116",
                "510135",
                "511009",
                "512852",
                "516385",
                "507417",
                "507661",
                "517599",
                "518038",
                "518439",
				"518972",
            ];
            const cleaning = [
                "510117",
                "510118",
                "510522",
                "514129",
                "514130",
                "514131",
                "514132",
                "514133",
                "514134",
                "514135",
                "514136",
                "514137",
                "514138",
                "514139",
                "514140",
                "514141",
                "514142",
                "514143",
                "514144",
                "514145",
                "514150",
                "514151",
                "514152",
                "514153",
                "514176",
                "514600",
                "514601",
                "514603",
                "514604",
                "514605",
                "514607",
                "514606",
                "514608",
                "514609",
                "514610",
                "514611",
                "514612",
                "514613",
                "514614",
                "514615",
                "514616",
				"514618",
                "514630",
                "514631",
                "514632",
                "514633",
                "514634",
                "514635",
                "514636",
                "514637",
                "514638",
                "514639",
				"514640",
                "514641",
                "514643",
                "514644",
                "514951",
                "515134",
                "515135",
				"515136",
                "515903",
                "515904",
                "510119",
                "514154",
                "514155",
                "514156",
                "514157",
                "514158",
                "514617",
                "516390",
                "516840",
                "516841",
                "516842",
                "517963",
                "517964",
                "517965",
                "518001"
            ];
            const drinks = ["517506", "517507"];
            const chicken = [
                "5604",
                "5669",
                "6654",
                "20183",
                "21413",
                "40240",
                "40834",
                "41758",
                "41759",
                "41760",
                "41761",
                "41952",
                "41324",
                "42541",
            ];
            const icecream = [
                "510077",
                "508294",
                "516156",
                "516157",
                "516158",
                "516200",
                "516201",
                "510114"];
            const chips = ["516403", "517116", "518709"];
            const crates = ["CHEP05"];
            const milk = ["507405", "517070"];
            const stat = ["510071", "510072", "510073", "517616", "517617", "517618", "517729"];
            ///////////////////////////////////////////////////////////////
            let cookingOilTotal = 0;
            let packagingTotal = 0;
            let breadingSTotal = 0;
            let breadingHTotal = 0;
            let breadTotal = 0;
            let spicesTotal = 0;
            let otherTotal = 0;
            let cleaningTotal = 0;
            let drinksTotal = 0;
            let chickenTotal = 0;
            let icecreamTotal = 0;
            let chipsTotal = 0;
            let cratesTotal = 0;
            let milkTotal = 0;
            let statTotal = 0;
            ///////////////////////////////////////////////////////////////////////////////////////
            for (let b = 0; b <= pagesNr; b++) {
                let splitPagesStrt = myArray.indexOf("INVOICE");
                let splitPagesEnd = myArray.indexOf("Mask");
                let splitPages = myArray.substring(splitPagesStrt, splitPagesEnd + 30);
                if (splitPages.indexOf("Trip") != "-1") {
                    endingpoint = splitPages.indexOf("Trip");
                } else {
                    endingpoint = splitPages.indexOf("Mask");
                }
                let startingpoint = splitPages.indexOf("Inclusive");
                let substring1 = splitPages.substring(
                    startingpoint + 17,
                    endingpoint - 10
                );
                if (b === 0) {
                    let invoice1 = splitPages.indexOf("CHICKEN");
                    let invoice2 = splitPages.indexOf("NUMBER");
                    invoiceString = splitPages.substring(invoice2, invoice1 + 30);

                }
                let lines = substring1.split(/\r\n|\r|\n/).length;
                for (let i = 0; i <= lines - 2; i++) {
                    let substring = substring1.trim();
                    let arrstring = substring.split("\n");
                    if (!arrstring[i]) break;
                    if (arrstring[i].indexOf("CLC") != "-1") {
                        let CodeEnd = arrstring[i].indexOf("CLC");
                        start2 = arrstring[i].substring(CodeEnd - 1, 0);
                    } else if (arrstring[i].indexOf("CHEP05") != "-1") {
                        start2 = "CHEP05";
                    } else {
                        break;
                    }

                    let result = arrstring[i].length;
                    let space = arrstring[i].lastIndexOf(" ");
                    arraytoprint.push(start2);
                    arraytoprint.push(arrstring[i].substring(space + 1, result));
                    myArray = myArray.replace(splitPages, "");
                }
            }
            for (let k = 0; k <= arraytoprint.length; k = k + 2) {
                for (let i = 0; i < cookingOil.length; i++) {
                    if (parseFloat(arraytoprint[k]) == cookingOil[i]) {
                        cookingOilTotal = cookingOilTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < packaging.length; i++) {
                    if (parseFloat(arraytoprint[k]) == packaging[i]) {
                        packagingTotal = packagingTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < breadingS.length; i++) {
                    if (parseFloat(arraytoprint[k]) == breadingS[i]) {
                        breadingSTotal = breadingSTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < breadingH.length; i++) {
                    if (parseFloat(arraytoprint[k]) == breadingH[i]) {
                        breadingHTotal = breadingHTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < bread.length; i++) {
                    if (parseFloat(arraytoprint[k]) == bread[i]) {
                        breadTotal = breadTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < spices.length; i++) {
                    if (parseFloat(arraytoprint[k]) == spices[i]) {
                        spicesTotal = spicesTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < other.length; i++) {
                    if (parseFloat(arraytoprint[k]) == other[i]) {
                        otherTotal = otherTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < cleaning.length; i++) {
                    if (parseFloat(arraytoprint[k]) == cleaning[i]) {
                        cleaningTotal = cleaningTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < drinks.length; i++) {
                    if (parseFloat(arraytoprint[k]) == drinks[i]) {
                        drinksTotal = drinksTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < chicken.length; i++) {
                    if (parseFloat(arraytoprint[k]) == chicken[i]) {
                        chickenTotal = chickenTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < icecream.length; i++) {
                    if (parseFloat(arraytoprint[k]) == icecream[i]) {
                        icecreamTotal = icecreamTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < chips.length; i++) {
                    if (parseFloat(arraytoprint[k]) == chips[i]) {
                        chipsTotal = chipsTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < milk.length; i++) {
                    if (parseFloat(arraytoprint[k]) == milk[i]) {
                        milkTotal = milkTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < crates.length; i++) {
                    if (arraytoprint[k] == crates[i]) {
                        cratesTotal = cratesTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }
                for (let i = 0; i < stat.length; i++) {
                    if (parseFloat(arraytoprint[k]) == stat[i]) {
                        statTotal = statTotal + parseFloat(arraytoprint[k + 1]);
                    }
                }

            }
            let BigTotal =
                chickenTotal +
                chipsTotal +
                cookingOilTotal +
                drinksTotal +
                packagingTotal +
                otherTotal +
                breadTotal +
                icecreamTotal +
                spicesTotal +
                breadingSTotal +
                breadingHTotal +
                statTotal +
                milkTotal +
                cratesTotal +
                cleaningTotal;

            document.write(`<br><br><br><br><br><br><br><br>INVOICE${invoiceString}<br><br>
        Total :${Math.round(BigTotal * 100) / 100} <br>\t chicken: ${Math.round(chickenTotal * 100) / 100
                } <br>\t chips: ${Math.round(chipsTotal * 100) / 100} <br>\t cookingOil: ${Math.round(cookingOilTotal * 100) / 100
                } <br>\t drinks: ${Math.round(drinksTotal * 100) / 100
                } <br>\t packaging : ${Math.round(packagingTotal * 100) / 100
                } <br>\t other : ${Math.round(otherTotal * 100) / 100} <br>\t bread: ${Math.round(breadTotal * 100) / 100
                }<br> icecream : ${Math.round(icecreamTotal * 100) / 100} <br>\t spices: ${Math.round(spicesTotal * 100) / 100
                } <br>\t breadingS: ${Math.round(breadingSTotal * 100) / 100
                } <br>\t breadingH: ${Math.round(breadingHTotal * 100) / 100
                } <br>\t stationary: ${Math.round(statTotal * 100) / 100} <br>\t milk: ${Math.round(milkTotal * 100) / 100
                } <br>\t crates: ${Math.round(cratesTotal * 100) / 100} <br>\t cleaning: ${Math.round(cleaningTotal * 100) / 100}`);



            // Create a new workbook
            const workbook = XLSX.utils.book_new();

            // Create an array of data to display line by line with proper formatting
            const dataToDisplay = [
                `INVOICE: ${invoiceString}`,
                `Total: ${Math.round(BigTotal * 100) / 100}`,
                `Chicken: ${Math.round(chickenTotal * 100) / 100}`,
                `Chips: ${Math.round(chipsTotal * 100) / 100}`,
                `Cooking Oil: ${Math.round(cookingOilTotal * 100) / 100}`,
                `Drinks: ${Math.round(drinksTotal * 100) / 100}`,
                `Packaging: ${Math.round(packagingTotal * 100) / 100}`,
                `Other: ${Math.round(otherTotal * 100) / 100}`,
                `Bread: ${Math.round(breadTotal * 100) / 100}`,
                `Ice Cream: ${Math.round(icecreamTotal * 100) / 100}`,
                `Spices: ${Math.round(spicesTotal * 100) / 100}`,
                `BreadingS: ${Math.round(breadingSTotal * 100) / 100}`,
                `BreadingH: ${Math.round(breadingHTotal * 100) / 100}`,
                `Stationary: ${Math.round(statTotal * 100) / 100}`,
                `Milk: ${Math.round(milkTotal * 100) / 100}`,
                `Crates: ${Math.round(cratesTotal * 100) / 100}`,
                `Cleaning: ${Math.round(cleaningTotal * 100) / 100}`,
            ];
            // Create a new workbook
            let invoiceSplit = invoiceString.trim().split(" ");
            console.log(invoiceSplit);
            // Remove all elements with a value of " "
           // array = array.filter(element => element !== " ");
            invoiceSplit = invoiceSplit.filter(element => element !== " " && element !== "");

            let invoiceNumber, invoiceDate, invoiceLocation;
            for (let i = 0; i < invoiceSplit.length; i++) {
                if (invoiceSplit[i] == " ") {
                    invoiceSplit[i].remove;
                }

            }

            for (let i = 0; i < invoiceSplit.length; i++) {
                const currentToken = invoiceSplit[i].trim();
                console.log("pos " + i + " " + currentToken);
				
                // Check for invoice number (assuming it's a numeric value)
               /* if (!isNaN(currentToken)) {
                    invoiceNumber = currentToken;
                }
				*/
				if (i==1){
				invoiceNumber = currentToken;
				}

			

                // Check for date (you may need to adapt this based on the date format in your invoices)
                if (currentToken.match(/\d{2}.\d{2}.\d{4}/)) {
                    invoiceDate = currentToken;
                }

                // Check for location (assuming it follows "COS - <Location>")                
                
            }
		
            invoiceLocation = invoiceSplit[invoiceSplit.length - 1];
            console.log("invoiceLocation: " + invoiceLocation);
            console.log("Invoice Number:"+ invoiceNumber);
            console.log("Invoice Date:"+ invoiceDate);
           
            if (invoiceLocation == "MALL") {
                invoiceLocation = "Ingwe";
            } else if (invoiceLocation == "thru") {
                invoiceLocatoin = "fly thru";
            } else if (invoiceLocation == "grove") {
                invoiceLocation = "The Grove";
		    } else if (invoiceLocation.trim() == "2") {
                invoiceLocation = "NELSPRUIT 2";
            } else if (invoiceLocation == null) {
                alert("Could not find an invoice Location");
            }else
                invoiceLocation = invoiceLocation;
            // Get the current date
			 console.log("Invoice Location:", invoiceLocation);
            const currentDate = new Date();
			

            // Get the current month (0-11, where 0 represents January)
            let currentMonth = currentDate.getMonth() + 1; // Adding 1 to make it 1-based

            // Get the current year (4-digit)
            const currentYear = currentDate.getFullYear();

            // Find the last day of the current month
            const lastDayOfMonth = new Date(currentYear, currentMonth, 0);

            // Extract the day, month, and year from the last day of the month
            const lastDay = lastDayOfMonth.getDate();
            const lastMonth = lastDayOfMonth.getMonth() + 1; // Adding 1 to make it 1-based
            const lastYear = lastDayOfMonth.getFullYear();

            console.log(`Current Month: ${currentMonth}`);
            console.log(`Current Year: ${currentYear}`);
            console.log(`Last Day of the Month: ${lastDay}`);
            console.log(`Last Month: ${lastMonth}`);
            console.log(`Last Year: ${lastYear}`);

            let prependCode;
           const lowerCaseLocation = invoiceLocation.toLowerCase();

            switch (lowerCaseLocation) {
                case 'acornhoek':
                    prependCode = "410";
                    break;
                case 'hazyview':
                    prependCode = "370";
                    break;
                case 'grove':
                    prependCode = "350";
                    break;
                case 'plaza':
                    prependCode = "390";
                    break;
                case 'nelspruit 2':
                    prependCode = "400";
                    break;
                case 'ingwe':
                    prependCode = "360"; // Replace with the actual code you want for these locations
                    break;
                default:
                    // Handle any other cases here
                    prependCode = 0; // Default code if no match is found
                    break;
            }
            let periodCode;
			currentMonth = invoiceDate.split('.')[1];
			console.log(currentMonth);
            if (currentMonth == 1) {
                periodCode = 11;
            } else if (currentMonth == 2) {
                periodCode = 12;
            } else if (currentMonth == 3) {
                periodCode = 13;
            } else
                periodCode = currentMonth - 2;
            const worksheetData = [
                ["Header", "", "", "", "VEC", periodCode, invoiceDate.replace('.', '/').replace('.', '/'), invoiceNumber, "Y", 0, "", "", "", "Depot: Nelspruit", "", "", "", "", "", 0,lastDay+"/"+lastMonth+"/"+lastYear ,"","", "Hannelie", 1, "", "DELIVER", "N"],
                ["Detail", (chickenTotal / 1.15).toFixed(2).replace(',', '.'), 1, (chickenTotal / 1.15).toFixed(2).replace(',', '.'), chickenTotal.toFixed(2).replace(',', '.'), "",15, 0, 0, prependCode + "2001", "COS " + invoiceLocation + " - Chicken",6, "", "", "", "", "", ""],
                ["Detail", (chipsTotal / 1.15).toFixed(2).replace(',', '.'), 1, (chipsTotal / 1.15).toFixed(2).replace(',', '.'), chipsTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "2005", "COS " + invoiceLocation + " - Chips", 6, "", "", "", "", "", ""],
                ["Detail", (drinksTotal / 1.15).toFixed(2).replace(',', '.'), 1, (drinksTotal / 1.15).toFixed(2).replace(',', '.'), drinksTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "2010", "COS " + invoiceLocation + "- Cooldrinks", 6, "", "", "", "", "", ""],
                ["Detail", (icecreamTotal / 1.15).toFixed(2).replace(',', '.'), 1, (icecreamTotal / 1.15).toFixed(2).replace(',', '.'), icecreamTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "2015", "COS " + invoiceLocation + " - Soft Serve Ice Cream", 6, "", "", "", "", "", ""],
                ["Detail", cookingOilTotal.toFixed(2).replace(',', '.'), 1, cookingOilTotal.toFixed(2).replace(',', '.'), cookingOilTotal.toFixed(2).replace(',', '.'), "", 3, 0, 0, prependCode + "2020", "COS " + invoiceLocation + " - Oil", 6, "", "", "", "", "", ""],
                ["Detail", (packagingTotal / 1.15).toFixed(2).replace(',', '.'), 1, (packagingTotal / 1.15).toFixed(2).replace(',', '.'), packagingTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "2025", "COS " + invoiceLocation + " - Packaging", 6, "", "", "", "", "", ""],
                ["Detail", (breadTotal / 1.15).toFixed(2).replace(',', '.'), 1, (breadTotal / 1.15).toFixed(2).replace(',', '.'), breadTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "2040", "COS " + invoiceLocation + " - Bread ", 6, "", "", "", "", "", ""],
                ["Detail", (breadingSTotal / 1.15).toFixed(2).replace(',', '.'), 1, (breadingSTotal / 1.15).toFixed(2).replace(',', '.'), breadingSTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "2041", "COS " + invoiceLocation + " - Special Breading", 6, "", "", "", "", "", ""],
                ["Detail", (breadingHTotal / 1.15).toFixed(2).replace(',', '.'), 1, (breadingHTotal / 1.15).toFixed(2).replace(',', '.'), breadingHTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "2042", "COS " + invoiceLocation + " - Soulfire breading", 6, "", "", "", "", "", ""],
                ["Detail", (otherTotal / 1.15).toFixed(2).replace(',', '.'), 1, (otherTotal / 1.15).toFixed(2).replace(',', '.'), otherTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "2045", "COS " + invoiceLocation + " - Other", 6, "", "", "", "", "", ""],
                ["Detail", (spicesTotal / 1.15).toFixed(2).replace(',', '.'), 1, (spicesTotal / 1.15).toFixed(2).replace(',', '.'), spicesTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "2050", "COS " + invoiceLocation + " - Spices", 6, "", "", "", "", "", ""],
                ["Detail", (milkTotal / 1.15).toFixed(2).replace(',', '.'), 1, (milkTotal / 1.15).toFixed(2).replace(',', '.'), milkTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "2051", "COS " + invoiceLocation + " - Special Milk", 6, "", "", "", "", "", ""],
                ["Detail", (cleaningTotal / 1.15).toFixed(2).replace(',', '.'), 1, (cleaningTotal / 1.15).toFixed(2).replace(',', '.'), cleaningTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode+"4015", "Cleaning and Refreshments",6, "", "", "", "", "", ""],
                ["Detail", (cratesTotal / 1.15).toFixed(2).replace(',', '.'), 1, (cratesTotal / 1.15).toFixed(2).replace(',', '.'), cratesTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "4067", "Repair and Maintenance - Crates", 6, "", "", "", "", "", ""],
                ["Detail", (statTotal / 1.15).toFixed(2).replace(',', '.'), 1, (statTotal / 1.15).toFixed(2).replace(',', '.'), statTotal.toFixed(2).replace(',', '.'), "", 15, 0, 0, prependCode + "4080", "Printing and Stationery", 6, "", "", "", "", "", ""],
            ];


            const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

            // Add the worksheet to the workbook
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

            // Save the workbook to a file
            XLSX.writeFile(workbook, 'Data.csv');
        },
        false
    );


    if (file) {
        reader.readAsText(file);
    }
};