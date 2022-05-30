import React from 'react';
import logo from './logo.svg';
import { setupRootStore } from './mst/setup';
import { Provider } from 'mobx-react';
import './App.css';
import { EmployerComponent } from './components/Employer';

interface Props {}
interface State {
  rootTree: any;
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      rootTree: null,
    };
  }
  componentDidMount() {
    const { rootTree } = setupRootStore();
    this.setState({ rootTree });
  }
  render() {
    const { rootTree } = this.state;
    if (!rootTree) return null;

    return (
      <Provider rootTree={rootTree}>
        <div>
          <EmployerComponent></EmployerComponent>
        </div>
      </Provider>
    );
  }
}

export default App;
