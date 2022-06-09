import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');    
const player = new Player(iframe);
let currentSrorageValue = Number(localStorage.getItem(LOCALSTORAGE_KEY));

player.on('timeupdate', throttle(clickPlay, 1000));
player.on('play', playFromCurrentTime);
player.on('ended', ended);


function clickPlay( { seconds } ){
    currentSrorageValue = seconds
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
    };


function playFromCurrentTime(){
   player.setCurrentTime(currentSrorageValue).then(function(){})
    };


function ended(){
    player.setCurrentTime(0).then(function(){})
    };