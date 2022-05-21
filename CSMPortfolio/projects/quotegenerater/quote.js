window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});   

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
   var endpoint = "https://wp.zybooks.com/quotes.php";
   var queryString = "topic=" + topic +
                     "&count=" + count;
   var url = endpoint + "?" + queryString;
   console.log(url);

   var xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = "json";
   xhr.open("GET", url);
   xhr.send();

   /*let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html; */
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
      if (this.response.error) {      
         document.querySelector("#quotes").innerHTML = this.response.error;
      }
      else {
         var data = this.response;
         //console.log("quote 1: " + this.response[0].quote);
         //console.log("source1: " + this.response[0].source);
         console.log(data.length);
         let html = "<ol>";
         for (let c = 1; c <= data.length; c++) {
            html += "<li>" + this.response[c-1].quote + " - " + this.response[c-1].source;
         }
         html += "</ol>";
         document.querySelector("#quotes").innerHTML = html;
      }
}