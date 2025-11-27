# gen_hw
Preconditions: - Playwright - Javascript or TypeScript

Case 1 – Automate Purchase Process 
1. Open the url: https://www.saucedemo.com/inventory.html 
2. Create a credential.json file in test/resources folder and store: 
{ 
username: performance_glitch_user, 
password: secret_sauce 
} 
3. Parse the credentials from credential.json and use it for the following test 
4. On the website type username and password and click on login button 
5. Add the following items to the cart: Sauce Labs Backpack, Sauce Labs Fleece Jacket 
6. Validate the number on the cart symbol 
7. Go through the checkout process 
8. Validate that “Thank you for your order message” is appearing


Case 2 – Verify error messages for mandatory fields 
1. Open the url: https://www.saucedemo.com/inventory.html 
2. Click on login button 
3. Validate the error message 
4. Login with the following credentials: standard_user / secret_sauce 
5. Scroll down to the bottom of the page 
6. Validate the footer message contains 2023 and Terms of Service


Case 3 - Rich Text Editor 
1. Open the url: https://onlinehtmleditor.dev 
2. Type the following text to the editor: Automation Test Example 
3. Automation text should be typed bold format 
4. Test text should be typed underline format 
5. Validate the text is appearing in the rich text editor


Case 4 - iFrame and tab handling 
1. Open this url http://demo.guru99.com/test/guru99home 
2. Locate the image inside the iframe near bottom of the page just above  
Email Submission and click on it 
3. Verify new page is loaded in new tab with title:  
Selenium Live Project: FREE Real Time Project for Practice 
4. Close this tab and switch back to main window 
5. From top menu click on Selenium link that can be seen while hovering on Testing menu item 
6. Verify the wide red Join Now button is displayed near bottom of the page


Case 5 – REST API testing 
1. Add Rest Api library for the test project 
2. Create and send request: 
Request type: GET 
Host: https://jsonplaceholder.typicode.com 
Endpoint: /users 
3. Parse response to Json format 
4. Log only the names and emails from the response data 
Example: 
Leanne Graham | Sincere@april.biz 
Ervin Howell | Shanna@melissa.tv 
5. Verify the first email address contains @
