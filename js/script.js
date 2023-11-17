const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            miaLista: [
                {
                    text: 'hai fatto i compito?',
                    done: 'true'
                },
                {
                    text: 'hai fatto la spesa?',
                    done: 'false'
                },
                {
                    text: 'hai portato fuori il cane?',
                    done: 'true'
                }
            ]
        }
    }
    
}

createApp(opzioni).mount('#app')