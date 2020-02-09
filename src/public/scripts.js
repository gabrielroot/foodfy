const navSobre = document.getElementById('navSobre')
const navReceitas = document.getElementById('navReceitas')
const pathName = document.location.pathname
const menu = document.querySelector('.menu')
const menu_modal = document.querySelector('.menu-modal')

let state = false
menu.addEventListener('click',()=>{
    state = !state
    if(state)
        menu_modal.style.display = 'initial'
    else
        menu_modal.style.display = 'none'
})


switch(pathName){
    case '/sobre':

        navSobre.style.fontWeight = 'bold'
        break
    case '/receitas':
        const close_modal = document.querySelector('.close-modal')
        const modal_overlay = document.querySelector('.modal-overlay')
        const items = document.querySelectorAll('.item')



        close_modal.addEventListener('click', ()=>{
            modal_overlay.style.display = 'none'
        })
        for(let i=0;i<items.length;i++){
            items[i].addEventListener('click', function(){
                window.open(`/receitas/${i}`,'_blank')
            })
        }
        navReceitas.style.fontWeight = 'bold'
        break
    case '/receitas/'+pathName.substring(10):   //pego o fim da url (variavel) e adiciono ao final da parte fixa (/detalhes/)
        const esconder = document.querySelectorAll('#esconder')
        let bool = false
        for(let esconde of esconder){
            esconde.addEventListener('click', ()=>{
                bool = !bool
                if(bool){   //Se a descrição está visivel, esconda
                    esconde.innerHTML = 'MOSTRAR'
                    esconde.parentElement.nextElementSibling.style.display = "none"
                }else{      //Senão, mostre
                    esconde.innerHTML = 'ESCONDER'
                    esconde.parentElement.nextElementSibling.style.display = "initial"//"block"
                }
            })
        }
        break
    }