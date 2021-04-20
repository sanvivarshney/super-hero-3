var canvas = new fabric.Canvas("myCanvas");
twi_x = 10;
twi_y = 10;
wing_image_width = 30;
wing_image_height = 30;
var twi_object = "";
var wing_image_object = "";
function twi_update() {
  fabric.Image.fromURL("twi.png", function (Img) {
    twi_object = Img;
    twi_object.scaleToWidth(150);
    twi_object.scaleToHeight(140);
    twi_object.set({ top: twi_y, left: twi_x });
    canvas.add(twi_object);
  });
}
function new_image(get_image) {
  fabric.Image.fromURL(get_image, function (Img) {
    wing_image_object = Img;
    wing_image_object.scaleToWidth(wing_image_width);
    wing_image_object.scaleToHeight(wing_image_height);
    wing_image_object.set({ top: twi_y, left: twi_x });
    canvas.add(wing_image_object);
  });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
  keypressed = e.keyCode;
  if (e.shiftKey == true && keypressed == "80") {
    wing_image_width = wing_image_width + 10;
    wing_image_height = wing_image_height + 10;
    document.getElementById("current_width").innerHTML = wing_image_width;
    document.getElementById("current_height").innerHTML = wing_image_height;
  }
  if (e.shiftKey == true && keypressed == "77") {
    wing_image_width = wing_image_width - 10;
    wing_image_height = wing_image_height - 10;
    document.getElementById("current_width").innerHTML = wing_image_width;
    document.getElementById("current_height").innerHTML = wing_image_height;
  }
  if (keypressed == "38") {
    up();
    console.log("up");
  }
  if (keypressed == "40") {
    down();
    console.log("down");
  }
  if (keypressed == "37") {
    left();
    console.log("left");
  }
  if (keypressed == "39") {
    right();
    console.log("right");
  }

  if (keypressed == "84") {
    new_image("twi.png");
    console.log("t");
  }
  if (keypressed == "87") {
    new_image("wing.png");
    console.log("w");
  }
}

