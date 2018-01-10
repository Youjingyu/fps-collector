import collectFPS from 'collect-fps';
import Events from './events';

export default class collectAnimationFps extends Events {
  constructor(options){
    super();
    this.config = Object.assign({
      duration: 2000
    }, options);
    this.fps = 0;
    this.animations = [];
    this._endCollection = null;
    this._eventFunc = null;
  }
  start(){
    this._endCollection = collectFPS();
    this._eventFunc = this._collect.bind(this);
    document.addEventListener('animationstart', this._eventFunc);
    setTimeout(()=>{
      this.stop((data)=>{
        this.trigger('end', [data]);
      });
    }, this.config.duration)
  }
  stop(cb){
    document.removeEventListener('animationstart', this._eventFunc);
    this.fps = this._endCollection();
    cb && cb({
      fps: this.fps,
      animations: this.animations
    });
  }
  _collect(event){
    if(!this._isRepeat(event)){
      this.animations.push({
        name: event.animationName
      });
    }
  }
  _isRepeat(animation){
    const animations = this.animations;
    for(let i = 0, len = animations.length; i < len; i++){
      if(animation.animationName === animations[i].name){
        return true;
      }
    }
    return false;
  }
}