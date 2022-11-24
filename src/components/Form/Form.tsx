function Form({ buttonText }: { buttonText: string }): JSX.Element {
    return (
        <form className="form">
            <div className="input-container">
                <label> username </label>
                <input placeholder="Okidoki" />
            </div>
            <div className="input-container">
                <label> password </label>
                <input type="password" placeholder="******" />
            </div>
            <div>
                <button className="button">{buttonText}</button>
            </div>
        </form>
    );
}

export default Form;
