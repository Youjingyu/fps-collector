# fps-collector
collect fps containing css3 animation information;collect fps when scrolling fast
## usage
```bash
npm i fps-collector --save
```
and then, collect fps in a period of time
```javascript
import { collectAnimationFps } from 'fps-collector';

const collector = new collectAnimationFps({
  duration: 5000 // keep collecting for 5000ms after collector.start()
});
// start collecting
collector.start();
// collect ended after 5000ms
collector.on('end', data => {
  // return fps containing css3 animation information in 5000ms
  console.log(data);
});
// you can also stop early
collector.stop(data => {
  console.log(data);
});
```
or collect fps when scrolling fast
```javascript
import { collectScrollFps } from 'fps-collector';

const scrollCollector = new collectScrollFps({
  threshold: 2 // it is considered as a fast scrolling when scrolling 2 screens in one second
});
// start collecting
scrollCollector.start();
// get fps after each fast scrolling
scrollCollector.on('end', data => {
  console.log(data);
});
// stop collecting
scrollCollector.stop()
```