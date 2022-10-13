import { useAuthStore } from "@/stores/AuthStore";
import firebase from "firebase/compat/app";
import "firebase/firestore";

export interface IBpItem {
    hi: number
    lo: number
    hr: number
    dt: string
    id: string
    co: string
}

export default () => {
    const readOrderedBpItems = async () => {
        const authStore = useAuthStore();
        const uid = authStore.user?.uid;
        const firebaseCollection = authStore.db.collection(`UserItems/${uid}/BpItems`);
        const querySnapshot = await firebaseCollection.orderBy("dt", "desc").get();
        const result = querySnapshot.docs.map((doc: any) => {
            const bpItem = doc.data() as IBpItem;
            bpItem.id = doc.id;
            return { ...bpItem }
        });
        return result;
    };
    const deleteBpItem = async (id: string) => {
        const authStore = useAuthStore();
        const uid = authStore.user?.uid;
        const firebaseCollection = authStore.db.collection(`UserItems/${uid}/BpItems`);
        firebaseCollection.doc(`${id}`).delete();
    }
    const findBpItemByDocId = async (id: string) => {
        const authStore = useAuthStore();
        const uid = authStore.user?.uid;
        const firebaseCollection = authStore.db.collection(`UserItems/${uid}/BpItems`);
        console.log(`findByItemByDocID ${id}`);
        const querySnapshot = await firebaseCollection.where(firebase.firestore.FieldPath.documentId(), "==", id).get();
        const result = querySnapshot.docs.map((doc) => {
            const bpItem = doc.data() as IBpItem;
            bpItem.id = doc.id;
            return { ...bpItem }
        });
        return result[0];
    }
    const updateBpItem = async (id: string, updatedData: IBpItem) => {
        const authStore = useAuthStore();
        const uid = authStore.user?.uid;
        const firebaseCollection = authStore.db.collection(`UserItems/${uid}/BpItems`);
        return firebaseCollection.doc(updatedData.id).update(updatedData);
    }
    const addBpItem = async (data: IBpItem) => {
        const authStore = useAuthStore();
        const uid = authStore.user?.uid;
        const firebaseCollection = authStore.db.collection(`UserItems/${uid}/BpItems`);
        const firebaseObject = await firebaseCollection.add(data);
        console.log(firebaseObject);
        return firebaseObject;
    }
    const readOperation = async (collectionName: any) => {
        const authStore = useAuthStore();
        const firebaseCollection = authStore.db.collection(collectionName);
        const querySnapshot = await firebaseCollection.get();
        const result = querySnapshot.docs.map((doc: any) => {
            return { ...doc.data() }
        });
        return result;
    };
    const createOperation = async (collectionName: any, data: any) => {
        const authStore = useAuthStore();
        const firebaseCollection = authStore.db.collection(collectionName);
        const firebaseObject = await firebaseCollection.add(data);
        console.log(firebaseObject);
        return firebaseObject;
    }
    const deleteOperation = async (collectionName: any, username: any) => {
        const authStore = useAuthStore();
        const firebaseCollection = authStore.db.collection(collectionName);
        const querySnapshot = await firebaseCollection.where('username', "==", username).get();
        const result = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
        });
        firebaseCollection.doc(`${result[0].id}`).delete();
    }
    const findIdForDoc = async (collectionName: any, username: any) => {
        const authStore = useAuthStore();
        const firebaseCollection = authStore.db.collection(collectionName);
        const querySnapshot = await firebaseCollection.where('username', "==", username).get();
        const result = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
        });
        return result[0];
    }
    const updateOperation = async (collectionName: any, updatedData: any) => {
        const authStore = useAuthStore();
        const firebaseCollection = authStore.db.collection(collectionName);
        firebaseCollection.doc(updatedData.id).update(updatedData);
    }
    return {
        readOrderedBpItems,
        deleteBpItem,
        findBpItemByDocId,
        updateBpItem,
        addBpItem,
        readOperation,
        createOperation,
        deleteOperation,
        findIdForDoc,
        updateOperation,
    };
};