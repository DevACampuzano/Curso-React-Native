import {Button, Modal, View, TouchableWithoutFeedback} from 'react-native';
import {useState} from 'react';
import {styles} from '../theme/appTheme';
import {HeaderTitle, Text} from '../components';

const ModalScreen = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Modal animationType="fade" visible={show} transparent>
        <TouchableWithoutFeedback onPress={() => setShow(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.3)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 200,
                width: 200,
                backgroundColor: 'white',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.25,
                elevation: 10,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
              <Text style={{fontSize: 20, fontWeight: '300', marginBottom: 20}}>
                Cuerpo del Modal
              </Text>
              <Button title="Cerrar" onPress={() => setShow(false)} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Button
        title="Abrir modal"
        onPress={() => {
          setShow(true);
        }}
      />
    </View>
  );
};

export default ModalScreen;
