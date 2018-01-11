import collectFPS from 'collect-fps';
import Events from './events';

const win = window, doc = document;
export default class collectScrollFps extends Events {
  constructor(options){
    super();
    this.config = {
      // 定义快速滑动的阈值
      // 2代表一秒滑动两个屏幕的距离
      threshold: options.threshold || 2
    }
    this.fps = 0;
    this._eventFunc = this._addScrollEvent.bind(this);
    this._timer = null;
    this._scrollStart = false;
  }
  start(){
    doc.addEventListener('scroll', this._eventFunc);
    let lastTime;
    let endCollection;
    let scrollTop = this._getScrollTo();
    let screenHeight = win.screen.height;

    this.on('startScroll', ()=>{
      lastTime = win.performance.now();
      endCollection = collectFPS();
    });

    this.on('endScroll', ()=>{
      const now = win.performance.now();
      const curScrollTop = this._getScrollTo();
      const distance = curScrollTop - scrollTop;
      const speed = (distance/screenHeight)/((now - lastTime)/1000);
      lastTime = now;
      scrollTop = curScrollTop;

      this.fps = endCollection();
      // 滚动超过两屏才触发
      if(Math.abs(distance) >= screenHeight * 2){
        this.trigger('end', [{
          fps: this.fps,
          speed: speed,
          quickScroll: Math.abs(speed) >= this.config.threshold
        }])
      }
    });
  }
  stop(){
    doc.removeEventListener('scroll', this._eventFunc);
  }
  _addScrollEvent(){
    if(!this._scrollStart){
      this.trigger('startScroll');
      this._scrollStart = true;
    }
    clearTimeout(this._timer);
    this._timer = setTimeout(()=>{
      this.trigger('endScroll');
      this._scrollStart = false;
    }, 100);
  }
  _getScrollTo() {
    return win.pageYOffset
      || doc.documentElement.scrollTop
      || doc.body.scrollTop
      || 0;
  }
}