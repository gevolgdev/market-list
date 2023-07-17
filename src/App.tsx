import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle, Wrapper } from './style/GlobalStyle';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('../serviceWorker.js') .then(registration => {
            console.log('Service worker registrado com sucesso:', registration);
          }) .catch(error => {
            console.log('Falha ao registrar o service worker:', error);
          }
        );
      })
    }
    // const beforeInstallPromptHandler = (event: any) => {
    //   event.preventDefault();
    //   setDeferredPrompt(event.prompt);
    // };

    // window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    // return () => {
    //   window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    // };
  }, []);

  // const install = () => {
  //   console.log(deferredPrompt);
  //   if (deferredPrompt) {
  //     deferredPrompt.prompt();

  //     deferredPrompt.userChoice.then((choiceResult: any) => {
  //       if (choiceResult.outcome === 'accepted') {
  //         console.log('O usuário aceitou a instalação');
  //       } else {
  //         console.log('O usuário recusou a instalação');
  //       }

  //       setDeferredPrompt(null);
  //     });
  //   }
  // };

  const userScreen = window.innerWidth;

  return (
    <>
      <Wrapper>
        <button onClick={ () => {} }>Baixar app</button>
        {userScreen < 800
          ? <Outlet />
          : <h1>Use seu celular</h1>
        }
      </Wrapper>

      <GlobalStyle />
    </>
  )
};

export default App;
