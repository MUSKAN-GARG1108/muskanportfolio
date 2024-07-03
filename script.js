document.addEventListener('DOMContentLoaded', function(){
    new Typed('#typed', {
      strings: ["Muskan", "a Web Developer", "a Coder", "an Open Source Contributor"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  });

  document.querySelectorAll('.hidden').forEach(element => {
      observer.observe(element);
  });
});


