class player{
    constructor(){
var heitmain=document.getElementById("player")
heitmain.style.height=screen.height+"px"
if(screen.width<500){
    heitmain.style.width=screen.width+"px"
}
var hietdiv=document.getElementById("content")
hietdiv.style.height=screen.height-320+"px"
    }
}
onload=new player()

class audio_player  {
constructor(){
    this.audiofile=document.getElementById("audiofile")
    this.titleaudio=document.getElementById("titleradio")
    this.playpuase=document.getElementById("playpuase")
    this.isplayed
    this.playpuase.addEventListener("click",()=>{
this.playerpuase()
    })
   
    this.nameradio=[]
    this.nameradio[0]="Radio1"
    this.nameradio[1]="Radio2"
    this.nameradio[2]="Radio3"
    this.nameradio[3]="Radio4"
    this.nameradio[4]="Radio5"
this.sourceaudio=[]
this.sourceaudio[0]="top.mp4"
this.sourceaudio[1]="badboys.mp4"
this.sourceaudio[2]="buruto.mp4"
this.sourceaudio[3]="top1.mp4"
this.sourceaudio[4]="leve.mp4"
this.server=0
this.setresourc()
document.getElementById("next").addEventListener("click",()=>{
if(this.server<this.sourceaudio.length-1){
++this.server
this.isplayed=false
}else{
    this.server=0
}
localStorage.setItem("saveposition",this.server)
this.setresourc()
})
document.getElementById("back").addEventListener("click",()=>{
    if(this.server>0){
--this.server
this.isplayed=false

    }else{
        this.server=this.sourceaudio.length-1
    }
    localStorage.setItem("saveposition",this.server)
    this.setresourc()
})
}
setresourc(){
    if(localStorage.getItem("saveposition")!=null){
this.server=localStorage.getItem("saveposition")
    }
    this.audiofile.src=this.sourceaudio[this.server]
    this.titleaudio.innerHTML=this.nameradio[this.server]
    this.playerpuase()
}
playerpuase(){
if(this.isplayed==false){
    this.playpuase.src="paus.png"
this.audiofile.play()
this.isplayed=true
}else{
    this.playpuase.src="down.png"
    this.audiofile.pause()
    this.isplayed=false
}
}
}
onload=new audio_player()





class volume{
constructor(){
    this.audiofile=document.getElementById("audiofile")
this.audiofile.volume=50/100
this.volumerange=document.getElementById("volumerang")
this.volumerange.addEventListener("change",()=>{
    this.audiofile.volume=this.volumerange.value/100
})
this.volumespeed=document.getElementById("volumespeed")
this.volumespeed.playbackRate=1
this.volumespeed.addEventListener("change",()=>{
    this.audiofile.playbackRate=this.volumespeed.value/100
})
}
}
onload=new volume()





class color{
    constructor(){
this.color1=document.getElementById("color1")
this.color1.addEventListener("click",()=>{
this.selectcolor("color1")
})
this.color2=document.getElementById("color2")
this.color2.addEventListener("click",()=>{
this.selectcolor("color2")
})
this.color3=document.getElementById("color3")
this.color3.addEventListener("click",()=>{
this.selectcolor("color3")
})
this.color4=document.getElementById("color4")
this.color4.addEventListener("click",()=>{
this.selectcolor("color4")
})
this.color5=document.getElementById("color5")
this.color5.addEventListener("click",()=>{
this.selectcolor("color5")
})
if(localStorage.getItem("Color")==null){
    document.body.style.background="linear-gradient(to right, #fc466b, #3f5efb)"

}
this.selectcolor(localStorage.getItem("Color"))
    }
    selectcolor(color){
if(color=="color1"){
document.body.style.background="linear-gradient(to right, #a1ffce, #faffd1)"
}else if(color=="color2"){
document.body.style.background="linear-gradient(to right, #ef32d9, #89fffd)"
}else if(color=="color3"){
document.body.style.background="linear-gradient(to right, #00c3ff, #ffff1c)"
}else if(color=="color4"){
document.body.style.background="linear-gradient(to right, #00f260, #0575e6)"
}else{
    document.body.style.background="linear-gradient(to right, #fc466b, #3f5efb)"
}
localStorage.setItem("Color",color)
    }
}
onload=new color()
