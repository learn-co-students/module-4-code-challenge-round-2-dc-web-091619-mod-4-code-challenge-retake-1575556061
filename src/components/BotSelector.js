import React from "react";

const BotSelector = props => {
  return (
    <div className="ui four column grid">
      <div className="row">
        <h3>Bot Bulk Importer:</h3>
      </div>

      <div className="row">
        <p>
          health: <strong>50</strong>
        </p>
        <input type="range" name="health" step="1" />
      </div>

      <div className="row">
        <p>
          armor: <strong>50</strong>
        </p>
        <input type="range" name="armor" step="1" />
      </div>

      <div className="row">
        <p>
          damage: <strong>50</strong>
        </p>
        <input type="range" name="damage" step="1" />
      </div>

      <button>
        Import bots meeting this criteria
      </button>
    </div>
  );
};

export default BotSelector;
