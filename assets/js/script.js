/* Pause/resume cube on Space key or click */
const cube = document.querySelector('.cube');
cube.addEventListener('click', toggle);
document.addEventListener('keydown', e => { if (e.code === 'Space') toggle(); });

function toggle () {
  cube.classList.toggle('paused');
  cube.setAttribute('aria-label',
    cube.classList.contains('paused')
      ? 'Cube paused; press Space or click to spin'
      : 'Interactive rotating cube; press Space or click to pause');
}
