const firstName = document.querySelector("#first_name"),
  lastName = document.querySelector("#lname"),
  email = document.querySelector("#email_address"),
  address = document.querySelector("#address"),
  city = document.querySelector("#city"),
  state = document.querySelector("#state"),
  zipcode = document.querySelector("#zip"),
  about_us = document.querySelector("#hear_about_us"),
  submit = document.querySelector("#submit"),
  logs = document.querySelector(".create_logs");

submit.addEventListener("click", async function (e) {
  e.preventDefault();

  if (
    lastName.value.trim() != "" &&
    firstName.value.trim() != "" &&
    email.value.trim() != "" &&
    address.value.trim() != "" &&
    city.value.trim() != "" &&
    state.value.trim() != "" &&
    zipcode.value.trim() != "" &&
    about_us.value.trim() != ""
  ) {
    const data = {
      lastName: lastName.value.trim(),
      firstName: firstName.value.trim(),
      email: email.value.trim(),
      city: city.value.trim(),
      state: state.value.trim(),
      zipcode: zipcode.value.trim(),
      address: address.value.trim(),
      about_us: about_us.value.trim(),
    };

    logs.classList.add("success");
    logs.textContent = "Successfully added to mail list.";

    const rawResponse = await fetch(
      "http://www.randyconnolly.com/tests/process.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(data),
      }
    );

    const content = await rawResponse.json();

    setTimeout(() => {
      logs.classList.remove("success");
      lastName.value = "";
      firstName.value = "";
      email.value = "";
      city.value = "";
      state.value = "";
      zipcode.value = "";
      address.value = "";
      about_us.value = "";
    }, 5000);
  } else {
    logs.classList.add("fail");
    logs.textContent = "Please fill form";

    setTimeout(() => {
      logs.classList.remove("fail");
      lastName.value = "";
      firstName.value = "";
      email.value = "";
      city.value = "";
      state.value = "";
      zipcode.value = "";
      address.value = "";
      about_us.value = "";
    }, 5000);
  }
});
