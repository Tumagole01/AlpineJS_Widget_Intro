function Counter(){
    return {
      count : 0,
      increment(){
        this.count++;
      },
      decrement(){
        this.count--;
      }
    }
}
//Must check ALpine 
document.addEventListener('alpine:init', () => {
    Alpine.data('counter', Counter);
});