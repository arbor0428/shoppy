import { initializeApp } from "firebase/app";
import {v4 as uuid} from 'uuid';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged  
} from "firebase/auth";
import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_API_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
    signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
    signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
    onAuthStateChanged(auth, async (user) => {
        const updatedUser = user ? await adminUser(user) : null;
        callback(updatedUser);
    });
}

async function adminUser(user) {
    return get(ref(database, 'admins'))
        .then((snapshot) => {
            if(snapshot.exists()) {
                const admins = snapshot.val();
                const isAdmin = admins.includes(user.uid);
                return {...user, isAdmin}
            }
            return user;
        });
}

export async function addNewProduct(product, images) {
  const id = uuid(); // 제품 ID 생성
    const productData = {
        ...product,
        id,
        price: parseInt(product.price),
        images,
        options: product.options.split(','),
    };

    try {
        await set(ref(database, `products/${id}`), productData); // 제품 데이터 Firebase에 저장
        return { success: true, id }; // 성공적으로 등록되었음을 알리고 등록된 제품의 ID를 반환
    } catch (error) {
        console.error('Error adding product:', error);
        return { success: false, error }; // 등록 중 오류가 발생한 경우 오류 메시지 반환
    }
}

export async function getProducts() {
    return get(ref(database, 'products')).then((snapshot) => {
        if (snapshot.exists()) {
            return Object.values(snapshot.val());
        }
        return [];
    });
}

export async function getCart(userId) {
    return get(ref(database, `carts/${userId}`))//
    .then(snapshot => {
        const items = snapshot.val() || {};
        return Object.values(items);
    });
}

export async function addOrUpdateToCart(userId, product) {
    return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
    return remove(ref(database, `carts/${userId}/${productId}`));
}