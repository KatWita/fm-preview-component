const btn = document.querySelector('.card__share-btn');
const socialmedia = document.querySelector('.card__socialmedia');

const switchActive = () => {
	btn.classList.toggle('card__share-btn--active');
	socialmedia.classList.toggle('card__socialmedia--active');
};

btn.addEventListener('click', switchActive);
