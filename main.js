const app = new Vue({
    el: '#app',
    data: {
        correo: [
            {nombre: 'Alexpedrasa@yahoo.com',},
            {nombre: 'Gabriel200@gmail.com',},
            {nombre: 'Leandro_Ramirez@hotmail.com',}
        ],
        nuevoCorreo: '',
        cantidad: 3
    },
    computed: {

    },
    methods: {
        agregarCorreo(){
            if (this.nuevoCorreo != ''){
                this.correo.push({
                    nombre: this.nuevoCorreo
                });
                this.nuevoCorreo = ''
                this.cantidad++
            }},
        eliminarCorreo(index){
            this.correo.splice(index, 1)
            this.cantidad--
        }
    },
})

