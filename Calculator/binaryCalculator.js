  function dis(val){
      document.getElementById('res').value += val;
  };

function clr(){
    document.getElementById('res').value = '';
};

function compute(){
    var x = eval(document.getElementById('res').value);
    document.getElementById('res').value = x;
}
