const { creteApp } = Vue;

const opzioni = {
    data: function () {
        return {
            lista: [
                {
                    domanda1: 'hai fatto i compito?'
                },
                {
                    domanda2: 'hai fatto la spesa?'
                },
                {
                    domanda3: 'hai portato fuori il cane?'
                }
            ]
        }
    }
}

createApp(opzioni).mount('#app')