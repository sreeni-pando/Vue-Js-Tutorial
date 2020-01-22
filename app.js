new Vue({
    el:"#vue-app",
    data:{
        name:"",
        age:20,
        a:0,
        b:0
    },
    methods:{
        greet:function(){
            return "Hi"+this.name+", Good Morning";
        },
        addtoA:function(){
            return this.age+this.a;
        },
        addtoB:function(){
            return this.age+this.b;
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
        },
        Logname: function(){
            console.log("entered name");
        },
        Logage: function(){
            console.log("entered age");
        }
    }
})