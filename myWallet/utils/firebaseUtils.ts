// filepath: /c:/Users/L13/myWallet-Public/myWallet/app/utils/firebaseUtils.ts
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { Alert } from 'react-native';

export const uploadImage = async (uri: string) => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase.storage().ref().child(`images/${Date.now()}`);
    const snapshot = await ref.put(blob);

    const downloadURL = await snapshot.ref.getDownloadURL();
    console.log('Image uploaded successfully:', downloadURL);
    return downloadURL;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'abonnement :', error);
    Alert.alert('Erreur', 'Erreur lors de l\'ajout de l\'abonnement. Veuillez réessayer.');
  }
};