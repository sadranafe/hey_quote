import { Route , Switch , Redirect } from "react-router-dom"

import AllQuote from "./pages/allQuote"
import QuoteDetail from "./pages/quoteDetail"
import NewQuote from "./pages/newQuote"
import NotFound from "./pages/notFound"

const App = () => {
  return (
    <>
        <Switch>
            <Redirect from = "/" to = "/quotes"/>
            <Route path = "/quotes" exact>
                <AllQuote/>
            </Route>

            <Route path = "/new-quote">
                <NewQuote/>
            </Route>

            <Route path = "/quotes/:quoteId">
                <QuoteDetail/>
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
