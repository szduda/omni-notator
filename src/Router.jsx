import React from 'react'
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { DataService } from './DataService'
import { useNotelist } from './Features/Notelist/useNotelist'
import { useNoteView } from './Features/NoteView/useNoteView'
import { Header } from './Features/Header/Header'

const Notelist = useNotelist({ DataService })
const NoteView = useNoteView({ DataService })

export default () => (
  <BrowserRouter>
    <header>
      <Header />
    </header>
    <main>
      <Switch>
        <Route path='/note/:date' component={NoteView} />
        <Route exact path='/' component={Notelist} />
        <Redirect to="/" />
      </Switch>
    </main>
  </BrowserRouter>
)