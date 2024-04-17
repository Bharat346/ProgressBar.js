# ProgressBar.js

ProgressBar.js is a lightweight JavaScript library for creating customizable Horizontal and circular progress Bar. This Library is made by HTML5 Canvas Using Java-Script.

## Usage

1. **Include the library:**  
   Add the following script tag to your HTML file to include the PieChart.js library:
   
   ```html
   <script src="https://cdn.jsdelivr.net/gh/Bharat346/ProgressBar.js/progress.js"></script>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Bharat346/ProgressBar.js/progress.css">



2. in second script tag you can write "data","labels","icons"(for Horizontal Chart only),and define a container Id in your main file and pass them to the Function :
example :
   ```js
   const canvas = document.querySelectorAll(".progressCanvas");
   const data = [30, 40, 15, 91, 23, 38];
   const labels = ["C", "Html", "CSS", "JavaScript", "TypeScript", "Python"];
   const icons = [
     "fas fa-c",
     "fab fa-html5",
     "fab fa-css3",
     "fab fa-html5",
     "fa-brands fa-js",
   ];



3. Basic Html structure : 
   ```html
   <div id = "user_given_id"></div>

4. **Horizontal ProgressBar :**
    use :
     ```js
     ProgressBarByFA("user_given_id",data,labels,icons); // By icons
     ProgressBarByIMG("user_given_id",data,labels,src); // By images

5. **Circular ProgressBar :**
    use : 
    ```js
    circularProgressBar(
      "user_given_id",
       data,
       labels,
       duration = 1000,
       lineWidth = 5,
       BgarcClr = "#e0e0e0",
       ProgressarcClr = "#7711e4",
       radius = 80,
       InnerFontSize = 30
    );

## License

PieChart.js is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



 
