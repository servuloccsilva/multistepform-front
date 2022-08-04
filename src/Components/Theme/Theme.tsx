import { ReactNode } from 'react'
import * as C from './styles'
import {Header} from '../Header/Header'
import { SideBarItem } from '../SideBarItem/SideBarItem'
import { useForm } from '../../Contexts/FormContext'

type Props = {
    children: ReactNode
}

export const Theme = ({children}: Props) => {

    const { state } = useForm()
    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <SideBarItem
                        title="Pessoal"
                        description="Se identifique"
                        icon="profile"
                        path="/"
                        active={state.currentStep === 1}
                        />

                        <SideBarItem
                        title="Profissional"
                        description="Seu nível"
                        icon="book"
                        path="/step2"
                        active={state.currentStep === 2}
                        />

                        <SideBarItem
                        title="Contatos"
                        description="Como te achar"
                        icon="mail"
                        path="/step3"
                        active={state.currentStep === 3}
                        />

                        <SideBarItem
                        title="Confirmação"
                        description="Finalizando"
                        icon="okay"
                        path="/confirm"
                        active={state.currentStep === 4}
                        />

                        <SideBarItem
                        title="Acompanhar Candidatura"
                        description="Candidatura"
                        icon="eye"
                        path="/candidate"
                        active={state.currentStep === 5}
                        />
                        </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}