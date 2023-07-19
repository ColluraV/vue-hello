const {createApp} = Vue;

createApp ({

    data(){
        
        return{
            contatore: 0,
            messaggio:"Benvenuto in Vue",
            sub : "premi il pulsante per continuare",
            mieImg:"",
        }
    },
    
    methods:{

        pressBtn: function(){

            this.contatore ++;
            console.log (this.contatore);
          
            if (this.contatore <= 3){
                this.messaggio = "OTTIMO FUNZIONA!!";
                this.mieImg = `img/meme_${this.contatore}.jpg`;

                
            }
            
            if (this.contatore == 1){
                this.sub = "premi il pulsante per continuare";

            }

            if (this.contatore == 2){
                this.messaggio = "Non esagerare che poi si rompe";
                this.sub = "se proprio ci tieni premi ancora"
            }

            if (this.contatore == 3){
                this.messaggio = "Vabbè spacchiamo tutto";
                this.sub = "fai cosa vuoi"
                this.contatore=0;
            }
        }
    /*<input @keyup.enter="onEnter" />*/

    }
    

}).mount('#app')
