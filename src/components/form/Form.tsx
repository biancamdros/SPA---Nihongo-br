import Container from "../container/Container";

const Form = () => {
    return(
        <Container>
            <form>
                <div>
                    <h3>Nihongo-BR</h3>
                </div>
                <div>
                    <input type="text" placeholder="e-mail"/>
                </div>
                <div>
                    <input type="password" placeholder="senha"/>
                </div>
                <div>
                    <input type="checkbox" value="Remember-me"/>
                </div>
                <div>
                    <a href="#">
                        Login
                    </a>
                    <a href="#">
                        Lost you password?
                    </a>
                    <a href="#">
                        Sign Up
                    </a>
                </div>
            </form>
        </Container>
    )
}

export default Form;