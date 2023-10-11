// 根據不同的 radio，設定活動資料
function updateEventDetails(eventId) {
  let eventDetails;
  if (eventId === "event1") {
    eventDetails = {
      title: "Event 1: Summer BBQ Party",
      dateTitle: "行程日期",
      date: "7/15 (六) 9:00 - 17:00",
      planTitle: "行程規劃",
      plan: "BBQ, picnic, outdoor games, music performances",
      attendTitle: "每梯人數: ",
      attendees: "50人",
      feeTitle: "行程費用",
      fee: "Free admission",
      suggestTitle: "建議攜帶物品",
      suggestedItems: "Picnic blanket, sunscreen, hat",
      imageSrc:
        "https://images.unsplash.com/photo-1544470554-71345f04eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    };
  }

  if (eventId === "event2") {
    eventDetails = {
      title: "Event 2: Entrepreneur Lecture Series",
      dateTitle: "行程日期",
      date: "8/10 (四) 19:00 - 21:00",
      planTitle: "行程規劃",
      plan: "Successful entrepreneurs sharing experiences,Q&A session, networking",
      attendTitle: "每梯人數: ",
      attendees: "50人",
      feeTitle: "行程費用",
      fee: "Company employees: $50/person, Companions: $100/person",
      suggestTitle: "建議攜帶物品",
      suggestedItems: "kettle, computer, pen, notebook",
      imageSrc:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    };
  }

  if (eventId === "event3") {
    eventDetails = {
      title: "Event 3: Family Sports Day",
      dateTitle: "行程日期",
      date: "9/03 (日) 9:00 - 12:00",
      planTitle: "行程規劃",
      plan: "123 Sports Field",
      attendTitle: "每梯人數: ",
      attendees: "50人",
      feeTitle: "行程費用",
      fee: "Company employees: Free, Companions: $50/person",
      suggestTitle: "建議攜帶物品",
      suggestedItems: "water, walking shoes, towels",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1663088970147-c12282877645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=836&q=80",
    };
  }

  if (eventId === "event4") {
    eventDetails = {
      title: "Event 4: Charity Run",
      dateTitle: "行程日期",
      date: "10/15 (日) 8:00 - 11:00",
      planTitle: "行程規劃",
      plan: "5K charity run",
      attendTitle: "每梯人數: ",
      attendees: "50人",
      feeTitle: "行程費用",
      fee: "Company employees: $100/person, Companions: $300/person",
      suggestTitle: "建議攜帶物品",
      suggestedItems: "water, walking shoes, towels, hat",
      imageSrc:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    };
  }

  // 使用上面設定的資料來生成div內容(活動細節)
  const eventDiv = document.getElementById("eventDetailDiv");
  eventDiv.innerHTML = `
      <div class="border-dashed">
          <div class="event-title">${eventDetails.title}</div>
          <div class="detail-div">
            <h5 class="detail-title">${eventDetails.dateTitle}</h5>
            <p>${eventDetails.date}</p>
            <h5 class="detail-title">${eventDetails.planTitle}</h5>
            <p>${eventDetails.plan}</p>
            <h5 class="detail-title">${eventDetails.attendTitle}</h5>
            <p>${eventDetails.attendees}</p>
            <h5 class="detail-title">${eventDetails.feeTitle}</h5>
            <p>${eventDetails.fee}</p>
            <h5 class="detail-title">${eventDetails.suggestTitle}</h5>
            <p>${eventDetails.suggestedItems}</p>
          </div>
          <img src="${eventDetails.imageSrc}" alt="Event Image" class="event-image">
      </div>
  `;
}

//調整手機號碼格式的function
function formatMobileNumber(inputElement) {
  let value = inputElement.value;

  if (value.match(/^09\d{8}$/)) {
    inputElement.value =
      "+886 " +
      value[1] +
      value[2] +
      value[3] +
      " " +
      value[4] +
      value[5] +
      value[6] +
      " " +
      value[7] +
      value[8] +
      value[9];
  } else if (value.match(/^9\d{8}$/)) {
    inputElement.value =
      "+886 " +
      value[0] +
      value[1] +
      value[2] +
      " " +
      value[3] +
      value[4] +
      value[5] +
      " " +
      value[6] +
      value[7] +
      value[8];
  }
}

document.getElementById("mobileNumber").addEventListener("input", function () {
  formatMobileNumber(this);
});

// 判斷有效的mail格式的function
function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return pattern.test(email);
}

document.getElementById("form").addEventListener("submit", function (event) {
  let invalidEmailFound = false;

  // 檢查主要的email輸入
  if (!validateEmail(document.getElementById("email").value)) {
    document.getElementById("emailHelp").innerHTML = "請輸入有效的mail格式";
    invalidEmailFound = true;
  } else {
    document.getElementById("emailHelp").innerHTML = "";
  }

  // 檢查所有同伴的email輸入
  const companionEmails = document.querySelectorAll(
    "#companionData input[type='email']"
  );
  companionEmails.forEach((emailInput) => {
    const emailHelp = emailInput.nextElementSibling.nextElementSibling; // <small>元素
    if (!validateEmail(emailInput.value)) {
      emailHelp.innerHTML = "請輸入有效的mail格式";
      invalidEmailFound = true;
    } else {
      emailHelp.innerHTML = "";
    }
  });

  if (invalidEmailFound) {
    event.preventDefault();
  }
});

//同伴資訊
function updateCompanionForm() {
  const count = parseInt(document.getElementById("companionCount").value);
  let htmlContent = "";

  if (count > 0) {
    htmlContent = '<table class="table">';

    // Table headers
    htmlContent +=
      "<thead><tr><th>同伴</th><th>姓</th><th>名</th><th>性別</th><th>聯繫電話</th><th>聯繫Email</th></tr></thead><tbody>";

    // Dynamic rows
    for (let i = 1; i <= count; i++) {
      htmlContent += `<tr>
              <td>同伴${i}</td>
              <td><input type="text" class="short-input" required></td>
              <td><input type="text" class="short-input" required></td>
              <td class="gender-cell">
                  <input type="radio" name="gender${i}" required> 生理男
                  <input type="radio" name="gender${i}" required> 生理女
              </td>
              <td>
                  <input type="tel" required oninput="formatMobileNumber(this)">
                  <button type="button" onclick="copyPhone(this)">同上</button>
              </td>
              <td>
                  <input type="email" required>
                  <button type="button" onclick="copyEmail(this)">同上</button>
                  <small class="form-text text-muted"></small>
              </td>
          </tr>`;
    }

    htmlContent += "</tbody></table>";
  }

  document.getElementById("companionData").innerHTML = htmlContent;
}

function copyPhone(buttonElement) {
  const phone = document.getElementById("mobileNumber").value;
  const phoneInput = buttonElement.previousElementSibling;
  phoneInput.value = phone;
}

function copyEmail(buttonElement) {
  const email = document.getElementById("email").value;
  const emailInput = buttonElement.previousElementSibling;
  emailInput.value = email;
}

// 初始化同伴表單
updateCompanionForm();

//計算總金額
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  showConfirmationModal();
});

document.getElementById("modalClose").addEventListener("click", function () {
  hideModal();
});

document.getElementById("modalSubmit").addEventListener("click", function () {
  // Fetch quote from API using CORS Anywhere
  fetch("https://cors-anywhere.herokuapp.com/https://favqs.com/api/qotd")
    .then((response) => {
      // Check if response is OK, otherwise throw an error
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      return response.json();
    })
    .then((data) => {
      // Display the quote in an alert
      const quoteText = data.quote.body;
      alert(quoteText + "\n\nYou have successfully registered");

      // Reset the form and hide the modal
      document.getElementById("form").reset();
      hideModal();
    })
    .catch((error) => {
      console.error("There was an error fetching the quote:", error);
      // Handle any other actions for failed fetch here if needed
    });
});

function showConfirmationModal() {
  // 1. 檢查reCAPTCHA是否完成
  const captchaResponse = grecaptcha.getResponse();
  if (!captchaResponse.length > 0) {
    alert("Captcha not complete");
    return; // 直接返回，不繼續以下的流程
  }

  // Get all input values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const areaCode = document.getElementById("areaCode").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const mobileNumber = document.getElementById("mobileNumber").value;
  const companionCount = parseInt(
    document.getElementById("companionCount").value
  );

  const selectedEventRadio = document.querySelector(
    "input[name='eventSelection']:checked"
  );
  if (!selectedEventRadio) {
    alert("請選擇活動");
    return; // 提前退出此函數
  }

  // Show this info in the modal
  document.getElementById("modalDetails").innerHTML = `
      姓名: ${firstName}${lastName}<br>
      Email: ${email}<br>
      市話: ${areaCode}-${phoneNumber}<br>
      手機: ${mobileNumber}<br>
      同伴人數: ${companionCount}<br>
  `;

  // Calculate total fee based on event
  const selectedEvent = document.querySelector(
    "input[name='eventSelection']:checked"
  ).id;
  let totalFee = 0;
  switch (selectedEvent) {
    case "event1":
      totalFee = 0;
      break;
    case "event2":
      totalFee = 50 + companionCount * 100;
      break;
    case "event3":
      totalFee = companionCount * 50;
      break;
    case "event4":
      totalFee = 100 + companionCount * 300;
      break;
  }

  document.getElementById("modalTotalFee").textContent = "總費用: $" + totalFee;

  // Finally, display the modal
  document.getElementById("confirmModal").style.display = "block";
}

function hideModal() {
  document.getElementById("confirmModal").style.display = "none";
}
