import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConceptsCall(){
    return (
        <>
        {CORE_CONCEPTS.map((CoreItemsDetail) => (
            <CoreConcept {...CoreItemsDetail} />
        ))} 
        </>
    )
}