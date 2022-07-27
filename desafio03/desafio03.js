botaoAtualizar  =  document . getElementById ( 'atualizar-saldo' ) ;
botaoLimpar  =  document . getElementById ( 'limpar-saldo' ) ;
soma  =  documento . getElementById ( 'soma' ) ;
campoSaldo  =  documento . getElementById ( 'campo-saldo' ) ;

campoSaldo . innerHTML  =  0

somarAoSaldo ( soma )  
    campoSaldo . innerHTML  +=  soma ;


function  Limparaldo ( )  {
    campoSaldo . innerHTML  =  '' ;
}

botaoAtualizar . addEventListener ( 'click' ,  function  ( )  {
    somarAoSaldo ( valor + soma );
} ) ;

botaoLimpar . addEventListener ( 'click' ,  function  ( )  {
    limparSaldo ( ) ;
} ) ;