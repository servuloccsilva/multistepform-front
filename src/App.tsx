import { Router } from "./Routes/router"
import {FormProvider} from './Contexts/FormContext'


const App = () => {
  return (
    <div>
      <FormProvider>
        <Router />
      </FormProvider>
    </div>
  )
}

export default App;