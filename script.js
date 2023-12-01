var fname, lname, phone, Color;

do {
  fname = prompt("Enter Your First Name :");
} while (isFinite(fname));
do {
  lname = prompt("Enter Your Last Name :");
} while (isFinite(lname));
do {
  phone = prompt("Enter Your Phone Number :");
} while (phone.length !== 11 || isNaN(phone));

Color = prompt(
  "Enter (red) for Red Color or (green) for Green Color or (blue) for Blue Color:"
);

document.write(
  "<p style='color:" +
    Color +
    "'>Welcome Dear " +
    fname +
    " " +
    lname +
    "<br> Your Mobile Number: " +
    phone +
    "</p>"
);
