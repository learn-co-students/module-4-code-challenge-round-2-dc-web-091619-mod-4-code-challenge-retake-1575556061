import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSelector from "../components/BotSelector";

const apiAddress = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      bots: [],
      myArmy: []
    }
  }

  componentDidMount() {
    fetch(apiAddress)
      .then(r => r.json())
      .then(bots => this.setState({ bots: bots }));
  }

  addBotToArmy = id => {
    let bot = this.state.bots.find(bot => bot.id === id)
    if (!this.state.myArmy.includes(bot)) {
      this.setState({ myArmy: [...this.state.myArmy, bot] });
    }
  };

  removeBotToArmy = id => {
    let updatedArmy = this.state.myArmy.filter(bot => bot.id !== id);
    this.setState({ myArmy: updatedArmy });
  };

  render() {
    return (
      <div>
        <BotSelector />
        <YourBotArmy bots={this.state.myArmy} removeBotToArmy={this.removeBotToArmy} />
        <BotCollection bots={this.state.bots} addBotToArmy={this.addBotToArmy} />
      </div>
    );
  }
}

export default BotsPage;
