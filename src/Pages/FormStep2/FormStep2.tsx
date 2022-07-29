import * as C from "./styles"
import { Theme } from '../../Components/Theme/Theme'
import { useNavigate, Link } from "react-router-dom"
import { useForm, FormActions } from '../../Contexts/FormContext'
import { ChangeEvent, useEffect } from "react"
import {SelectOption} from '../../Components/SelectOption/SelectOption'


export const FormStep2 = () => {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type:FormActions.setCurrentStep,
                payload: 2
            })
        }
        dispatch({
            type:FormActions.setCurrentStep,
            payload: 2
        })
        dispatch({
            type:FormActions.setCurrentStep,
            payload: 2
        })
        dispatch({
            type:FormActions.setCurrentStep,
            payload: 2
        })
        dispatch({
            type:FormActions.setCurrentStep,
            payload: 2
        })
        dispatch({
            type:FormActions.setCurrentStep,
            payload: 2
        })
    },[])

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/step3')
        } else {
            alert('Preencha os dados')
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type:FormActions.setLevel,
            payload: level
        })
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, qual seu nível de experiência?</h1>
                <p>Escolha a opção que melhor descreve sua atual experiência profissional nessa área.</p>

                <hr/>

                <SelectOption 
                    title="Sou Iniciante"
                    description="Experiência de 0-2 anos"
                    icon="👼"
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption 
                    title="Sou Programador"
                    description="Experiência de 2 ou mais anos"
                    icon="🧑‍💻"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

                
                <Link to='/' className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}