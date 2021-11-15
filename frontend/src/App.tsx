import React, { useEffect } from 'react'
import { SessionWallet } from 'algorand-session-wallet';
import AlgorandWalletConnector from './AlgorandWalletConnector'
import { Alignment, Button, Card, Collapse, Elevation, Navbar, ProgressBar } from '@blueprintjs/core';
import { conf, collect, sendWait, getAsaId, getNFT }  from './lib/algorand'
import { Classes, Dialog } from "@blueprintjs/core";




function App() {
  const sw = new SessionWallet(conf.network)
  const [sessionWallet, setSessionWallet] =  React.useState(sw)

  const [nft, setNFT]               = React.useState({id: 0, url:'algo-gator.png', name:"TBD"})
  const [accts, setAccounts]        = React.useState(sw.accountList())
  const [connected, setConnected]   = React.useState(sw.connected())
  const [claimable, setClaimable]   = React.useState(true)

  const [loading, setLoading]       = React.useState(false)
  const [signed, setSigned]         = React.useState(false)
  const [open, setOpen]             = React.useState(false)


  const params  = new URLSearchParams(window.location.search);
  const escrow  = params.get("escrow")
  const addr    = params.get("addr")
  const secret  = params.get("secret")

  useEffect(()=>{
    if(secret === null || addr === null || escrow === null){
      setClaimable(false)
    }
  }, [escrow, addr, secret])
  

  function updateWallet(sw: SessionWallet){ 
    setSessionWallet(sw)
    setAccounts(sw.accountList())
    setConnected(sw.connected())
  }

  async function handleCollect() {
    if(secret === null || addr == null || escrow == null){
      return
    }

    setLoading(true)
    setOpen(true)

    const asaId = await getAsaId(escrow)
    const txn_group = await collect(sw, asaId, escrow, addr, secret)

    setSigned(true)

    await sendWait(txn_group)

    const nft = await getNFT(asaId)

    setNFT(nft)
    setClaimable(false)
    setOpen(false)
    setLoading(false)
  }

  let message = (
    <div>
      <h3> Greetings Algonaut!</h3> 
      <p> 
      Connect your wallet and claim your ticket
      </p>
    </div>
  )

  //nft.id=99
  if(nft.id !== 0) {
    if(nft.id<420774977){
        message = (
          <div>
            <h3> Congrats on successfully collecting your Decipher Ticket!  </h3>
            <p>
              Please make sure the asset is in your Algorand Mobile Wallet and ready to be presented when you arrive at the venue.
              See you at Decipher!
            </p>
          </div>
        )
    }else{
      message = (
        <div>
          <h3> Congrats on successfully collecting your Algo Gator NFT!  </h3>
          <p>
            Enjoy it as a commemorative token that you’ve earned by being part of the Algorand community and signing up as a virtual VIP.
            See you online at Decipher!
          </p>
        </div>
      )
    }
  }

  return (
    <div className="App" style={{background: '#000'}}>
      <Navbar style={{background: 'linear-gradient(90deg,#b72375 3%,#f37e33 97%)'}}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading><img alt='Algorand A' className='header-icon' src='favicon.ico' /></Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group  align={Alignment.RIGHT}>
          <AlgorandWalletConnector  
            darkMode={true}
            sessionWallet={sessionWallet}
            accts={accts}
            connected={connected} 
            updateWallet={updateWallet}
          />
        </Navbar.Group>
      </Navbar>
      <div className='container'>
        <Card elevation={Elevation.FOUR} className='ticket-card'>
          <div className='content' >

            <div className='content-piece' >
              <img alt='NFT' className='gator' src={nft.url} />
            </div>
            <div className='content-details' >

              <div className='detail-prose' style={{color: 'white'}} >
                  {message}
              </div>

              <div className='collect-button'  style={{visibility: claimable?'visible':'hidden'}}   >
                <Button 
                    style={{color: 'white', borderColor: 'white', borderRadius: '8px'}}
                    minimal={true} 
                    outlined={true} 
                    intent='success' 
                    large={true} 
                    icon='circle' 
                    text='Collect' 
                    onClick={handleCollect}  
                    disabled={!connected}
                    loading={loading}
                  />
                </div>
            </div>
          </div>
        </Card>
      </div>

      <div className='container'>
        <HelpDropdown />
      </div>

      <ClaimDialog open={open} signed={signed} />
    </div>
  );

}

function HelpDropdown() {
  const [isOpen, setIsOpen] = React.useState(false)
  function handleClick() { setIsOpen(!isOpen) }

  return (
    <div className='help-container'>
      <Button icon='help' minimal={true} intent='primary' outlined={true} onClick={handleClick} >
        Need Help?
      </Button>
      <Collapse isOpen={isOpen}  >
        <div className='container'>
          <div className='help-text' >
            <p style={{color: 'white'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit. Feugiat pretium nibh ipsum consequat. Pellentesque eu tincidunt tortor aliquam nulla. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Massa sed elementum tempus egestas sed sed risus. Natoque penatibus et magnis dis parturient. Cursus sit amet dictum sit amet justo donec. Id leo in vitae turpis massa sed. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus.
            </p>
          </div>
        </div>
      </Collapse>
    </div>
  )

}


interface ClaimDialogProps {
  open: boolean
  signed: boolean
}

function ClaimDialog(props: ClaimDialogProps){
  const [isOpen, setIsOpen] = React.useState(props.open)
  const [signed, setSigned] = React.useState(props.signed)
  const [progress, setProgress] = React.useState(0)

  const handleClose = React.useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    setIsOpen(props.open)
    setSigned(props.signed)
  }, [props])

  useEffect(()=>{
    let p = 0
    if(!signed || progress > 0 || progress >= 1.0) return;

    // 8 second "fake" timer just to give enough time to submit txn and 
    // have it confirmed on the network, then load the NFT details
    const step = 100 / (8 * 1000) 
    const interval = setInterval(()=>{
        p += step
        if(p > 1.0) {
          clearInterval(interval)
          setProgress(1.0)
          return
        }
        setProgress(p)
    }, 100)

  }, [signed, progress])

  return (
      <Dialog isOpen={isOpen} onClose={handleClose} style={{background: '#000'}}>
        <div className={Classes.DIALOG_BODY}>
          {!signed?(
          <div className='container' style={{color:'white'}}>
            <p><b>Please Approve the transaction in your Mobile Wallet. </b></p>
            <p>You may have to refresh your Wallet Connect session</p>
            <p>On your mobile app under Settings - Wallet Connect</p>
          </div>
          ):(
            <ProgressBar animate={true} intent='success' value={progress} />
          )}
        </div>
      </Dialog>
    );
}

export default App;
