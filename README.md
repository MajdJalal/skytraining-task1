**This project includes three html pages**<br>
-home.html
-profile.html
-vacation-requests.html
And one Javascript file that adds functionality to the three pages <br>
I chose one JS file as there is a lot of common functionalities among the html pages, which in result a one JS file would reduce code redunduncy.
<br>
**HOME PAGE:**
here we show the emplyee basic data, and also you can view the profile of the current employee by clicking on view profile.<br>
you can see the latest news(fake data), i made the news as a slider that slides each  few seconds on its own.<br>
also at the end of this page there is a  'vacation-requests' section where it shows only three requests (request for all emplyees, not the current one only), and there is a **search functionality** 
that allows you to 
search among all request (not only the three shown), **the search is based on the 'employee-name' and it is case-insesetive**, but you must enter the full name, for having an exact match.
<br>
**Profile Page:**
shows exact statistic and history of the employee and also the vacation requests(made it static data, not driven from the data in the vacation requests page).
when **clicking on 'view more'** you head to all of the vacation requests avaiable for all employees.
<br>
**Vacation-Requests Page:**
show all vacation requests for all employees, with a **paging functionality** where data is divided across three pages that you can move between, 
also added the **search functionality and the selection functionality** where when checked all emplyess are surrounded by a border and you can also uncheck specific cards then.
<br>

**The NavBar is dynamically loaded in three pages**, where JS **detects the page we are in based on the url**, and load the navbar tag in the html of this page...the navbar tag is stored in a variable inside the JS file .<br>
in the NavBar you can move betwen pages by clicking on the page number, also the currently clicked page number is  marked by a white back-ground.

<br>
The Styling of the pages is all done using Bootstrap.
All Data is static , stored in a list in the javascript file.
**All three pages are responsive to different window sizes.**


