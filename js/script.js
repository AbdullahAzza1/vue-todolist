const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            miaLista: [
                {
                    text: 'hai fatto i compito?',
                    done: ''
                },
                {
                    text: 'hai fatto la spesa?',
                    done: ''
                },
                {
                    text: 'hai portato fuori il cane?',
                    done: ''
                }
            ]
        }
    }
    
}

createApp(opzioni).mount('#app')