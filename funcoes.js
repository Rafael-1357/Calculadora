var virgula = false, resultado = false;

function adicionarNumero(numero)
{
    var visor = document.querySelector("#visor");
    var valor_antigo = visor.value;
    var novo_numero = numero;

    if(resultado == true)
    {
        visor.value = novo_numero;
        resultado = false;
    }
    else
    {
        if(valor_antigo == "0.")
        {
            visor.value = valor_antigo + novo_numero;
        }
        else
        {
            if(valor_antigo == 0)
            {
                visor.value = novo_numero;
            }
            else
            {
                teste = valor_antigo.split('');
                teste_NaN = parseFloat(teste[teste.length-1]);
                
                if(isNaN(teste_NaN) && (teste[teste.length-1]!="."))
                {
                    visor.value = valor_antigo + " "+novo_numero;
                }
                else
                {
                    visor.value = valor_antigo + novo_numero;
                }
            }
        }
    }
}

function backspace()
{
    var visor = document.querySelector("#visor");
    var valor = String(visor.value);
    valor = valor.split('');
    var novo_valor = "";

    if(valor.length > 1)
    {
        if(valor[valor.length-1] == ".")
        {
            virgula = false;
        }
        
        for(var i = 0; i < valor.length - 1; i++)
        {
            novo_valor += valor[i];
        }
        
        
        visor.value = novo_valor;
    }
    else
    {
        visor.value = 0;
    }
}

function limparCalculo()
{
    var visor = document.querySelector("#visor");
    visor.value = 0;
}

function adicionarVirgula()
{
    if(virgula == false)
    {
        var visor = document.querySelector("#visor");
        visor.value += ".";
        virgula = true;
    }
}

function soma()
{
    var visor = document.querySelector("#visor");
    var equacao = String(visor.value).split("");
    
    if(resultado == true)
    {
        resultado = false;
    }

    if((isNaN(equacao[equacao.length-1]) && equacao[equacao.length-1] != "+"))
    {
        backspace();
        backspace();
        visor.value += " +";
    }
    else
    {
        if(!isNaN(equacao[equacao.length-1]))
        {
            visor.value += " +";
        }
    }
}

function subtracao()
{
    var visor = document.querySelector("#visor");
    var equacao = String(visor.value).split("");
    
    if(resultado == true)
    {
        resultado = false;
    }

    if((isNaN(equacao[equacao.length-1]) && equacao[equacao.length-1] != "-"))
    {
        backspace();
        backspace();
        visor.value += " -";
    }
    else
    {
        if(!isNaN(equacao[equacao.length-1]))
        {
            visor.value += " -";
        }
    }
}

function multiplicacao()
{
    var visor = document.querySelector("#visor");
    var equacao = String(visor.value).split("");
    
    if(resultado == true)
    {
        resultado = false;
    }

    if((isNaN(equacao[equacao.length-1]) && equacao[equacao.length-1] != "x"))
    {
        backspace();
        backspace();
        visor.value += " x";
    }
    else
    {
        if(!isNaN(equacao[equacao.length-1]))
        {
            visor.value += " x";
        }
    }
}

function divisao()
{
    var visor = document.querySelector("#visor");
    var equacao = String(visor.value).split("");
    
    if(resultado == true)
    {
        resultado = false;
    }

    if((isNaN(equacao[equacao.length-1]) && equacao[equacao.length-1] != "/"))
    {
        backspace();
        backspace();
        visor.value += " /";
    }
    else
    {
        if(!isNaN(equacao[equacao.length-1]))
        {
            visor.value += " /";
        }
    }
}

function calcularResultado()
{
    var visor = document.querySelector("#visor");
    var equacao = visor.value;
    var elementos = equacao.split(" ");
    
    if(!isNaN(parseFloat(elementos[elementos.length-1])))
    {
        //MULTIPLICAÇÃO E DIVISÃO
        for(var i=0; i < elementos.length; i++)
        {
            if(elementos[i] == "x")
            {
                operando1 = parseFloat(elementos[i-1]);
                operando2 = parseFloat(elementos[i+1]);
                resultado_local = operando1 * operando2;
                var nova_equacao = "";
    
                for(var j=0; j < elementos.length - 2; j++)
                {
                    if(j == i - 1)
                    {
                        nova_equacao += resultado_local+" ";
                    }
                    else
                    {
                        if(j >= i)
                        {
                            nova_equacao += elementos[j+2]+" ";
                        }
                        else
                        {
                            nova_equacao += elementos[j]+" ";
                        }
                    }
                }
                
                elementos = nova_equacao.split(" ");
                i--;
            }
    
            if(elementos[i] == "/")
            {
                operando1 = parseFloat(elementos[i-1]);
                operando2 = parseFloat(elementos[i+1]);
                resultado_local = operando1 / operando2;
                var nova_equacao = "";
    
                for(var j=0; j < elementos.length - 2; j++)
                {
                    if(j == i - 1)
                    {
                        nova_equacao += resultado_local+" ";
                    }
                    else
                    {
                        if(j >= i)
                        {
                            nova_equacao += elementos[j+2]+" ";
                        }
                        else
                        {
                            nova_equacao += elementos[j]+" ";
                        }
                    }
                    console.log(nova_equacao);
                }
    
                elementos = nova_equacao.split(" ");
                console.log("🚀 ~ file: teste.html ~ line 78 ~ elementos", elementos)
                i--;
            }
        }
    
    
        //SOMA E SUBTRAÇÃO
        for(var i=0; i < elementos.length; i++)
        {
            if(elementos[i] == "+")
            {
                operando1 = parseFloat(elementos[i-1]);
                operando2 = parseFloat(elementos[i+1]);
                resultado_local = operando1 + operando2;
                var nova_equacao = "";
    
                for(var j=0; j < elementos.length - 2; j++)
                {
                    if(j == i - 1)
                    {
                        nova_equacao += resultado_local+" ";
                    }
                    else
                    {
                        if(j >= i)
                        {
                            nova_equacao += elementos[j+2]+" ";
                        }
                        else
                        {
                            nova_equacao += elementos[j]+" ";
                        }
                    }
                }
                
                elementos = nova_equacao.split(" ");
                console.log("🚀 ~ file: teste.html ~ line 46 ~ elementos", elementos)
                i--;
            }
    
            if(elementos[i] == "-")
            {
                operando1 = parseFloat(elementos[i-1]);
                operando2 = parseFloat(elementos[i+1]);
                resultado_local = operando1 - operando2;
                var nova_equacao = "";
    
                for(var j=0; j < elementos.length - 2; j++)
                {
                    if(j == i - 1)
                    {
                        nova_equacao += resultado_local+" ";
                    }
                    else
                    {
                        if(j >= i)
                        {
                            nova_equacao += elementos[j+2]+" ";
                        }
                        else
                        {
                            nova_equacao += elementos[j]+" ";
                        }
                    }
                    console.log(nova_equacao);
                }
    
                elementos = nova_equacao.split(" ");
                console.log("🚀 ~ file: teste.html ~ line 78 ~ elementos", elementos)
                i--;
            }
        }

        visor.value = elementos[0];
        resultado = true;
    }
}