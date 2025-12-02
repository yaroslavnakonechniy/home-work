class State {
    constructor() {
        this.duration = 200;
        this.interval = 1000 + this.duration;
        this.mode = 'play';
        this.numberOfIndex = 0;
        this.currentIndex = 0;
    }

    increaseIndex() {
      return ++this.curentIndex;
    }
    decreaseIndex() {
      return --this.curentIndex;
    }
    setIndex(index) {
        this.currentIndex = index;
        
        return this.currentIndex;
    }
    getIndex() {
      return this.curentIndex;
    }
    getNumberOfSlides() {
        return this.numberOfSlides;
    }
    setNumberOfSlides(length) {
      this.numberOfSlides = length;

      return this.numberOfSlides;
    }
    getMode() {
        return this.mode;
    }
    toggleMode() {
        this.mode = this.mode === 'play' ? 'pause' : 'play';

        return this.mode;
    }
    getDuration() {
        return this.duration;
    }
    setDuration(duration){
        if (duration) {
            this.duration = duration;
        }

        return this.duration;
    }
    getInterval() {
        return this.interval;
    }
    setIntervar(interval) {
        if (interval) {
            this.interval = interval + this.duration;
        }

        return this.interval;
    }
}