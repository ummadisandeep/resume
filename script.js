function resume() {
  window.open('resume.html','_self')
}



function localJson(file.callback){
  var rawfile=new XMLHttpREQUEST();
  rawfile.overridemimetype("application/json");
  rawfile.open("get",file,true);
  rawfile.onreadystatechange=function(){
    if(rawfile.readystate===4 && rawfile.status=="200"){
      callback(rawfile.responsetext)

    }
  }
  rawfile.send();
}
loadjson("srinu.json",function(text)){
  var data=json.parse("text");
});
