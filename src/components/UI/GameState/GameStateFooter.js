import "./GameStateFooter.scss";

export const GameStateFooter = ({quitAction, showInventoryAction, sendDrawRequest, connectToWallet}) => {

  return (
    <div className="GameStateFooter">
      <div className="u-back" onClick={ showInventoryAction }></div>
      <button className="btn btn-primary btn-connect-wallet" onClick={ connectToWallet } >Connet to Wallet</button>
      <div className="u-footer-right">
        <div className="u-undo" onClick={quitAction}></div>
        <div className="u-draw" onClick={ sendDrawRequest }></div>
      </div>
    </div>
  );
};

export default GameStateFooter;
