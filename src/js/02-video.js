import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


let currentTime = null;
const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);
const THROTTLE_INTERVAL = 1000;

player.on('timeupdate', throttle(reloadPlay, THROTTLE_INTERVAL));

function reloadPlay(ev) { 
    currentTime = ev.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
