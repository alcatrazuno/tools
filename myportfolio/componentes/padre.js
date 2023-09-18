Vue.component('padre',{
    template: //html
    `
    <div class="p-5 bg-dark text-white">
    <h2>Componente padre: {{numeroPadre}}</h2>
    <hijo :numero="numeroPadre"></hijo>
    </div>
    `,
    data(){
        return{
        numeroPadre: 0
        }
    }
})