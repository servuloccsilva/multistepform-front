import * as C from "./styles"
import { Theme } from '../../Components/Theme/Theme'
import { useNavigate } from "react-router-dom"
import { useForm, FormActions } from '../../Contexts/FormContext'
import { ChangeEvent, useEffect } from "react"
import { Link } from "react-router-dom"


export const FormStep3 = () => {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type:FormActions.setCurrentStep,
                payload: 3
            })
        }
    },[])

    const handleNextStep = () => {
        if(state.email !== '' && state.linkedin !== '') {
            navigate('/confirm')
        } else {
            alert('Preencha os dados')
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleLinkedinChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setLinkedin,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3</p>
                <h1>Legal {state.name}, agora vamos falar sobre seus contatos!</h1>
                <p>Preencha os dados para podermos entrar em contato</p>

                <hr/>

                <label>
                    Qual seu e-mail?
                    <input
                    type="email"
                    value={state.email}
                    onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu LinkedIn?
                    <input
                    type="url"
                    value={state.linkedin}
                    onChange={handleLinkedinChange}
                    />
                </label>

                <label>
                    Qual seu GitHub?
                    <input
                    type="url"
                    value={state.github}
                    onChange={handleGithubChange}
                    />
                </label>

                <Link to='/step2' className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}