import { Route , Switch , Redirect } from "react-router-dom"

import AllQuote from "./pages/allQuote"
import QuoteDetail from "./pages/quoteDetail"
import NewQuote from "./pages/newQuote"
import NotFound from "./pages/notFound"
import MainNavBar from "./components/mainNavBar"

const App = () => {
  const DUMMY_DATA = [
    {id : 1 , author : "sadra" , text : "Learning ReactJS is aweSome!"},
    {id : 2 , author : "Max" , text : "Learning NextJS is Great!"},
  ]

  return (
    <>
      <MainNavBar/>

        <Switch>
            <Redirect from = "/" to = "/quotes" exact/>
            <Route path = "/quotes" exact>
                <AllQuote dummy_data = {DUMMY_DATA}/>
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
