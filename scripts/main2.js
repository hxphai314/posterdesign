const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
let fileName = "";
const saveButton = document.getElementById("save-btn");
const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");


// Revert Filters
revertBtn.addEventListener("click", e => {
  Caman("#canvas", img, function() {
    this.revert(true);
  });
});

onclick = revertBtn;
// Upload File
uploadFile.addEventListener("change", () => {
  // Get File
  const file = document.getElementById("upload-file").files[0];
  // Init FileReader API
  const reader = new FileReader();

  // Check for file
  if (file) {
    // Set file name
    fileName = file.name;
    // Read data as URL
    reader.readAsDataURL(file);
  }

  // Add image to canvas
  reader.addEventListener("load",() => {
      // Create image
      img = new Image();
      // Set image src
      img.src = reader.result;
      // On image load add to canvas
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute("data-caman-id");
        Caman("#image",function(){
          this.revert(true);
        });

      };

  }, false );
});

// Download Event
downloadBtn.addEventListener("click", () => {
  // Get ext
  const fileExtension = fileName.slice(-4);

  // Init new filename
  let newFilename;

  // Check image type
  if (fileExtension === ".jpg" || fileExtension === ".png") {
    // new filename
    newFilename = fileName.substring(0, fileName.length - 4) + "-edited.jpg";
  }

  // Call download
  download(canvas, newFilename);
});

// Download
function download(canvas, filename) {
  // Init event
  let e;
  // Create link
  const link = document.createElement("a");

  // Set props
  link.download = filename;
  link.href = canvas.toDataURL("image/jpeg", 0.8);
  // New mouse event
  e = new MouseEvent("click");
  // Dispatch event
  link.dispatchEvent(e);
}
  //format image
    var textInput = document.getElementById("message");
    function applyText(s1,s2,s3,s4,s5){
        var s1 = document.getElementById(s1);
        var s2 = document.getElementById(s2);
        var s3 = document.getElementById(s3);
        var s4 = document.getElementById(s4);
        var s5 = document.getElementById(s5);
        ctx.fillStyle = "rgba(0,0,0,5)";
        var boxTop  =(canvas.height/2)-30;
        ctx.fillRect(0,boxTop,canvas.width,65);
        //color
        ctx.font =' normal 20px Railway'
        if(s1.value == "white"){
            ctx.fillStyle = 'white';
          } 
        else if(s1.value == "green"){
            ctx.fillStyle= 'green';
          } 
        else if(s1.value == "blue"){
             ctx.fillStyle= 'blue';
          }
        else if(s1.value == "yellow"){
            ctx.fillStyle= 'yellow';
          } 
        else if(s1.value == "red"){
             ctx.fillStyle= 'red';
          } 
          //font
          //size
        if(s3.value == "35"){
             if(s2.value == "Arial"){
                  if(s5.value == "normal"){
                     ctx.font =' normal 35px  Arial';
                  }
                  else if (s5.value == "italic") {
                      ctx.font =' italic 35px  Arial';
                  }
                  else if (s5.value == "bold") {
                      ctx.font =' bold 35px  Arial';
                  }
              }  
            else if(s2.value == "Verdana"){
                 if(s5.value == "normal"){
                     ctx.font =' normal 35px  Verdana';
                  }
                  else if (s5.value == "italic") {
                      ctx.font =' italic 35px  Verdana';
                  }
                  else if (s5.value == "bold") {
                      ctx.font =' bold 35px  Verdana';
                  }
               } 
          }


          //
         if(s3.value == "40"){
            if(s2.value == "Arial"){
                if(s5.value == "normal"){
                     ctx.font =' normal 40px  Arial';
                  }
                  else if (s5.value == "italic") {
                      ctx.font =' italic 40px Arial';
                  }
                  else if (s5.value == "bold") {
                      ctx.font =' bold 40px  Arial';
                  }
               } 
            else if(s2.value == "Verdana"){
              if(s5.value == "normal"){
                     ctx.font =' normal 40px  Verdana';
                  }
                  else if (s5.value == "italic") {
                      ctx.font =' italic 40px  Verdana';
                  }
                  else if (s5.value == "bold") {
                      ctx.font =' bold 40px  Verdana';
                  }
                } 
            } 
        //
         if(s3.value == "46"){
             if(s2.value == "Arial"){
                if(s5.value == "normal"){
                     ctx.font =' normal 46px  Arial';
                  }
                  else if (s5.value == "italic") {
                      ctx.font =' italic 46px Arial';
                  }
                  else if (s5.value == "bold") {
                      ctx.font =' bold 46px  Arial';
                  }
               } 
            else if(s2.value == "Verdana"){
               if(s5.value == "normal"){
                     ctx.font =' normal 46px  Verdana';
                  }
                  else if (s5.value == "italic") {
                      ctx.font =' italic 46px  Verdana';
                  }
                  else if (s5.value == "bold") {
                      ctx.font =' bold 46px  Verdana';
                  }
                } 
              } 
          
        //
         if(s3.value == "50"){
             if(s2.value == "Arial"){
                if(s5.value == "normal"){
                     ctx.font =' normal 50px  Arial';
                  }
                  else if (s5.value == "italic") {
                      ctx.font =' italic 50px Arial';
                  }
                  else if (s5.value == "bold") {
                      ctx.font =' bold 50px  Arial';
                  }
               } 
            else if(s2.value == "Verdana"){
              if(s5.value == "normal"){
                     ctx.font =' normal 50px  Verdana';
                  }
                  else if (s5.value == "italic") {
                      ctx.font =' italic 50px  Verdana';
                  }
                  else if (s5.value == "bold") {
                      ctx.font =' bold 50px  Verdana';
                  }
              }  
          }
           //
         if(s3.value == "55"){
              if(s2.value == "Arial"){
                if(s5.value == "normal"){
                     ctx.font =' normal 55px  Arial';
                  }
                  else if (s5.value == "italic") {
                      ctx.font =' italic 55px Arial';
                  }
                  else if (s5.value == "bold") {
                      ctx.font =' bold 55px  Arial';
                  }
               } 
               else if(s2.value == "Verdana"){
                  if(s5.value == "normal"){
                     ctx.font =' normal 55px  Verdana';
                  }
                  else if (s5.value == "italic") {
                      ctx.font =' italic 55px  Verdana';
                  }
                  else if (s5.value == "bold") {
                      ctx.font =' bold 55px  Verdana';
                  }
              } 
          }   

        //align
        if(s4.value == "center"){
            ctx.textAlign = 'center';
          } 
        else if(s4.value == "left"){
            ctx.textAlign = 'right';
          }
        else if(s4.value == "right"){
            ctx.textAlign = 'left';
          }
        ctx.fillText(textInput.value,canvas.width/2,boxTop+50);
      };    
   
          

