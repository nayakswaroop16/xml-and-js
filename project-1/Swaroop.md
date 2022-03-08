- Added a Form in the HTML
- Form consists of input field, radio buttons, checkboxes, submit button and reset button
- The input field works as a simple search field wherein you can search by any column
- The checkboxes can be used to filter the data by category. The radioboxes can be used to filter rows by price
- I used 3 filter methods to carry out the filtering
- For search, I check if any of the columns contains the search term
- For checkboxes, I check if the category value of the row exists in the categories that were selected by the user
- The radiobox was a little tricky. I had to clean some text from the string and then parse the string as a float value and compare it with the price value of each row
- For reset, we change the windoww.location to window.location.pathname. This means that all params will be cleared and won't be found in URLSearchParams 
 
