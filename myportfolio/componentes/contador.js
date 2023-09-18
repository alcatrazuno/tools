Vue.component('contador', {
    template: //html
    `
    <div class="container">
        <h3>{{numero}}</h3>
        <a class="waves-effect waves-light btn" @click="numero++">+</a>
    </div>
    `,
    data() {
        return {
            numero: 0
        }
    }

})