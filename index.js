// for instagram
document.getElementById('instagram').onclick = function() {
    window.open('https://www.instagram.com/hashimali3305/', '_blank');
};

// for facebook
document.getElementById('facebook').onclick = function() {
    window.open('https://www.facenbook.com/Bravo hubs/', '_blank');
};

// CV
document.getElementById('openCVButton').onclick = function() {
    window.location.href = 'pic/CV Resume.pdf'
};

// Project
document.getElementById('gym').onclick = function() {
    window.location.href = 'vs code projects';
}
document.getElementById('bravo').onclick = function() {
    window.location.href = 'https://bravohubs.com/';
}

// Contact
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();
    var params ={
        from_name :document.getElementById('name').value,
        email_id :document.getElementById('email').value,
        message :document.getElementById('message').value
    }
    emailjs.send("service_jvsbvgb","template_3j9lvb8",params).then(function(res){
        alert("Success! " + res.status);
    })

    if (params) {
        formStatus.textContent = 'Thank you for your message!';
        formStatus.style.color = 'green';
        
       
        document.getElementById('contactForm').reset();
    } else {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.style.color = 'red';
    }
};

const menuToggle = document.querySelector('.menu-toggle');
const navbarUl = document.querySelector('#navbar ul');

menuToggle.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
});


