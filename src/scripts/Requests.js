import { getRequests, deleteRequest } from "./dataAccess.js"


const convertRequestToListElement = (request) => {

    const foundDescription = `
        <li>
            ${request.description}
            <button class="request__delete"
                    id="request--${request.id}">
                Delete
            </button>
        </li>
    `
    
    return foundDescription
} //returns description for called request



export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("") // maps through all requests and returns above function
            }
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
