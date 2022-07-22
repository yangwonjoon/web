var Body = {
  setforcolor: function(color){
    document.querySelector('body').style.color = color;
  },
  setforback: function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

var link = {
  linkcolor: function(color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = color;
    i = i+1;
    }
  }
}

function changecolor(self){
  if(self.value === 'night'){
    Body.setforcolor('red');
    Body.setforback('black');
    self.value = 'day';
    link.linkcolor('blue');
  }
  else{
    Body.setforcolor('black');
    Body.setforback('white');
    self.value = 'night';
    link.linkcolor('black');
  }
}
