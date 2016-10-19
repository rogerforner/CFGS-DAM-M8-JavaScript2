
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});

//jQuery.ajax(); Executa un XHR de JS utilitzant jquery
//http://api.jquery.com/jquery.ajax/
//$.ajax();

//HTTP Request de tipus GET
// tipus opcional, si no hi ha aquest camp és GET

//CSS Selectors
$("#getuser").click(function () {
    $.ajax({
        type: "GET",
        url: 'http://localhost:8000/apicutre/user/1',
        success: function (result) {
            console.log("Ajax ok!");
            console.log(result);
            $("#user").val(result);
        },
        error: function () {
            console.log("Ha petat petició ajax")
        }
    });
});

