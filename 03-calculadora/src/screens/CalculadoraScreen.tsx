import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import BottomCalc from '../components/BottomCalc';
import { useCalculadora } from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
    const {
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        clear,
        construirNumero,
        numero,
        numeroAnterior,
        posotivoNegativo
    } = useCalculadora();
    
    return (
        <View style={styles.calculadoraContainer}>
            {
                numeroAnterior !== '0' && (
                    <Text style={styles.historial}> {numeroAnterior}</Text>
                )
            }
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
            <View style={styles.fila}>
                <BottomCalc texto='C' color='#9B9B9B' colorText='black' accion={clear} />
                <BottomCalc texto='+/-' color='#9B9B9B' colorText='black' accion={posotivoNegativo} />
                <BottomCalc texto='Del' color='#9B9B9B' colorText='black' accion={btnDelete} />
                <BottomCalc texto='/' color='#FF9427' accion={btnDividir} />
            </View>
            <View style={styles.fila}>
                <BottomCalc texto='7' accion={construirNumero} />
                <BottomCalc texto='8' accion={construirNumero} />
                <BottomCalc texto='9' accion={construirNumero} />
                <BottomCalc texto='X' color='#FF9427' accion={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <BottomCalc texto='4' accion={construirNumero} />
                <BottomCalc texto='5' accion={construirNumero} />
                <BottomCalc texto='6' accion={construirNumero} />
                <BottomCalc texto='-' color='#FF9427' accion={btnRestar} />
            </View>
            <View style={styles.fila}>
                <BottomCalc texto='1' accion={construirNumero} />
                <BottomCalc texto='2' accion={construirNumero} />
                <BottomCalc texto='3' accion={construirNumero} />
                <BottomCalc texto='+' color='#FF9427' accion={btnSumar} />
            </View>
            <View style={styles.fila}>
                <BottomCalc texto='0' anchor accion={construirNumero} />
                <BottomCalc texto='.' accion={construirNumero} />
                <BottomCalc texto='=' color='#FF9427' accion={calcular} />
            </View>
        </View>
    );
}

export default CalculadoraScreen;
