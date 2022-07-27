var  apiKey  =  '3f301be7381a03ad8d352314dcc3ec1d' ;
apiKey ;
requestToken ;
usuário ;
senha ;
sessionId ;
let  listId  =  '7101979' ;
  loginButton  =  document . getElementById ( 'botão de login' ) ;
  searchButton  =  document . getElementById ( 'botão de busca' ) ;
  searchContainer  =  document . getElementById ( 'search-container' ) ;

/*botao*/ 
/*botao de pesquisa*/

function  preencherSenha ( )  {
  senha  =  documento . getElementById ( 'senha' ) . valor ;
  validLoginButton ( ) ;
}
 preencherLogin ( )  {
  nomedeusuário  =   documento . getElementById ( 'login' ) . valor ;
  validLoginButton ( ) ;
}

function  preencherApi ( )  {
  apiKey  =  documento . getElementById ( 'api-key' ) . valor ;
  validLoginButton ( ) ;
}

function  validLoginButton ( )  {
  if  ( senha  && nome de  usuário  &&  apiKey )  {
     login . desabilitado  =  falso ;
  }    {
     login . desabilitado  =  verdadeiro ;
  }
}

class  HttpClient  {
  static    get ( { url , method , body =  null } )  {
    return  new  Promise ( ( resolve ,  rejeita )  =>  {
        pedido  =  new  XMLHttpRequest ( ) ;
      pedido . open ( método ,  url ,  true ) ;

      pedido . carregar  =  ( )  =>  {
        if  ( request . status  >=  200  &&  request . status  <  300 )  {
          resolver ( JSON.parse ( solicitação.respostaTexto ) ) ; 
        }    {
          rejeitar ( {
            estado : pedido . estado ,
            statusText : pedido . statusText
          } )
        }
      }
      pedido . onerro  =  ( )  =>  {
        rejeitar ( {
          estado : pedido . estado ,
          statusText : pedido . statusText
        } )
      }

      if  ( corpo )  {
        pedido . setRequestHeader ( "Content-Type" ,  "application/json;charset=UTF-8" ) ;
        corpo  =  JSON . stringify ( corpo ) ;
      }
      pedido . enviar ( corpo ) ;
    } )
  }
}

  procurarFilme ( consulta )  {
  consulta  =  encodeURI ( consulta )
  consola . log ( consulta )
   resultado  =  aguardar   . obter ( {
    url : `https://api.themoviedb.org/3/search/movie?api_key= ${ apiKey } &query= ${ query } ` ,
    método : "GET"
  } )
    resultado
}

 adicionarFilme ( filmeId )  {
  resultado  =  aguardar   . obter ( {
    url : `https://api.themoviedb.org/3/movie/ ${ filmeId } ?api_key= ${ apiKey } &language=en-US` ,
    método : "GET"
  } )
  consola . log ( resultado ) ;
}

 criarRequestToken  ( )  {
  resultado  =  aguardar  . obter ( {
    url : `https://api.themoviedb.org/3/authentication/token/new?api_key= ${ apiKey } ` ,
    método : "GET"
  } )
  requestToken  =  resultado . request_token
}

 criarSessao ( )  {
   resultado  =  aguardar   . obter ( {
    url : `https://api.themoviedb.org/3/authentication/session/new?api_key= ${ apiKey } &request_token= ${ requestToken } ` ,
    método : "GET"
  } )
  sessionId  =  resultado . session_id ;
}

  resultado  =  aguardar  . obter ( {
    url : `https://api.themoviedb.org/3/list?api_key= ${ apiKey } &session_id= ${ sessionId } ` ,
    método : "POST" ,
    corpo : {
      nome : nomeDaLista ,
      descrição : descrição ,
      idioma : "pt-br"
    }
  } )
  consola . log ( resultado ) ;
}

adicionarFilmeNaLista ( filmeId ,  listaId )  {
resultado  =  aguardar   . obter ( {
    url : `https://api.themoviedb.org/3/list/ ${ listaId } /add_item?api_key= ${ apiKey } &session_id= ${ sessionId } ` ,
    método : "POST" ,
    corpo : {
      media_id : filmeId
    }
  } )
  consola . log ( resultado ) ;
}

 pegarLista ( )  {
 resultado  =  aguardar. obter ( {
    url : `https://api.themoviedb.org/3/list/ ${ listId } ?api_key= ${ apiKey } ` ,
    método : "GET"
  } )
  consola . log ( resultado ) ;
}
