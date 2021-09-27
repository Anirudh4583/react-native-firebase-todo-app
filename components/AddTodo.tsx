import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddIcon, Fab, Button, Input, Modal, FormControl } from 'native-base';

const AddTodo = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputTodo, setInputTodo] = useState('');

  function onSavePressed() {
    console.log('save btn pressed', inputTodo);

    setShowModal(false);
  }
  return (
    <>
      <Fab
        placement='bottom-right'
        colorScheme='orange'
        icon={<AddIcon size='sm' />}
        onPress={() => {
          console.log('add btn pressed');
          setShowModal(true);
        }}
      />
      <View>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth='400px'>
            <FormControl>
              <Modal.CloseButton />
              <Modal.Header>Add New TODO</Modal.Header>
              <Modal.Body>
                <Input
                  isRequired={true}
                  value={inputTodo}
                  onChangeText={(text) => setInputTodo(text)}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button onPress={onSavePressed} colorScheme='orange'>
                    Save
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </FormControl>
          </Modal.Content>
        </Modal>
      </View>
    </>
  );
};

export default AddTodo;

const styles = StyleSheet.create({});
