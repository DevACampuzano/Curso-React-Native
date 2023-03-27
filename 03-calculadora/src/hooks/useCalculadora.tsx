import { useState, useRef } from 'react';

enum Operadores {
    suma, resta, multiplicaion, dividir
}


export const useCalculadora = () => {

    const [numero, setnumero] = useState<string>('0');
    const [numeroAnterior, setnumeroAnterior] = useState<string>('0');
    const operacion = useRef<Operadores>();

    const clear = () => {
        setnumero('0');
        setnumeroAnterior('0');
    }

    const construirNumero = (text: string) => {
        if (numero.includes('.') && text === '.')
            return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            if (text === '.') {
                setnumero(numero + text);
            } else if (text === '0' && numero.includes('.')) {
                setnumero(numero + text);
            } else if (text !== '0' && !numero.includes('.')) {
                setnumero(text);
            } else if (text === '0' && !numero.includes('.')) {
                setnumero(text);
            } else {
                setnumero(numero + text);
            }
        } else {
            setnumero(numero + text);
        }
    }

    const posotivoNegativo = () => {
        if (numero.includes('-')) {
            setnumero(numero.replace('-', ''));
        } else {
            setnumero('-' + numero);
        }
    }

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substring(1);
        }

        if (numeroTemp.length > 1) {
            setnumero(negativo + numeroTemp.slice(0, -1));
        } else {
            setnumero('0');
        }
    }

    const cambiarNumeroXAnterior = () => {
        if (numero.endsWith('.')) {
            setnumeroAnterior(numero.slice(0, -1));
        } else {
            setnumeroAnterior(numero);
        }
        setnumero('0');
    }

    const btnDividir = () => {
        cambiarNumeroXAnterior();
        operacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumeroXAnterior();
        operacion.current = Operadores.multiplicaion;
    }

    const btnRestar = () => {
        cambiarNumeroXAnterior();
        operacion.current = Operadores.resta;
    }

    const btnSumar = () => {
        cambiarNumeroXAnterior();
        operacion.current = Operadores.suma;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
        switch (operacion.current) {
            case Operadores.dividir:
                setnumero(`${num2 / num1}`);
                break;
            case Operadores.multiplicaion:
                setnumero(`${num1 * num2}`);
                break;
            case Operadores.resta:
                setnumero(`${num2 - num1}`);
                break;
            case Operadores.suma:
                setnumero(`${num1 + num2}`);
                break;
        }
        setnumeroAnterior('0');
    }

    return {
        numero,
        numeroAnterior,
        clear,
        construirNumero,
        posotivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    }
}