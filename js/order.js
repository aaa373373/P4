const category = document.querySelector("#food_category"),
  dishCode = document.querySelector("#dish_code"),
  dishName = document.querySelector("#dish_name"),
  dishDescription = document.querySelector("#dish_description"),
  dishPrice = document.querySelector("#dish_price"),
  submit = document.querySelector("#submit"),
  logs = document.querySelector(".create_logs");

submit.addEventListener("click", async function (e) {
  e.preventDefault();
  let data;

  if (
    dishCode.value.trim() != "" &&
    category.value.trim() != "" &&
    dishName.value.trim() != "" &&
    dishPrice.value.trim() != ""
  ) {
    if (dishDescription.value.trim() != "") {
      data = {
        dishCode: dishCode.value.trim(),
        category: category.value.trim(),
        dishName: dishName.value.trim(),
        dishPrice: dishPrice.value.trim(),
        description: dishDescription.value.trim(),
      };
    } else {
      data = {
        dishCode: dishCode.value.trim(),
        category: category.value.trim(),
        dishName: dishName.value.trim(),
        dishPrice: dishPrice.value.trim(),
      };
    }

    logs.classList.add("success");
    logs.textContent = "Food successfully created.";

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
      dishCode.value = "";
      dishName.value = "";
      dishPrice.value = "";
      dishDescription.value = "";
    }, 5000);
  } else {
    logs.classList.add("fail");
    logs.textContent = "Please fill form";

    setTimeout(() => {
      logs.classList.remove("fail");
      dishCode.value = "";
      dishName.value = "";
      dishPrice.value = "";
      dishDescription.value = "";
    }, 5000);
  }
});
