Hi Conor:

there are a lot of non topic relevant version on the app. So i have just removed the buttons not directing to the "problem"

To get there:

![image](https://github.com/PepeKormendi/DemoMDKApp/assets/98765784/59da56a4-2994-4178-b7a7-326155293879)


any item:
![image](https://github.com/PepeKormendi/DemoMDKApp/assets/98765784/3696210c-3bdf-4589-aea5-8f4b174e9afa)

in the metadata part of the navigation we build the list-like arrey of sections using the template page 
and in every section we place a unvisible item with the key of the given section (as it was a list item key)


Push SalesorderId link:
![image](https://github.com/PepeKormendi/DemoMDKApp/assets/98765784/ab6fb248-83ea-4b2f-b183-8826006739a6)

behind the event we read the invisible  key (itemKey)from the DOM  read the item properties for thet (filtered) and wanna add to the actionBinding
here in this code it is there when one checks with the getActionBinding method

After navigating to the mock page (i didnt fill it with any value since the target reading is the problem:

![image](https://github.com/PepeKormendi/DemoMDKApp/assets/98765784/d17391ef-98d0-46f6-8c3c-225e80e2c393)

the binding remained the same from the first customer list (after pushing the first button from Main page) and was not owerwritten.



