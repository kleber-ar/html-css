function LuckyNumbers() {
    function randomNumbers(){
        return Math.floor(Math.random() * 60 + 1)
    }

    return (
        <>
        <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
        <ul>
            <li>{randomNumbers()}</li>
            <li>{randomNumbers()}</li>
            <li>{randomNumbers()}</li>
            <li>{randomNumbers()}</li>
            <li>{randomNumbers()}</li>
            <li>{randomNumbers()}</li>
        </ul>
        </>
    );
}

export default LuckyNumbers;