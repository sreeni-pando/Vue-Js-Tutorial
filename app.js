new Vue({
    el:"#vue-app",
    data:{
        name:"Sreenivaasan",
        website:"www.google.com",
        age:23,
        x:0,
        y:0
    },
    methods:{
        greet:function(){
            return "Hi"+this.name+", Good Morning";
        },
        add:function(inc){
            this.age+=inc;
        },
        subtract:function(inc){
            this.age-=inc;
        },
        UpdateXY:function(event){
            // console.log(event);
            this.x= event.offsetX;
            this.y= event.offsetY;
        }
    }
})