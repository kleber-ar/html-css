function Greeting() {
    const fistName = 'Kleber'
    const lastName = 'Rodrigues'

    return <h1 className="greeting">Olá {`${fistName} ${lastName}`}</h1>
}

export default Greeting;