class Navigation {
    constructor({state}) {
        this.state = state;
    }

  getStep(curentIndex) {
    return curentIndex - this.state.getNumberOfSlides() * (Math.floor(curentIndex / this.state.getNumberOfSlides()));
  }

  prevStep() {
    return this.getStep(this.state.decreaseIndex());
  }

  nextStep() {
    return this.getStep(this.state.increaseIndex());
  }

  getCurrentStep(){
    return this.getStep(this.state.getIndex());
  }
  
  moveTo(index) {
    return this.getStep(this.state.setIndex(index));
  }
}
