import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: 'Hello',
      name: '没有账号'
    };
    setTimeout(() => {
      this.setState({
        str: '你好'
      })
    }, 2000);
  }
  
  componentWillMount() {
    console.log('componentWillMount：组件即将挂载');
  }

  componentDidMount() {
    console.log('componentDidMount：组件已经挂载了');
    // UI ready 最快看到盒子，接着再取数据，不会阻塞
    fetch('https://api.github.com/users/shunwuyu')
    .then(data => data.json())
    .then(data => {
      this.setState({
        name: data.name
      })
    })
  }

  componentWillUpdate() {
    console.log('componentWillUpdate：组件即将更新');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate：组件更新了');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps：组件即将接收Props');
  }

  // nextProps 新接受的，不是页面上已有的
  shouldComponentUpdate(nextProps) {
    if (nextProps.num === this.props.num) {
      console.log(nextProps);
      console.log(this.props.num);
      console.log('shouldComponentUpdate：值没有改变，不需要更新！');
      return false
    }
    console.log(nextProps);
    console.log(this.props.num);
    console.log('shouldComponentUpdate：值发生改变，即将更新！');
    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount：组件即将被卸载');
  }

  render () {
    return (
      <div>
        <div>{this.state.name}</div>
        <span>
          <h2>{parseInt(this.props.num)}</h2>
          <span>
            <h2>{this.state.str}</h2>
          </span>
        </span>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({
        num: 3
      })
    }, 5000)
    setTimeout(() => {
      this.setState({
        showLifeCycle: false
      })
    }, 10000)
  }
  state = {
    num: 2,
    showLifeCycle: true
  }
  render() {
    if (!this.state.showLifeCycle) 
      return <div>hhhhhh</div>;
    return (
      <LifeCycle num={this.state.num} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
