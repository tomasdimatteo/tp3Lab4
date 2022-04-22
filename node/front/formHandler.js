export function formHandler(url, metodo){
    console.log(metodo)
    console.log(url)
    document.querySelector("form")
    .addEventListener('submit' , e => {
        metodo === 'PUT' && e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
            )
            const options = {
                method: metodo, 
                headers: {
                 'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
               }
               console.log(options)
            fetch(url, options)
            .then(response => response.json())
            .then(res => {
                metodo === 'POST' 
                ? console.log(res)
                : location.reload()               
            })
            .catch(e => console.error(e))
    })
}