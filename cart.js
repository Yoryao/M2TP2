
        //array with original items list.
        var productsName = [
            {
                name: "harina",
                price: 35
            }, 
            {
                name: "pan",
                price: 25
            }, 
            {
                name: "papa",
                price: 52
            },
            {
                name: "palta",
                price: 55
            }, 
            {
                name: "fideos",
                price: 85
            }, 
            {
                name: "aceite",
                price: 35
            }, 
            {
                name: "sopa",
                price: 86
            }, 
            {
                name: "mermelada",
                price: 108
            }, 
            {
                name: "porotos",
                price: 69
            }, 
            {
                name: "lentejas",
                price: 85
            }, 
            {
                name: "mandarina",
                price: 43
            }, 
            {
                name: "banana",
                price: 79
            }, 
            {
                name: "leche de almendras",
                price: 145
             },
            {
                name: "papel higienico",
                price: 147
            }, 
            {
                name: "lavandina",
                price: 55
            }, 
            {
                name: "alcohol en gel",
                price: 123
             }, 
            {
                name: "shampoo",
                price: 400
            }, 
            {
                name: "arroz",
                price: 66
            }, 
            {
                name: "harina",
                price: 35
            }, 
            {
                name: "salsa de tomates",
                price: 35
             }, ];

        //array where to push selected items.
        var cartProductos = [];
                 
        //function for create de items list.
        function createTable() {
                 
            //loop to create row by row, with content from the first array.
            for ( let i = 0; i < productsName.length; i++){
            
                var myTbody = document.getElementById("tbody");
                var row = document.createElement("tr");
               
                var cell1 = document.createElement("td");
                var cell1Text = document.createTextNode(productsName[i].name);
                cell1.appendChild(cell1Text);
                row.appendChild(cell1);

                var cell2 = document.createElement("td");
                var cell2Text = document.createTextNode(productsName[i].price);
                cell2.appendChild(cell2Text);
                row.appendChild(cell2);
               
                var cell3 = document.createElement("td");
                var cell3Link = document.createElement("a");
                cell3Link.textContent = "Add";
                cell3Link.value = i;
                cell3Link.id = "product" + i;
                cell3Link.href = "#";
                cell3.appendChild(cell3Link);
                row.appendChild(cell3);
                
            table.appendChild(row);
            }  

        //perform the add event.
        select();
        }

        //function to perform the add event.
        function select(){
    
        //a loop that get the clicked item and put into cart addToCart();
        for(let i=0; i<productsName.length; i++){
            //get an element and if clicked, get the value, will be index.
            document.getElementById("product"+i).addEventListener("click", function(i) {
                
                //with the value, perform addToCart();
                addToCart(i.target.value);
                console.log(cartProductos);
            });
        }
    
        //get the buybutton and when click, perform the sale.
        document.getElementById("btnBuy").addEventListener("click", function(event) {
            checkout();
            event.preventDefault();    
        });
    
        document.getElementById("btnClr").addEventListener("click", function(event) {
            window.location.href="index.html";    
        });
    }
            // put the items in the cart list.
            function addToCart(pos){
                cartProductos.push(productsName[pos]);
                 // console.log(cartProductos + "Ok");
            };

        //creates the initial table.
        createTable();
          
    //perform the sale form the selected item list.            
    function checkout(){
        var total=0;
        var items=0;
        var row,col;
        var ticket=document.createElement("table");    
        var back=document.createElement("button");
        //titulo.textContent="Total a Pagar";
        //titulo.id="comprados";
        ticket.id="ticketId";
        back.id="btnback";
        back.textContent="back";

        for(let i=0; i<cartProductos.length; i++){
        row=document.createElement("tr");
        cell1=document.createElement("td");
        cell1.textContent=cartProductos[i].name; 
        row.appendChild(cell1);       
        cell2=document.createElement("td");
        cell2.textContent=cartProductos[i].price;
        row.appendChild(cell2);       
        total=total+cartProductos[i].price;
        items=cartProductos.length;
        ticket.appendChild(row);
        }

        row=document.createElement("tr");
        cell1=document.createElement("td");
        cell1.textContent="amount:"; 
        row.appendChild(cell1);       
        cell2=document.createElement("td");
        cell2.textContent="$"+total;
        row.appendChild(cell2);
        cell3=document.createElement("td");
        cell3.textContent="Usted compro" + items + "productos";
        row.appendChild(cell3);       

        ticket.appendChild(row);

        document.body.appendChild(ticket);
        document.body.appendChild(back);

        document.getElementById("btnback").addEventListener("click", function(event) {
            window.location.href="index.html";    
        });

    }