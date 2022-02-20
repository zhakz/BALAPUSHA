 $(function(){
    var link = $("ul li a");
    link.mouseover(function(){
        $(this).addClass('decoration');
 link.mousout(function(){
    $(this).removeClass('decoration');
 })
})
link.hover(function(){
        $(this).addClass('decoration');},
        function() {
            $(this).removeClass('decoration');
        });
    });


		



function alerted(){
    alert("Submited!")
}



var button = document.querySelector('.button');

function setupSynth() {
  window.synth = new Tone.Synth({
    oscillator: {
      type: 'sine',
      modulationFrequency: 0.5
    },
    envelope: {
      attack: 0,
      decay: 0.2,
      sustain: 0,
      release: 0.5,
    }
  }).toMaster();
}

function boopMe() {
  if (!window.synth) {
    setupSynth();
  }
  
  window.synth.triggerAttackRelease(600, '9n');
}

button.addEventListener('touchstart', function(e) {
  e.stopPropagation();
  e.preventDefault();
  boopMe();
});
button.addEventListener('mousedown', boopMe);