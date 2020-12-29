import React from 'react'
import { Route, HashRouter, Redirect } from 'react-router-dom';
import { DataService } from './DataService'
import { useNotelist } from './Features/Notelist/useNotelist'
import { Header } from './Features/Header/Header'

const Notelist = useNotelist({ DataService })

export default () => (
  <HashRouter basename="/">
    <header>
      <Header />
    </header>
    <main>
      <Route exact path='/' component={Notelist} />
      <Redirect to="/" />
    </main>
  </HashRouter>
)