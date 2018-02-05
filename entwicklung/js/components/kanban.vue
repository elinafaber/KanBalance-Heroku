<template>
    <div>
        
        <div id="myKanban">
           
        </div>
        <div class = "updateButton" @click="updateKanban()">
            Board aktualisieren
        </div>
    </div>
</template>

<script>

export default {
  props: [],
  data(){
      return{
          kanbanObject: {},
          oldQRarray: [],
      }
  },
  mounted() {
    console.log('Kanban Component Geladen');

    var stringKanban; 
    var SendKanban = () => {
        //console.log('sdfasdfgasdfasdfasdfgdfsgdsfgsdfgsfd');
        var currentBoards = this.kanbanObject.options.boards;
        stringKanban = JSON.stringify(currentBoards);
        //console.log('dasdfasdasdasd', stringKanban)
        this.sendKanbanToServer(stringKanban);
    }

    this.getKanbanFromServer();
// get strange scope of the jkanban instance in our component with help from Max Brandl 
    this.kanbanObject = new jKanban({
        element: '#myKanban',
        gutter: '0px',
        widthBoard: '250px',
        click: function (el) {
            //console.log("Trigger on all items click!");
        },
        dropEl: function (el, target, source, sibling) {
            //console.log("Now would be good moment to be dropped and saved"); 

        // UPLOAD/SET currentBoards auf SQL Server
        SendKanban();
     
        },

        boards: [
        {
        "id": "_wish",
        "title": "Ziele",
        "class": "wish",
    
        "item": [
            {
                "id": "_test_delete",
                "title": "Urlaub planen",
               
            },
            

            {
                "title": "Achtsamkeitskurs",
            },


        ]
},
{
    "id": "_working",
    "title": "To Dos",
    "class": "todo",
    "item": [
        {
            "title": "Impfpass finden",
        },
        {
            "title": "Flug buchen",
        },
         {
            "title": "Bestellung Buch abholen",
        },
    
    ]
},

{
    "id": "_working",
    "title": "In Bearbeitung",
    "class": "todo",
    "item": [
        {
            "title": "Zeitplan machen",
        },
       
    
    ]
},

{
    "id": "_working",
    "title": "Geschafft",
    "class": "todo",
    "item": [
        {
            "title": "Urlaubsantrag",
        },
        {
            "title": "Emma Metzler mit Michael",
        },
          {
            "title": "Eröffnung Jil Sander",
        },
           {
            "title": "Handyvertrag erneuern",
        },
             {
            "title": "Abo BahnCard kündigen",
        },
    
    
    ]
},

]
});




  }
  ,components: {

  },
  methods:{
  
      sendKanbanToServer(kanbanString){
        
        var postInfo = {
            url: "https://kanbalance.herokuapp.com/newKanban?value="+kanbanString,
        }
       
        // Commit to Store in index file, call mutations method sendToAPI
        this.$store.commit('sendToAPI', postInfo);

      },
      getKanbanFromServer(){

        var postInfo = {
            name: "Kanban",
            url: "https://kanbalance.herokuapp.com/getKanban",
        }

        this.$store.commit('getFromAPI', postInfo);

      },
    // UPDATE FUNCTION 
      updateKanban(){
        
        this.getKanbanFromServer();

        console.log('diff1', this.oldQRarray);
        console.log('diff2', this.$store.state.qrCodes);

        var newQRs;

        if(this.oldQRarray.length != 0){

            // FILTER FUNCTION  with help from Max Brandl 
            // store array of qrCodes wird mit this.oldQRarray verglichen
            newQRs = this.$store.state.qrCodes.filter((element) => {

                var isNew = true;
                
                this.oldQRarray.forEach((oldElement) => {
                    if(element.QR === oldElement.QR){
                        isNew = false;
                    }
                    console.log('Filter', [element, oldElement, isNew])
                })
                
                return isNew;

            });

            this.oldQRarray = this.$store.state.qrCodes;

        } else {
            newQRs = this.$store.state.qrCodes;
            this.oldQRarray = this.$store.state.qrCodes;
        }
        
        newQRs.forEach((element) => {

            console.log('qr in for each', element.QR);

            this.kanbanObject.addElement(
                "_working",
                {
                    "title": element.QR,
                }
            );

        });

      
      
      }
  }
}



</script>




<style scoped>
.updateButton {

    background-color: #555555; /* Green */
    border: none;
    width: 140px;
    height: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}




   
</style>
