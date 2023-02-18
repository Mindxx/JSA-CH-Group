const $ = document.querySelector.bind(document)

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    $("#botChat").style.display = "block"
  } else {
    $("#botChat").style.display = "none"
  }
}

$("#botChat").addEventListener("click", () => {
  $("#botChat").style.display = "none"
  $("#bot").innerHTML = `<div class="chat-box">
  <div class="chat-box-header">
    ChatBot
    <span class="chat-box-toggle"><i class="fas fa-times"></i></span>
  </div>
  <div class="chat-box-body">
    <div class="chat-box-overlay">   
    </div>
    <div class="chat-logs">
     
    </div><!--chat-log -->
  </div>
  <div class="chat-input">      
    <form>
      <input type="text" id="chat-input" placeholder="Send a message..."/>
    <button type="submit" class="chat-submit btn btn-primary btn-block" id="chat-submit">Send</button>
    </form>      
  </div>
</div>`
})


