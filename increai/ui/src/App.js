import Home from "./components/Home";
import { AppShell, Header, Group, Title, Button } from '@mantine/core';
import {
  BrowserRouter,
  Route, 
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppShell
        padding="md"
        header={
          <Header height={48}>
            <Group sx={{ height: '100%' }} px={20} position="apart">
              <Button variant="subtle">
                <Title order={2} style={{ color: "#1eb5a4" }}>
                  IncreAI
                </Title>
              </Button>
            </Group>
          </Header>
        }
      >
        <Route exact path="/about">
          This is the about page          
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
      </AppShell>
    </BrowserRouter>
  )
}

export default App;
