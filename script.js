document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('消息已发送！');
        document.getElementById('contactForm').reset();
    } else {
        alert('请填写所有字段。');
    }
});