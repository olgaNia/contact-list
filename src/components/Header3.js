export default function Header3(props){

    const {contactListName,userName}=props

    return(
        <div>
            <h1>{contactListName}</h1>
            <p>Hello {userName}!</p>
        </div>
    )
}