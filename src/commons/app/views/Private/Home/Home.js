import React from 'react'
import {
  Doughnut
} from 'react-chartjs'
import {
  Box,
  Button,
  Container,
  Grid,
  Pager,
  Layout,
  LayoutMaster,
  Input,
  Icon
} from '../../../../components'

import { Navigation } from '../components'

export default class Home extends React.Component {
  render() {
    const icons = []

    for (var i = 1; i < 81; i++) {
      icons.push(<span key={'icon-' + i}><Icon>{i + ''}</Icon> </span>)
    }

    const chartData = [
      {
        value: 300,
        color: '#f3ffbd',
        highlight: '#FF5A5E',
        label: 'Red'
      },
      {
        value: 50,
        color: '#b2dbbf',
        highlight: '#5AD3D1',
        label: 'Green'
      },
      {
        value: 100,
        color: '#70c1b3',
        highlight: '#FFC870',
        label: 'Yellow'
      }
    ]

    const chartOptions = {
      segmentShowStroke: false,
      animationEasing: 'easeOutQuart',
      animateScale: false,
      animationSteps: 60
    }

    return (
      <Layout type="inline" className="Home shape-mainLayout">
        <Navigation />
        <LayoutMaster>
          <Container>
            <Layout type="inline">
              <Box>
                <p>Test</p>
                <Pager count={10} currentPage={1} />
              </Box>
              <Box>
                <p>Test</p>
                <Doughnut data={chartData} options={chartOptions} width="600" height="250"/>
              </Box>
            </Layout>
            <Layout type="inline">
              <LayoutMaster>
                <Box>
                  <p>Test</p>
                </Box>
              </LayoutMaster>
              <Box>
                <p>Test</p>
              </Box>
            </Layout>
            <Grid size={2}>
              <Box>
                <header>
                  Buttons
                </header>
                <div>
                  <Button>Default</Button>
                  <Button modifiers="secondary">Secondary</Button>
                  <Button modifiers="tertiary">Tertiary</Button>
                  <Button modifiers="warn">Warn</Button>
                  <Button modifiers="error">Error</Button>
                  <Button modifiers="cancel">Cancel</Button>
                  <Button disabled>Disabled</Button>
                </div>
                <br/>
                <div>
                  <Button modifiers="chips">Default</Button>
                  <Button modifiers="chips secondary">Secondary</Button>
                  <Button modifiers="chips tertiary">Tertiary</Button>
                  <Button modifiers="chips warn">Warn</Button>
                  <Button modifiers="chips error">error</Button>
                  <Button modifiers="chips cancel">Cancel</Button>
                  <Button modifiers="chips" disabled>Disabled</Button>
                </div>
                <br/>
              </Box>
              <Box>
                <header>
                  Icons
                </header>
                <div>
                  { icons }
                </div>
              </Box>
              <Box>
                <header>
                  Header
                </header>
                <p>Test d'un paragraphe</p>
                <p>Test d'un paragraphe 2</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Box>
              <Box>
                <header>
                  Input
                </header>
                <div>
                  <Input id="input-1" type="text" label="Input with label & value" value="50"/>
                  <Input id="input-2" type="text" label="Input with label .." placeholder=".. & placeholder"/>
                  <Input id="input-3" type="text" className="error" label="Input with error" value="mail@mail"/>
                </div>
              </Box>
            </Grid>
            <h2>Native Elements</h2>
            <Layout type="inline">
              <Box>
                <header>
                  <h2>Native Elements</h2>
                </header>
                <h1>Title lvl 1</h1>
                <p>Test d'un paragraphe</p>

                <h2>Title lvl 2</h2>
                <p>Test d'un paragraphe <a href="">avec un lien</a></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <h3>Title lvl 3</h3>
                <p>Test d'un paragraphe 2</p>

                <h2>Title lvl 2</h2>
                <h3>Title lvl 3</h3>
                <p>Test d'un paragraphe 2</p>

                <h1>Title lvl 1</h1>
                <h2>Title lvl 2</h2>
                <h3>Title lvl 3</h3>
                <h4>Title lvl 4</h4>
                <h5>Title lvl 5</h5>
                <h6>Title lvl 6</h6>
              </Box>
            </Layout>
          </Container>
        </LayoutMaster>
      </Layout>
    )
  }
}
