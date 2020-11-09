// document.body.addEventListener('click', () => {
//   document.querySelector('video').play();
// })

const playBtn = document.querySelector('.play-video');
const wrapper = document.querySelector('.wrapper');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const iFrame = document.querySelector('.popup iframe');

playBtn.addEventListener('click', () => {
  popup.classList.remove('visually-hidden');
  wrapper.classList.add('wrapper--overlay');
  iFrame.setAttribute('src', 'https://player.vimeo.com/video/436752564');
})

close.addEventListener('click', () => {
  popup.classList.add('visually-hidden');
  wrapper.classList.remove('wrapper--overlay');
  iFrame.setAttribute('src', '');
});
