const PrimeiroComponente = ({ title, subtitle, content}) => {
    return (
        <article className="PrimeiroComponente">
            <div>
            <h1>{title}</h1>
            </div>
            <img src="src/assets/react.svg" alt="imagem do primeiroComponente" />
            <div>
                <h2>{subtitle}</h2>
                <p>{content}</p>
            </div>
        </article>
    );
};

export default PrimeiroComponente;
