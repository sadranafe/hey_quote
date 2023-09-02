import { Route , Switch , Redirect } from "react-router-dom"

import AllQuote from "./pages/allQuote"
import QuoteDetail from "./pages/quoteDetail"
import NewQuote from "./pages/newQuote"
import NotFound from "./pages/notFound"
import MainNavBar from "./components/mainNavBar"
import { useState } from "react"

const App = () => {
  const [DUMMY_DATA , setDUMMY_DATA] = useState([])

  const DUMMY_DATA_Handler = data => {
    setDUMMY_DATA(prevState => {
      return ([...prevState , data])
    })
  }

  return (
    <>
      <MainNavBar/>

        <Switch>
            <Redirect from = "/" to = "/quotes" exact/>
            <Route path = "/quotes" exact>
                <AllQuote dummy_data = {DUMMY_DATA}/>
            </Route>

            <Route path = "/new-quote">
                <NewQuote onDUMMY_DATA = {DUMMY_DATA_Handler}/>
            </Route>

            <Route path = "/quotes/:quoteId">
                <QuoteDetail dummy_data = {DUMMY_DATA}/>
            </Route>

            <Route path = "/404">
                <NotFound/>
            </Route>

            <Redirect to = "/404"/>

        </Switch>
    </>
  )
}

export default App
