# IT103P-PrelimExam
 Our Preliminary Examination in IT103P : Web Progamming
 
INSTRUCTION:
 
 Required Features: 

- A shopping cart type functionality where I could see the food I selected.

- A way to add items to the cart.

- A way to remove items off the cart.

- Price per individual item must be shown too.

- At least 10 items.


Notes: 

Do not explicitly copy GrabFood or any existing food delivery site. The branding, the design, and the food items are totally up to you. Make it unique. :) 

Tips:

The way to implement this is pretty straightforward. 
What you need to have is a button for each food item. 
For each of those buttons, simply add an onclick function like so: <button onclick="addItemToCart('fries', '60')">Add Fries</button>
Then create the addItemToCart() function which will receive the values in your Javascript file, where you will add the item to the shopping cart list being displayed in the page. You can use the document.getElementById() function for this.
