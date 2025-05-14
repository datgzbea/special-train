document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const agencyForm = document.getElementById("agencyForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ sớm.");
            contactForm.reset();
        });
    }

    if (agencyForm) {
        agencyForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Tìm kiếm đại lý đang được xử lý...");
            agencyForm.reset();
        });
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" || password === "") {
        showError("Vui lòng điền đầy đủ thông tin!");
    } else if (username === "admin" && password === "123456") {
        alert("Đăng nhập thành công!");
        window.location.href = "index.html";
    } else {
        showError("Tên người dùng hoặc mật khẩu không chính xác.");
    }
});

function showError(message) {
  var errorMessage = document.getElementById('error-message');
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}