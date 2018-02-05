// Vue Index - the file for our Root Component called home

// Import the Root Component from its directory
import Home from './home.vue';
// Import the qrServer Component from its directory
import QRserver from './components/qrServer.vue';



// Our Paths for the App
const routes = [
    { path: '/', component: Home },
    { path: '/QR', component: QRserver }
]

/* Create a new Vue Router Instance Object for the routes constants
we just defined. vue-Router.js also in the libs, will handle the rest)
btw: Why no vue.use here ? */

const router = new VueRouter({
    routes // kurz für 'routes: routes'
})

/*
Create our STORE (with the help of vueex.js ) its for the vue app state mangement
In this case no need for exporting it, it's already in the file needed.
*/
Vue.use(Vuex)

const store = new Vuex.Store({

    // state: a predefined object, lets us put what is part of our STORE
    
    state: {
        count: 0,
        qrCodes: [],
        APIantwort: [],
        messages: 'Message from Store',
        Kanban: []
    },

    /* mutations: another predefined object in the store control the STORE, they can contain functions 
     here for instance they manage the getting and sending to new APIs 
     with XMLHTTPRequests, much like in the CC Task)
    */
    mutations: {

        countUp: (state, query) => {
            state.count = state.count + query
            //console.log('Count Up');
        },

        updateQR: (state, newQR) => {
            console.log('in mutation save');
            state.qrCodes.push(newQR);
        },

        getFromAPI: (state, postInfo) => {
            // Beispiel für eine URL
            // url = 'http://localhost:3000/search?query='+this.$store.state.searchInput;
            console.log('url BEFORE API Call',postInfo.url);
            // Antwort     
            var res;

            // CALL TO SERVER
            var xhttp = new XMLHttpRequest(); 
            xhttp.open("GET", postInfo.url, true);
            xhttp.send();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    //console.log(this.responseText);
                    
                    // Speichere Antwort unter res
                    res = JSON.parse(this.responseText);
                    
                    if(postInfo.name === 'QR'){
                        state.qrCodes = res;
                        //console.log(res);
                    }

                    if(postInfo.name === 'Kanban'){
                        var lastKanban = res[res.length-1].data;
                        //console.log('LAST KANBAN', lastKanban);
                        var newState = JSON.parse(lastKanban);
                        state.Kanban = newState;
                        //console.log('KANBAN FROM SERVER!', newState);
                    }
                }
            }
        },
        
        sendToAPI: (state, postInfo) => {
            console.log('url BEFORE API Call',postInfo.url);

            // CALL TO SERVER
            var xhttp = new XMLHttpRequest();                
            xhttp.open("POST", postInfo.url, true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // Unser Antwort this.responseText wenn gesendet
                    //console.log(this.responseText);

                }
            }
        }
    }
})

const app = new Vue({
    router,
    store
}).$mount('#app')
