const { creteApp } = Vue;

const opzioni = {
    data: function () {
        return {
            lista: [
                {
                    domandaUno: 'hai fatto i compito?'
                },
                {
                    domandaDue: 'hai fatto la spesa?'
                },
                {
                    domandaTre: 'hai portato fuori il cane?'
                }
            ]
        }
    }
}

createApp(opzioni).mount('#app')