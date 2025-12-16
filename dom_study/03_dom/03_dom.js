const inputButton = document.querySelector(".input_button");
let count = 1;
inputButton.onclick = () => {
  const inputName = document.querySelector(".input_name");
  const inputAge = document.querySelector(".input_age");
  const inputAddress = document.querySelector(".input_address");

  if (
    inputName.value === "" ||
    inputAge.value === "" ||
    inputAddress.value === ""
  ) {
    alert("빈칸이야");
    return;
  }

  const tbody = document.querySelector(".student_table > tbody");

  const trs = `
  <tr>
    <td>${count++}</td>
    <td>${inputName.value}</td>
    <td>${inputAge.value}</td>
    <td>${inputAddress.value}</td>
  </tr>
  `;
  tbody.innerHTML += trs;
};
