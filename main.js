const btnCal = document.getElementById("btnCal");
btnCal.addEventListener("click", function () {
  const firstNum = document.getElementById("firstNum");
  const secondNum = document.getElementById("secondNum");
  const notice = document.getElementById("notice");

  const validationMessage = validateInputs(firstNum.value, secondNum.value);
  if (validationMessage) {
    notice.innerText = validationMessage;
    return;
  }

  const radios = document.querySelectorAll('input[name="operation"]');
  let checkedValue = null;
  for (const radio of radios) {
    if (radio.checked) {
      checkedValue = radio.value;
      break;
    }
  }
  if (checkedValue === null) {
    notice.innerText = "Bạn chưa chọn phép tính";
    return;
  }

  const num1 = parseFloat(firstNum.value);
  const num2 = parseFloat(secondNum.value);
  switch (checkedValue) {
    case "add":
      const resultAdd = num1 + num2;
      notice.innerText = `Kết quả là: ${resultAdd}`;
      break;
    case "sub":
      const resultSub = num1 - num2;
      notice.innerText = `Kết quả là: ${resultSub}`;
      break;
    case "mul":
      const resultMul = num1 * num2;
      notice.innerText = `Kết quả là: ${resultMul}`;
      break;
    case "div":
      if (num2 === 0) {
        notice.innerText = "Không thể chia cho 0";
        return;
      }
      const resultDiv = num1 / num2;
      notice.innerText = `Kết quả là: ${resultDiv}`;
      break;
    default:
      notice.innerText = "Lỗi không xác định";
      return;
  }
});

function validateInputs(firstValue, secondValue) {
  if (firstValue.trim() === "" && secondValue.trim() === "") {
    return "Bạn chưa nhập số nào.";
  }

  if (!isNum(firstValue) && !isNum(secondValue)) {
    return "Giá trị nhập ở các ô không phải số";
  }

  if (firstValue.trim() === "") {
    return "Bạn chưa nhập số ở ô Số thứ nhất.";
  }

  if (!isNum(firstValue)) {
    return "Giá trị nhập ở ô Số thứ nhất không phải số";
  }

  if (secondValue.trim() === "") {
    return "Bạn chưa nhập số ở ô Số thứ hai.";
  }

  if (!isNum(secondValue)) {
    return "Giá trị nhập ở ô Số thứ hai không phải số";
  }

  return;
}

function isNum(value) {
  return (
    !isNaN(value) && Number(value) !== Infinity && Number(value) !== -Infinity
  );
}
