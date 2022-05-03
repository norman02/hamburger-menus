const burger = document.getElementById("nav-icon__one");

const handleClick = () => burger.classList.toggle('open');

burger.addEventListener('click', handleClick);
