import React, { useEffect } from 'react'
import { SessionWallet } from 'algorand-session-wallet';
import AlgorandWalletConnector from './AlgorandWalletConnector'
import { Alignment, AnchorButton, Button, Callout, Card, Elevation, Navbar, ProgressBar } from '@blueprintjs/core';
import { conf, collect, sendWait, getAsaId, getNFT }  from './lib/algorand'
import { Classes, Dialog } from "@blueprintjs/core";
import { BrowserView, MobileView, isIOS, isMobileSafari } from 'react-device-detect'



function App() {
  const sw = new SessionWallet(conf.network)
  const [sessionWallet, setSessionWallet] =  React.useState(sw)

  const [nft, setNFT]               = React.useState({id: 0, url:'algo-gator.png', name:"TBD"})
  const [accts, setAccounts]        = React.useState(sw.accountList())
  const [connected, setConnected]   = React.useState(sw.connected())
  const [claimable, setClaimable]   = React.useState(true)
  const [claimed, setClaimed]       = React.useState(false)

  const [loading, setLoading]       = React.useState(false)
  const [signed, setSigned]         = React.useState(false)
  const [open, setOpen]             = React.useState(false)

  const params  = new URLSearchParams(window.location.search);
  const escrow  = params.get("escrow")
  const addr    = params.get("addr")
  const secret  = params.get("secret")

  useEffect(()=>{
    setClaimable(secret !== null && addr !== null && escrow !== null)
  }, [escrow, addr, secret])
  

  function updateWallet(sw: SessionWallet){ 
    setSessionWallet(sw)
    setAccounts(sw.accountList())
    setConnected(sw.connected())
  }

  function triggerHelp() {
    setOpen(false)
    setLoading(false)
    document.getElementById("help-text")?.click()
  }

  async function handleDownload(){
    var a = document.createElement('a')
    const image = await fetch(nft.url)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    a.href = imageURL 
    a.download = nft.name
    a.target = "_blank"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  async function handleCollect() {
    if(secret === null || addr === null || escrow === null){
      return
    }

    setLoading(true)
    setOpen(true)

    try {
      const asaId       = await getAsaId(escrow)
      const txn_group   = await collect(sw, asaId, escrow, addr, secret)

      setSigned(true)

      getNFT(asaId).then((nft)=>{ setNFT(nft) })
      
      await sendWait(txn_group)

      setClaimable(false)
      setClaimed(true)
    } catch (error) {
      const e = error as Error
      if(e.message.includes("overspend")){
        alert("This account doe not have enough Algos to claim. If needed, contact decipherevent@algorand.com") 
      }else{
        alert("Something went wrong: "+error) 
      }
    }finally{
      setOpen(false)
      setLoading(false)
    }

  }

  let message = (
    <div>
      <h3> Greetings Algonaut!</h3> 
      <p> 
      Connect your wallet and collect your Algo Gator NFT
      </p>
    </div>
  )

  let buttons = (   
    <Button 
          style={{color: 'white', borderColor: 'white', borderRadius: '8px', width: '100%', marginTop: '8px'}}
          minimal={true} 
          outlined={true} 
          intent='success' 
          large={true} 
          icon='circle' 
          text='Collect' 
          onClick={handleCollect}  
          disabled={!connected || !claimable}
          loading={loading}
        />
    )

  if(nft.id !== 0 && claimed === true) {
    buttons = (
      <div>
        <Button 
            style={{color: 'white', borderColor: 'white', borderRadius: '8px', margin: '8px'}}
            minimal={true} 
            outlined={true} 
            intent='success' 
            large={true} 
            icon='download' 
            text='Download' 
            onClick={handleDownload}  
          />
        <AnchorButton 
            style={{color: 'white', borderColor: 'white', borderRadius: '8px',  margin: '8px'}}
            minimal={true} 
            outlined={true} 
            large={true} 
            intent='success' 
            href={'https://www.nftexplorer.app/asset/'+nft.id} 
            target="_blank" >
            <img style={{width:'20px', float:'left', marginRight:'8px'}} alt='nft explorer icon' src='/nftexplorer.ico' /> 
            NFT Explorer
          </AnchorButton>
      </div>
    )

    if(nft.id<420800534){
        message = (
          <div>
            <h3> Congrats on successfully collecting your Decipher Ticket!  </h3>
            <p>
              Please make sure the asset is in your Algorand Mobile Wallet and ready to be presented when you arrive at the venue.
              See you at Decipher!
            </p>
            <p><b>Note: </b>If the image of your Algo Gator isn't appearing yet, give it a moment, it might be shy</p>
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
          <p><b>Note: </b>If the image of your Algo Gator isn't appearing yet, give it a moment, it might be shy</p>
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
              <img alt='NFT' className='gator'  src={nft.url} />
            </div>
            <div className='content-details' >

              <div className='detail-prose' style={{color: 'white'}} >
                  {message}
              </div>

              <div className='collect-button' >
                {buttons}
              </div>

            </div>
          </div>
        </Card>
      </div>

      <div className='container'>
        <HelpDropdown />
      </div>

      <ClaimDialog triggerHelp={triggerHelp} open={open} signed={signed} />
      <SafariBugFixDialog />
    </div>
  );

}

function HelpDropdown() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className='help-container'>
      <Button id='help-text' icon='help' minimal={true} intent='primary' outlined={true} onClick={() => setIsOpen(true)} >
        Need Help?
      </Button>
      <Dialog isOpen={isOpen} canEscapeKeyClose={true} canOutsideClickClose={true} isCloseButtonShown={true} onClose={() => setIsOpen(false)} >
        <div className='container'>
          <div className='help-text' >
            <p style={{color: '#000 !important'}}>
                <h3>How to collect your Algo Gator</h3>

                <p>
                  First, you will need to download the <a href="https://algorandwallet.com/">Algorand Wallet</a> 
                  (make sure you have the <b>latest version</b>) and load it with at least 0.3 Algo. 
                </p>

                <p>Second, click the “Connect” button on the top right of this page and proceed as follows</p>

                <MobileView>
                  <ul>
                    <li>A pop-up will appear with the toggle on “Mobile” -- Choose the account you wish to use -- Click “Connect”</li>
                    <li>Return to the landing page on your mobile browser. Your Algorand Wallet address should now appear on the top right corner of the page</li>
                    <li>Click “Collect” on the web page in your mobile browser, and then switch to the wallet App to “Approve” the transaction</li>
                  </ul>
                </MobileView>
                <BrowserView>
                  <ul>
                    <li>Scan the QR code using the scanner within your mobile Algorand Wallet </li>
                    <li>A pop-up will appear within the mobile app -- Choose the account you wish to use -- Click “Connect”</li>
                    <li>At this point, your Algorand Wallet address will appear on the top right corner of the desktop landing page</li>
                    <li>Click “Collect” on the web page, and then “Approve” the transaction within your mobile wallet</li>
                  </ul>
                </BrowserView>

                <p>
                  Once approved and the transaction is processed, your unique 1/1 Algo Gator NFT asset will appear on this page 
                  and within your mobile Algorand wallet. 
                  (Note that the Algorand Wallet will show the Asset Name and Asset ID, not an actual image of the NFT...yet). 
                </p>

                <p>
                  <b>Not working? </b> Try turning the mobile app off and on again. 
                  Also please check your App Store to ensure your Algorand Mobile Wallet is updated to the latest version.
                </p>
                <p>
                  <b>Still not working?</b> During testing we noticed some issues when the entire processes is done using Mobile Safari. 
                  If you're having issues on mobile, please try to access the link from a desktop browser.
                </p>

                <p>
                  If you have any issues with the claiming process, please <a href="mailto:decipherevent@algorand.com">reach out</a> for assistance. 
                </p>

            </p>
          </div>
        </div>
      </Dialog>
    </div>
  )
}


function SafariBugFixDialog() {
  const [isOpen,setIsopen] = React.useState(isMobileSafari)

  return (
    <Dialog isOpen={isOpen} style={{background: 'lightgray'}} isCloseButtonShown={true}>
        <div className={Classes.DIALOG_BODY}>
          <h3>Hi! It looks like you're visiting from a mobile browser on iOS.</h3>
          <p>Unfortunately there is an experimental setting enabled by default on iOS that breaks the network connections with the mobile wallet.</p>
          <p><b>Current options:</b></p>
          <ul >
            <li>
              <p>
                Disable the setting as described 
                <a rel="noreferrer" target="_blank" href='https://developer.apple.com/forums/thread/685403?answerId=689525022#689525022'>here</a>
              </p>
              <Callout>
                <p>Safari Settings</p>
                <p>{"->Advanced"}</p>
                <p>{"-->Experimental Features"}</p>
                <p>{"---->NSURLSession WebSocket to off"}</p> 
              </Callout>
            </li> 
            <li>Or visit this site on a desktop browser</li> 
          </ul>
        </div>
    </Dialog>
  )

}

interface ClaimDialogProps {
  open: boolean
  signed: boolean
  triggerHelp(): void 
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

    // "fake" timer just to give enough time to submit txn and 
    // have it confirmed on the network, then load the NFT details
    const step = 100 / (6 * 1000) 
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
      <Dialog isOpen={isOpen} onClose={handleClose} style={{background: 'lightgray'}}>
        <div className={Classes.DIALOG_BODY}>
          {!signed?(
          <div className='container' >
            <div className='container' >
            <p><b>Please Approve the transaction in your Mobile Wallet. </b></p>
              <MobileView >
                <AnchorButton 
                  style={{ borderRadius: '8px',  margin: '20px 0px -30px'}}
                  text='Take me there' 
                  href={ isIOS ? "algorand-wc://wc?uri=wc:00e46b69-d0cc-4b3e-b6a2-cee442f97188@1":"wc:00e46b69-d0cc-4b3e-b6a2-cee442f97188@1" }
                  intent="success"
                  large={true}
                  minimal={true}
                  outlined={true}
                  rightIcon="double-chevron-right"
                  />
              </MobileView>
            </div>
            <div className='container' >
              <Button 
                style={{ borderRadius: '4px',  margin: '40px 0px -50px'}}
                minimal={true}
                outlined={true}
                onClick={props.triggerHelp} 
                intent="warning"
                text='Having Issues?' 
                />
              </div>
          </div>
          ):(
            <ProgressBar animate={true} intent='success' value={progress} />
          )}
        </div>
      </Dialog>
    );
}

export default App;
