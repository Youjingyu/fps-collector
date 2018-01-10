import { collectAnimationFps } from '../../index';

const collector = new collectAnimationFps({
  duration: 8000
});
collector.start();
collector.on('end', function (data) {
  console.log(data);
});