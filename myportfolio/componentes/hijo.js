Vue.component('hijo',{
    template: //html
    `
    <div class="py-5 bg-success">
        <h4>Componente hijo</h4>
        <h5>{{numero}}</h5>
    </div>
    `,
    props: [
        'numero'
    ]
})