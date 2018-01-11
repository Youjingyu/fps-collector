import { collectAnimationFps } from '../../index';
import { collectScrollFps } from '../../index';

const collector = new collectAnimationFps({
  duration: 5000
});
collector.start();
collector.on('end', function (data) {
  console.log(data);
});

const scrollCollector = new collectScrollFps({
  threshold: 2
});
scrollCollector.start();
const span = document.getElementById('test');
scrollCollector.on('end', function (data) {
  span.textContent = data.fps + ';' + data.speed + ';' + data.quickScroll
  console.log(data);
});