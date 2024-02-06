function customRender(reactElement, container){
    /*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(const key in object){
    if(Object.hasOwnProperty.call(object,key)){
        const element = Object[props]
    }
   }
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google' 

}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)